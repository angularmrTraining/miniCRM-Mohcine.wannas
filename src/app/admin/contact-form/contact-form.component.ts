import { Component, OnInit } from '@angular/core';
import { ContactService } from 'app/admin/contact.service';
import { Contact } from 'app/helper/models/Contact.model';
import { AlertService } from 'app/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  entityForm : FormGroup;
  contacts : Contact[];
  model: Contact;
  id:number;

  constructor(private contactService:ContactService,
              private alert: AlertService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        switch (params['state']){
          case 'edit':
            if(params['id']){
              this.loadContact(params['id']);
            } 
            break;
          case 'add':
            this.createForm();
            break;
          default :
            this.returnToList();
            break;
        }
      }
    );
  }

  loadContact(id:number) {
      this.contactService.get(id).subscribe(
        resp => {
          this.id = id;
          this.createForm(resp)
        },
        error => {
          this.alert.error();
          this.returnToList();
        });
  }
  
  createForm(contact?:Contact) {
    if(!contact) {
      contact = new Contact();
    }
    this.entityForm = this.fb.group({
      'name': [contact.name, Validators.required],
      'phoneNumber': [contact.phoneNumber, Validators.required]
    });
  }

  isNotValidRequired(control: any) {
    return control.hasError('required') && (control.dirty || control.touched)
  }

  returnToList(){
    this.router.navigate(['admin/contacts'])
  }

  saveSucceed(): any {
    this.alert.success("Super","Enregistrement effectuée par succès");
    this.returnToList();
  }

  public submit($ev, value: any, callback?: (param: any) => void) {
    let model: Contact = new Contact(value);
    $ev.preventDefault();
    for (let c in this.entityForm.controls) {
      this.entityForm.controls[c].markAsTouched();
      if(!this.entityForm.controls[c].valid) {
        console.log("WARN : " + c + "is not valid");
      }
    }

    if (this.entityForm.valid) {
      this.model = model;
      if( this.id) {
        this.model.id = this.id;
        this.contactService.update(this.model).subscribe(
          resp => {
            this.saveSucceed();
            if( callback) {
              callback(resp);
            }
          },
          error => this.alert.error(JSON.parse(error._body).message)
        );
      } else {
        this.contactService.create(this.model).subscribe(
          resp => {
            this.saveSucceed();
            if( callback) {
              callback(resp);
            }
          },
          error => this.alert.error(JSON.parse(error._body).message)
        );
      }
    }
  }
}


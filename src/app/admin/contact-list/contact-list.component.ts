import { Component, OnInit } from '@angular/core';
import { ContactService } from 'app/admin/contact.service';
import { Contact } from 'app/helper/models/Contact.model';
import { AlertService } from 'app/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public contactService:ContactService,
              private alert: AlertService,
              private router: Router) { }
  contacts : Contact[];
  ngOnInit() {
    this.contactService.getAll().subscribe(
      resp => this.contacts = resp,
      error => this.alert.error('erreur')
    );
    
  }
  goToForm(id?:number) {
    if(!id) {
      this.router.navigate(["admin/contacts/add"]);
    }else{
      this.router.navigate(["admin/contacts/"+id+"/edit"]);
    }
  }

  delete(id:number) {
    if(id) {
      this.alert.confirm("Êtes vous sûr de vouloir supprimer ce contact ?")
    }
  }

}

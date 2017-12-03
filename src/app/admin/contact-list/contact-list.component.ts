import { Component, OnInit } from '@angular/core';
import { ContactService } from 'app/admin/contact.service';
import { Contact } from 'app/helper/models/Contact.model';
import { AlertService } from 'app/alert.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public contactService:ContactService,
              private alert: AlertService) { }
  contacts : Contact[];
  ngOnInit() {
    this.contactService.getAll().subscribe(
      resp => this.contacts = resp,
      error => this.alert.error('erreur')
    );
 
    
  }

}

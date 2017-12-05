import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { AdminRoutingModule } from './admin-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HelperModule } from '../helper/helper.module';
import { AuthModule } from '../auth/auth.module';

import { MainService } from './main.service';
import { AlertService } from '../alert.service';
import { LayoutComponent } from './layout/layout.component';
import { ContactService } from 'app/admin/contact.service';
import { ContactListComponent } from 'app/admin/contact-list/contact-list.component';
import { ContactFormComponent } from 'app/admin/contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HelperModule,
    FormsModule,
    ClarityModule,
    AuthModule
  ],
  declarations: [MainPageComponent, LayoutComponent, ContactListComponent,ContactFormComponent],
  providers: [
    MainService,
    AlertService,
    ContactService
  ]
})
export class AdminModule { }

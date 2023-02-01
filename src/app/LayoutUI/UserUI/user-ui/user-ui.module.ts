import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserUIRoutingModule } from './user-ui-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { AllcourseComponent } from './Components/allcourse/allcourse.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BlogComponent } from './Components/blog/blog.component';


@NgModule({
  declarations: [
    HomeComponent,
    AllcourseComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    UserUIRoutingModule
  ]
})
export class UserUIModule { }

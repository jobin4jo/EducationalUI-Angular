import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SuperAdminModule {}

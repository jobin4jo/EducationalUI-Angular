import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Material/material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperAdminComponent } from './LayoutUI/SuperAdmin/super-admin/super-admin.component';
import { UserUIComponent } from './LayoutUI/UserUI/user-ui/user-ui.component';
import { AdminDashBoardComponent } from './LayoutUI/SuperAdmin/Components/admin-dash-board/admin-dash-board.component';
import { CourseComponent } from './LayoutUI/SuperAdmin/Components/course/course.component';

@NgModule({
  declarations: [AppComponent, SuperAdminComponent, UserUIComponent, AdminDashBoardComponent, CourseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MaterialModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

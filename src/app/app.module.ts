import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Material/material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SuperAdminComponent } from './LayoutUI/SuperAdmin/super-admin/super-admin.component';
import { UserUIComponent } from './LayoutUI/UserUI/user-ui/user-ui.component';
import { AdminDashBoardComponent } from './LayoutUI/SuperAdmin/Components/admin-dash-board/admin-dash-board.component';
import { CourseComponent } from './LayoutUI/SuperAdmin/Components/course/course.component';
import { CategoryComponent } from './LayoutUI/SuperAdmin/Components/category/category.component';
import { ChangePasswordComponent } from './LayoutUI/SuperAdmin/Components/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddandEditCourseComponent } from './LayoutUI/SuperAdmin/Components/course/Components/addand-edit-course/addand-edit-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TutorComponent } from './LayoutUI/SuperAdmin/Components/tutor/tutor.component';
import { AddTutorComponent } from './LayoutUI/SuperAdmin/Components/tutor/Components/add-tutor/add-tutor.component';
import { AddCategoryComponent } from './LayoutUI/SuperAdmin/Components/category/Components/add-category/add-category.component';
import { CouponComponent } from './LayoutUI/SuperAdmin/Components/coupon/coupon.component';
import { AddCouponComponent } from './LayoutUI/SuperAdmin/Components/coupon/Components/add-coupon/add-coupon.component';
import { ProfileDetailComponent } from './LayoutUI/SuperAdmin/Components/profile-detail/profile-detail.component';
import { CertificateComponent } from './LayoutUI/SuperAdmin/Components/certificate/certificate.component';
@NgModule({
  declarations: [
    AppComponent,
    SuperAdminComponent,
    UserUIComponent,
    AdminDashBoardComponent,
    CourseComponent,
    CategoryComponent,
    ChangePasswordComponent,
    AddandEditCourseComponent,
    TutorComponent,
    AddTutorComponent,
    AddCategoryComponent,
    CouponComponent,
    AddCouponComponent,
    ProfileDetailComponent,
    CertificateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MaterialModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

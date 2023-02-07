import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from '../Components/admin-dash-board/admin-dash-board.component';
import { CategoryComponent } from '../Components/category/category.component';
import { AddandEditCourseComponent } from '../Components/course/Components/addand-edit-course/addand-edit-course.component';
import { CourseComponent } from '../Components/course/course.component';
import { TutorComponent } from '../Components/tutor/tutor.component';

const routes: Routes = [
  { path: '', component: AdminDashBoardComponent },
  { path: 'cat', component: CategoryComponent },
  { path: 'course', component: CourseComponent },
  { path: 'addCourse', component: AddandEditCourseComponent },
  { path: 'tutor', component: TutorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}

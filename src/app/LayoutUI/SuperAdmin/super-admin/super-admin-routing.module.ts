import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from '../Components/admin-dash-board/admin-dash-board.component';
import { CourseComponent } from '../Components/course/course.component';

const routes: Routes = [
  { path: '', component: AdminDashBoardComponent },
  { path: 'course', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}

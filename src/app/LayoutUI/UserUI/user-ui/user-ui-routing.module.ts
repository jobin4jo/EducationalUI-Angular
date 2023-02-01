import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcourseComponent } from './Components/allcourse/allcourse.component';
import { BlogComponent } from './Components/blog/blog.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'All', component: AllcourseComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUIRoutingModule {}

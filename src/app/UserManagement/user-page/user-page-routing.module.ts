import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIComponent } from './ui/ui.component';

const routes: Routes = [{ path: 'UI', component: UIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}

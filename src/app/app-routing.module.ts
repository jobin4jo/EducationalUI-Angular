import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './LayoutUI/SuperAdmin/super-admin/super-admin.component';
import { UserUIComponent } from './LayoutUI/UserUI/user-ui/user-ui.component';

const routes: Routes = [
  {
    path: '',
    component: UserUIComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/LayoutUI/UserUI/user-ui/user-ui.module').then(
            (m) => m.UserUIModule
          ),
      },
    ],
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'Admin',
        loadChildren: () =>
          import(
            '../app/LayoutUI/SuperAdmin/super-admin/super-admin.module'
          ).then((m) => m.SuperAdminModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

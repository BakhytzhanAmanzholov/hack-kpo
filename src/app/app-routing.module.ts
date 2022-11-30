import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BaseComponent} from "./modules/base.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {path: '', component: BaseComponent,
    children: [
      {path: '', loadChildren: () => import('./modules/manager/manager.module').then(m => m.ManagerModule)},
    ],
  },
  {path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

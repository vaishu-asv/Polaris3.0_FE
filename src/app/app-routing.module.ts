import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},


  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},

  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

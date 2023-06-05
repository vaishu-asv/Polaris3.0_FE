import { BaselineComponent } from './baseline/baseline.component';
import { CreateBaseComponent } from './create-base/create-base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'create-base', component: CreateBaseComponent },

  { path: 'baseline', component: BaselineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

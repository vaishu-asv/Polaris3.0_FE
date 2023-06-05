import { BaselineComponent } from './baseline/baseline.component';
import { BaseLineListFinalComponent } from './base-line-list-final/base-line-list-final.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CreateBaseComponent } from './create-base/create-base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create-base', component: CreateBaseComponent },

  { path: 'dash-board', component: DashBoardComponent },

  { path: 'base-line-list-final', component: BaseLineListFinalComponent },

  { path: 'baseline', component: BaselineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

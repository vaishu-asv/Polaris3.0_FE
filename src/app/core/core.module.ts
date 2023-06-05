import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateBaseComponent } from './create-base/create-base.component';
import { BaselineComponent } from './baseline/baseline.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BaseLineListFinalComponent } from './base-line-list-final/base-line-list-final.component';


@NgModule({
  declarations: [
    CreateBaseComponent,
    BaselineComponent,
    DashBoardComponent,
    BaseLineListFinalComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }

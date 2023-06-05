import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { FrameComponent } from './frame/frame.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    FrameComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
],
exports:[FrameComponent]
})
export class ModulesModule { }

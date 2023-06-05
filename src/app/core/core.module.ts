import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BaselineCreationHybridcommonComponent } from './baseline-creation-hybridcommon/baseline-creation-hybridcommon.component';
import { BaselineCreationHybridecommonComponent } from './baseline-creation-hybridecommon/baseline-creation-hybridecommon.component';
import { CreateBaseComponent } from './create-base/create-base.component';


@NgModule({
  declarations: [
    BaselineCreationHybridcommonComponent,
    BaselineCreationHybridecommonComponent,
    CreateBaseComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }

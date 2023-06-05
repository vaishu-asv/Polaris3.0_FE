import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BaselineCreationHybridcommonComponent } from './baseline-creation-hybridcommon/baseline-creation-hybridcommon.component';
import { BaselineCreationHybridecommonComponent } from './baseline-creation-hybridecommon/baseline-creation-hybridecommon.component';
import { CreateBaseComponent } from './create-base/create-base.component';
import { BaselineComponent } from './baseline/baseline.component';
import { BaselistComponent } from './baselist/baselist.component';


@NgModule({
  declarations: [
    BaselineCreationHybridcommonComponent,
    BaselineCreationHybridecommonComponent,
    CreateBaseComponent,
    BaselineComponent,
    BaselistComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }

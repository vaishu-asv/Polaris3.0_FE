import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { BaselineComponent } from './baseline/baseline.component';
import { CreateBaseComponent } from './create-base/create-base.component';
import { ModulesModule } from "../modules/modules.module";


@NgModule({
    declarations: [
        BaselineComponent,
        CreateBaseComponent
    ],
    imports: [
        CommonModule,
        TestRoutingModule,
        QuickUiModule,
        ModulesModule
    ]
})
export class TestModule { }

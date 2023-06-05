
import { BaselistComponent } from './baselist/baselist.component';
import { BaselineComponent } from './baseline/baseline.component';
import { CreateBaseComponent } from './create-base/create-base.component';
import { BaselineCreationHybridecommonComponent } from './baseline-creation-hybridecommon/baseline-creation-hybridecommon.component';
import { BaselineCreationHybridcommonComponent } from './baseline-creation-hybridcommon/baseline-creation-hybridcommon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'baseline-creation-hybridcommon', component: BaselineCreationHybridcommonComponent },

  { path: 'baseline-creation-hybridecommon', component: BaselineCreationHybridecommonComponent },

  { path: 'create-base', component: CreateBaseComponent },


  { path: 'baseline', component: BaselineComponent },

  { path: 'baselist', component: BaselistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

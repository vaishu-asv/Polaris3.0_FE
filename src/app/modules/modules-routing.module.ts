import { DropdownComponent } from './dropdown/dropdown.component';
import { FrameComponent } from './frame/frame.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'frame', component: FrameComponent },

  { path: 'dropdown', component: DropdownComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }

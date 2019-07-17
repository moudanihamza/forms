import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'templateDriven', pathMatch: 'full'},
  {path: 'templateDriven', component: TemplateDrivenComponent},
  {path: 'reactiveApproach', component: ReactiveApproachComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

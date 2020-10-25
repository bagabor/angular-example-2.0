import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';


const routes: Routes = [
  { path: 'template', component: TemplateDrivenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

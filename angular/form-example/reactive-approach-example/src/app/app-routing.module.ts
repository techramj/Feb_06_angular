import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { From1Component } from './from1/from1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';

const routes: Routes = [
  {path:'form1', component:From1Component},
  {path:'form2', component:Form2Component},
  {path:'form3', component:Form3Component},
  {path:'form4', component: Form4Component},
  {path:'form5', component: Form5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

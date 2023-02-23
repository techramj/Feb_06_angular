import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { ServerComponent } from './server/server.component';
import { ServesComponent } from './serves/serves.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParamExampleComponent } from './param-example/param-example.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
 {path:'button-banner', component: ButtonBannerComponent},
 {path:'server', component:ServerComponent},
 {path: 'servers', component:ServesComponent},
 {path:'param-example/:param1', component:ParamExampleComponent},
 {path:'home', component:HomeComponent},
 {path:'login',component:LoginComponent},
 {path:'add-emp',component:EmployeeCreateComponent},
 {path:'emp-list', component:EmployeeListComponent},
 {path:'emp-edit/:id',component:EmployeeEditComponent},
 {path:'', redirectTo:'/home', pathMatch:'full'},
 {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

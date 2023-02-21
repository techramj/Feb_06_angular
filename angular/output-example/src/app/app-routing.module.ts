import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { ServerComponent } from './server/server.component';
import { ServesComponent } from './serves/serves.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParamExampleComponent } from './param-example/param-example.component';

const routes: Routes = [
 {path:'button-banner', component: ButtonBannerComponent},
 {path:'server', component:ServerComponent},
 {path: 'servers', component:ServesComponent},
 {path:'param-example/:param1', component:ParamExampleComponent},
 {path:'', redirectTo:'/servers', pathMatch:'full'},
 {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { BannerComponent } from './banner/banner.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { ServerComponent } from './server/server.component';
import { ServesComponent } from './serves/serves.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgContetExampleComponent } from './ng-contet-example/ng-contet-example.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParamExampleComponent } from './param-example/param-example.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BannerComponent,
    ButtonBannerComponent,
    ServerComponent,
    ServesComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NgContetExampleComponent,
    LifecycleComponent,
    PageNotFoundComponent,
    ParamExampleComponent,
    LoginComponent,
    HomeComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    ParamExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

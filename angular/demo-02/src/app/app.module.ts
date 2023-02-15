import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { PersonComponent } from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { FormsModule } from '@angular/forms';
import { SelectorAComponent } from './selector-a/selector-a.component';
import { SelectorBComponent } from './selector-b/selector-b.component';
import { SelectorCComponent } from './selector-c/selector-c.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PersonComponent,
    PeopleListComponent,
    SelectorAComponent,
    SelectorBComponent,
    SelectorCComponent,
    ServerComponent,
    ServersComponent
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

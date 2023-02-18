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
import { ButtonCounterComponent } from './button-counter/button-counter.component';
import { CongratLabelComponent } from './congrat-label/congrat-label.component';
import { ButtonMessageComponent } from './button-message/button-message.component';
import { OutputComponent } from './output/output.component';

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
    ServersComponent,
    ButtonCounterComponent,
    CongratLabelComponent,
    ButtonMessageComponent,
    OutputComponent
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

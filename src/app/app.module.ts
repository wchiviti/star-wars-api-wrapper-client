import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClarityModule} from '@clr/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PeopleComponent} from './components/people/people.component';
import {HttpClientModule} from "@angular/common/http";
import {APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
import { GraphQLModule } from './graphql.module';
import { ViewPersonComponent } from './components/view-person/view-person.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ViewPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    ApolloModule,
    GraphQLModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

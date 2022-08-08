import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from "./components/people/people.component";
import {ViewPersonComponent} from "./components/view-person/view-person.component";

const routes: Routes = [
  {
    path: "",
    component: PeopleComponent
  },
  {
    path: "home",
    component: PeopleComponent
  },
  {
    path: "person",
    component: ViewPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

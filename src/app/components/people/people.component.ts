import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../services/people/people.service";
import {Person} from "../../models/people.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Observable<Person[]>

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../../models/people.interface";
import {Observable} from "rxjs";
import {PeopleService} from "../../services/people/people.service";

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {

  url: string
  person: Observable<Person>

  constructor(private _activatedRoute: ActivatedRoute,
              private peopleService: PeopleService) {
  }

  ngOnInit(): void {

    this._activatedRoute.queryParamMap.subscribe(params => {
      console.log(params);
      this.url = params.get('url');
    });
    this.person = this.peopleService.getPerson(this.url);
    this.person.subscribe(person => {
      console.log(person)
    })
  }

}

import {Injectable} from '@angular/core';
import {Apollo, Query} from "apollo-angular";
import {Person} from "../../models/people.interface";
import {map, Observable} from "rxjs";
import {gql} from "@apollo/client/core";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private apollo: Apollo) {
  }

  public getPeople(): Observable<Person[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
      query getPeople {
          getPeople {
            url
            name
            height
            mass
            gender
            homeworld {
              name
            }
          }
        }
      `
    })
      .valueChanges
      .pipe(map(result => result.data["getPeople"])
      );
  }

  public getPerson(url: String): Observable<Person> {
    return this.apollo.watchQuery<Query>({
      query: gql`
      query getPerson($url: String) {
          getPerson(url: $url) {
            url
            name
            height
            mass
            gender
            homeworld {
              name
            }
          }
        }
      `,
      variables: {
        url: url,
      },
    })
      .valueChanges
      .pipe(map(result => result.data["getPerson"])
      );
  }

}

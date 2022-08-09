import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {setContext} from "@apollo/client/link/context";
import {HttpHeaders} from "@angular/common/http";

const uri = 'https://star-wars-api-sovtech.herokuapp.com/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const auth = setContext((operation, context) => {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", "Basic " + btoa("admin:%$Pass123"));
    return headers;
  });
  return {
    link: ApolloLink.from([auth, httpLink.create({uri})]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}

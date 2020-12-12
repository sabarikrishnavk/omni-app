import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request'
 
@Injectable()
export class AppService { 

  async getData(): Promise<any>{
    
    const graphQLClient = new GraphQLClient(endpoint, {
      credentials: 'include',
      mode: 'cors',
    })
    // graphQLClient.setHeader('authorization', 'Bearer MY_TOKEN');
    graphQLClient.setHeader('x-hasura-admin-secret', 'SECRET_KEY');
    
    const data = await graphQLClient.request(operation);

    return data;
  } 
 
} 
const endpoint= 'http://localhost:8080/v1/graphql';
const operation = `
  query MyQuery {
    sites(where: {sitesid: {_eq: "3473b20b-728c-4e9f-8a0e-f1955d69f5a5"}}) {
      description
      details
      domains
      enddate
      name
      spec
      startdate
    }
  }
`;

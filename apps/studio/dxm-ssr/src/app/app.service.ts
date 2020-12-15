import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request'
 
@Injectable()
export class AppService { 

  async getSite(): Promise<any>{
    
    const graphQLClient = new GraphQLClient(endpoint, {
      credentials: 'include',
      mode: 'cors',
    })
    // graphQLClient.setHeader('authorization', 'Bearer MY_TOKEN');
    graphQLClient.setHeader('x-hasura-admin-secret', 'SECRET_KEY');
    
    const data = await graphQLClient.request(SITE_QUERY);

    return data;
  } 
  async getPage(siteId: string, pageUrl: string): Promise<any>{
    console.log('Site Id: '+ siteId); 
    console.log('pageUrl Id: '+ pageUrl); 
    
    const graphQLClient = new GraphQLClient(endpoint, {
      credentials: 'include',
      mode: 'cors',
    })
    // graphQLClient.setHeader('authorization', 'Bearer MY_TOKEN');
    graphQLClient.setHeader('x-hasura-admin-secret', 'SECRET_KEY');
    
    const data = await graphQLClient.request(PAGE_QUERY1+siteId + PAGE_QUERY2+ pageUrl+ PAGE_QUERY3 );
    return data;
  } 
 
} 
const endpoint= 'http://localhost:8080/v1/graphql';
const SITE_QUERY = `
query SitesQuery {
  sites(where: {sitename: {_eq: "Galaxy"}}) {
    description
    details
    domains
    sitename
    status
    sitesid
    startdate
    enddate
  }
}
`;
const PAGE_QUERY1 = `
query SitePageQuery {
  sitepages(where: {sitesid: {_eq: "`;  
const PAGE_QUERY2 = `"}, pageurl: {_eq: "`; 
const PAGE_QUERY3 = `"}}) {
    components
    enddate
    metadata
    pagename
    pagetemplatesid
    pageurl
    sitepagesid
    sitesid
    startdate
    contents { 
      details {
        pagecontentname
        contentname
        contents
      }
    }
    status
    version
    widgets
  }
} 
`;

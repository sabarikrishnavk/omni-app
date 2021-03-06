Prerequisite

Elastic instance:
----

docker-compose -f docker-product-es.yml up

create index based on es-mapping and load  data into index
----

cd setup
<br>
npm run setup:product
<br>
npm run setup:inventory
<br>
http://localhost:9200/product/_search 
<br>
http://localhost:9200/inventory/_search

Start API
—-
<br>
nx serve services-product
<br>
nx serve services-inventory
<br>
nx serve services-cart
<br>
To start an auth server with JWT : nx serve services-auth
<br>
nx serve gateway-ecom
<br>
nx serve studio-dxm-ssr
<br>
nx serve studio-dam


<br>
docker image build -t omni-app/services-product -f docker/services-product.Dockerfile .
<br>
docker run --name services-product -p 8080:4001 -d omni-app/services-product

To run Hasura instance locally:
<br> 
cd setup
<br>
docker-compose -f docker-hasura.yaml up
<br>
DBweaver > 127.0.0.1: 5432 //postgres:postgrespassword /postgres
<br>
Execute >> hasura.sql


# OmniApps

npx create-nx-workspace@latest omni-apps


Select >> empty option >> nx

npm install --save-dev @nrwl/nest @nrwl/react @nrwl/workspace @nestjs/common typescript openapi-typescript-codegen 


## install graphql
   
npm install @nestjs/graphql apollo-server apollo-server-express graphql-tools graphql apollo-boost @apollo/react-hooks graphql @apollo/federation @apollo/gateway


## graphql postgresql elastic search

npm install --save @nestjs/typeorm typeorm pg elasticsearch

## Rools engine

npm install rools

## Library for common dto


nx g @nrwl/nest:library dto

## Services for API/DB /Elastic interfaces

nx g @nrwl/nest:application product --directory=services
4001
nx g @nrwl/nest:application inventory --directory=services 
4002

nx g @nrwl/nest:application cart --directory=services 
5001

nx g @nrwl/nest:application promotion --directory=services
5002

nx g @nrwl/nest:application user --directory=services 

nx g @nrwl/nest:application auth --directory=services
6001

## Gateway apps
Ecommerce APIs
---
nx generate @nrwl/nest:application ecom --directory=gateway  
9001

Customer experience Manager (legacy cms)
---
nx generate @nrwl/nest:application cxm --directory=gateway


## Middleware apps (Events sourcing and CQRS layer)
nx generate @nrwl/nest:application cart --directory=middleware  

## UI/UX Widgets for front end applications 
nx g @nrwl/react:library product --directory=widgets
nx g @nrwl/react:library cart --directory=widgets

## Adding Studio applications for experience management

nx generate @nrwl/nest:application dxm-ssr --directory=studio  
nx generate @nrwl/nest:application dxm --directory=studio  


openssl genrsa -out certs/server.key 2048
openssl req -new -x509 -key certs/server.key -out certs/server.cert -days 365

# OmniApp

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@omni-app/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

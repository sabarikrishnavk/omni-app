/* This is an example snippet - you should consider tailoring it
to your service.
*/
/*
  Add these to your `package.json`:
    "apollo-boost": "^0.3.1",
    "graphql": "^14.2.1",
    "graphql-tag": "^2.10.0",
    "react-apollo": "^2.5.5"
*/

import gql from "graphql-tag";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Mutation, ApolloProvider } from "react-apollo";

// This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "undefined",
  }),
});

const MY_MUTATION_MUTATION = gql`
  mutation MyMutation {
    insert_carts_one(object: {details: "", usersid: "2f512af8-3882-46b8-bd65-283e1c6cc2b8", status: "Pending", lastupdateby: "2f512af8-3882-46b8-bd65-283e1c6cc2b8"}) {
      cartsid
    }
  }
`;

const MyMutationMutation = (props) => {
  return (
    <Mutation
      mutation={MY_MUTATION_MUTATION}>
      {(MyMutation, { loading, error, data }) => {
        if (loading) return <pre>Loading</pre>
    
        if (error)
          return (
            <pre>
              Error in MY_MUTATION_MUTATION
              {JSON.stringify(error, null, 2)}
            </pre>
          );
    
        const dataEl = data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null;
    
        return (
          <div>
            {dataEl}
    
            <button onClick={() => MyMutation()}>
              Run mutation: MyMutation
            </button>
          </div>
        );
      }}
    </Mutation>
  )
};

const container = (
  <ApolloProvider client={apolloClient}>
    <MyMutationMutation  />
  </ApolloProvider>
);

ReactDOM.render(container, document.getElementById("root"));
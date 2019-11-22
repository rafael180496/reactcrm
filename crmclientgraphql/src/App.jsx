import React, { Component } from "react";
//importando apolo
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { HOSTAPP } from "./utility/constante";
import Main from "./page/main";

const client = new ApolloClient({
  uri: HOSTAPP,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors:", graphQLErrors);
    console.log("networkError:", networkError);
  }
});

class App extends Component {
  state = {};
  render() {
    return (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    );
  }
}
export default App;

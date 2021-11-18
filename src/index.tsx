import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createAuthLink, AuthOptions } from "aws-appsync-auth-link";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

const auth: AuthOptions = {
  apiKey: "da2-rgx3ut2yh5a5nnmstkmvld4bgy",
  type: "API_KEY",
}
const region = "ap-southeast-2"
const url =
  'https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql'

const authLink = createAuthLink({ auth, url, region });
const httpLink = new HttpLink({ uri: url });

const link = ApolloLink.from([authLink, httpLink]);

// NOTE: Offline support is not available for this @apollo/client versions.
// https://github.com/awslabs/aws-mobile-appsync-sdk-js#using-authorization-and-subscription-links-with-apollo-client-no-offline-support
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

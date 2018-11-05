import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import loggerLink from 'apollo-link-logger';

const httpLink = new HttpLink({
	uri: 'http://127.0.0.1:3000',
});
const link = loggerLink.concat(httpLink);

const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link,
});

export default apolloClient;

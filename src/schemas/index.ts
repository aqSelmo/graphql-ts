import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type User {
    id: ID
    name: String
    email: String
    password: String
  }
  type Query {
    user(id: ID!): User
    users: [User]
  }
  type Mutation {
      createUser(name: String!, email: String!, password: String!): User
  }
`);

export default schema;

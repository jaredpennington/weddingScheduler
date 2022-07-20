//import the gql tagged template function
const { gql } = require("apollo-server-express");

// create out typeDefs for explicit schema types
const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    email: String
    events: [Event]
  }

  type Event {
    _id: ID
    user_id: ID
    event_name: String
    date_windows: [[String]]
    guests: [Guest]
    passwords: [Password]
  }

  type Guest {
    _id: ID
    first_name: String
    last_name: String
    date_windows: [[String]]
    completedAt: String
    budget: Int
    invited_to: String
  }

  type Password {
    _id: ID
    event_id: ID
    name: String
    password: String
  }

  # must return token
  # optionally includes user data
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    guests: [Guest]
    guest(_id: ID!): Guest
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(
        first_name: String!, last_name: String!, email: String!, password: String!
    ): Auth

    addEvent(
        event_name: String!,
        date_windows: [[String]]!
    ): Event
  }
`;

//export the typeDefs
module.exports = typeDefs;

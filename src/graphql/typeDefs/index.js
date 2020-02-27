const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DateTime
  scalar EmailAddress

  ### Enums ###
  enum SpotType {
    S
    A
    B
  }

  enum ParkingLot {
    Pangea
    Gilman
    Hopkins
    Revelle
    Osler
    Sixth
  }

  ### Types ###
  # Auth #
  type User {
    email: EmailAddress!
    password: String!
    firstName: String!
    lastName: String!
    validSpotTypes: [SpotType!]!
  }

  type AuthPayload {
    user: User
    token: String
  }

  # Ride #
  type PendingRideRequest {
    parkingLot: ParkingLot!
    spotType: SpotType!
    pickUpTime: DateTime!
  }

  ### Query ###
  type Query {
    getAllParkingLots: [ParkingLot!]!
  }

  ### Mutation ###
  type Mutation {
    login(email: EmailAddress!, password: String!): AuthPayload
    signup(
      firstName: String!
      lastName: String!
      email: EmailAddress!
      password: String!
      validSpotTypes: [SpotType!]!
    ): AuthPayload
  }
`;

module.exports = { typeDefs };

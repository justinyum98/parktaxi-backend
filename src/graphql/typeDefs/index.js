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

  enum ParkingLotName {
    Pangea
    Gilman
    Hopkins
    Revelle
    Osler
    Sixth
  }

  ### Inputs ###
  input LocationInput {
    lat: Float!
    lng: Float!
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

  # Lots #
  type ParkingLot {
    name: ParkingLotName!
    lat: Float!
    lng: Float!
  }

  type Location {
    lat: Float!
    lng: Float!
  }

  # Ride #
  type PendingRideRequest {
    requester: User!
    dateTime: DateTime!
    location: Location!
    parkingLot: ParkingLot!
    spotType: SpotType!
  }

  ### Query ###
  type Query {
    parkingLots: [ParkingLot!]!
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
    requestRide(
      dateTime: DateTime!
      location: LocationInput!
      parkingLotName: ParkingLotName!
      spotType: SpotType!
    ): PendingRideRequest
  }
`;

module.exports = { typeDefs };

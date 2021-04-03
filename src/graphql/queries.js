/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHunt = /* GraphQL */ `
  query GetHunt($id: ID!) {
    getHunt(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listHunts = /* GraphQL */ `
  query ListHunts(
    $filter: ModelHuntFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHunts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

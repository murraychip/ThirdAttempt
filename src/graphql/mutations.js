/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHunt = /* GraphQL */ `
  mutation CreateHunt(
    $input: CreateHuntInput!
    $condition: ModelHuntConditionInput
  ) {
    createHunt(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateHunt = /* GraphQL */ `
  mutation UpdateHunt(
    $input: UpdateHuntInput!
    $condition: ModelHuntConditionInput
  ) {
    updateHunt(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteHunt = /* GraphQL */ `
  mutation DeleteHunt(
    $input: DeleteHuntInput!
    $condition: ModelHuntConditionInput
  ) {
    deleteHunt(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;

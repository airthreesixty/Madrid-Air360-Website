import gql from 'graphql-tag'

export const allReviewsQuery = gql`
query allReviewsQuery {
  reviews {
    data {
      attributes {
        title
        rating
        body
      }
    }
  }
}`

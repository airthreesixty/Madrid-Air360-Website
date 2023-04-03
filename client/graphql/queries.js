import gql from 'graphql-tag'
// import { gql } from '@nuxtjs/apollo'

// export const headersQuery = gql`
// query {
//   headers {
//     data {
//       attributes {
//         title
//         url
//         externalURL
//       }
//     }
//   }
// }`

export const headerQuery = gql`
query {
  global {
    data {
      attributes {
        Navigation {
          links {
            href
            isExternal
            label
            target
          }
        }
      }
    }
  }
}
`

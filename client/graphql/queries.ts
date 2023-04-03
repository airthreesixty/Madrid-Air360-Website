import gql from 'graphql-tag'

export const headerQuery = gql`
  query {
global {
    data {
      attributes {
        navigation {
links {
            label
            target
            href
            isExternal
          }
          button {
            label
            target
            href
            isExternal
          }
        }
      }
    }
  }
}
`

export const heroQuery = gql`

query {
page(id: 2) {
    data {
      attributes {
        blocks {
          ... on ComponentBlocksHero {
            title
            titleDescription
            subTitle
            heroImage {
              data {
                attributes {
                  url
                }
              }
            }
            buttons {
              href
              isExternal
              label
            }
          }
        }
      }
    }
  }
}
`

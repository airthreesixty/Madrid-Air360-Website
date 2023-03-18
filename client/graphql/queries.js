import gql from 'graphql-tag'

export const allHeadersQuery = gql`
query allHeadersQuery {
  headers {
    data {
      attributes {
        title
        url
        externalURL
      }
    }
  }
}`

export const allHerosQuery = gql`
query allHerosQuery {
  heroes {
    data {
      attributes {
        title
        subTitle
        titleDescription
        button1
        button2
      }
    }
  }
}
`

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

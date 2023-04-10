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
            bottomText
          }
        }
      }
    }
  }
}
`

export const cardsQuery = gql`
  query {
page (id: 2) {
    data {
      attributes {
        blocks {
          ... on ComponentBlocksPanel{
            title
            cards {
              description
            }
          }
        }
      }
    }
  }
}
`

export const air360DescriptionQuery = gql`
query {
page (id: 2) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksAir360Description {
            title
            subTitle
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export const testimonialQuery = gql`
query {
  page(id:2) {
    data {
      attributes {
        blocks {
          ... on ComponentBlocksTestimonial {
            quote
            name
            role
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export const ctaQuery = gql`
query {
  page(id:2) {
    data {
      attributes {
        blocks {
          ... on ComponentBlocksCta {
            text
            button {
              label
              target
              isExternal
              href
            }
          }
        }
      }
    }
  }
}
`

export const companyLogosQuery = gql`
query {
page (id: 2) {
data {
      attributes {
        blocks {
... on ComponentBlocksCompanyLogos {
            title 
            logos {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`

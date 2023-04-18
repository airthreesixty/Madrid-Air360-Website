import gql from 'graphql-tag'

export const globalQuery = gql`
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
        footer {
logo {
            data {
              attributes {
                url
              }
            }
          }
          socialMedias {
            url
            target
          }
          columns {
            title
            links {
              label
              isExternal
              target
              href
            }
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

export const videoSectionQuery = gql`
query {
  page(id:3) {
    data {
      attributes {
        blocks {
          ... on ComponentBlocksVideoSection {
            title
            subTitle
            description
            bgImage {
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

export const statisticsQuery = gql`
query {
  page(id:3) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksStatistics {
            quote 
            source
          }
        }
      }
    }
  }
}
`

export const roiQuery = gql`
  query {
  page(id:3) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksRoi {
            title
            description
            button {
              href
              label
              isExternal
              target
            }
            message
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

export const featuresQuery = gql`
query {
  page(id:3) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksFeatures {
            features {
              title
              description
            }
          }
        }
      }
    }
  }
}
`

export const specialQuery = gql`
query {
  page(id:3) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksSpecial {
            title
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

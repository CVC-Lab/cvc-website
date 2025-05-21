import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Create a context for site metadata
export const SiteContext = React.createContext({})

/**
 * SiteProvider component that wraps your app and makes site data available to any
 * component in your application via the useContext hook.
 */
export const SiteProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
            scroll_link
          }
          softwareProjects {
            category
            items {
              name
              description
            }
          }
          projectTiles {
            name
            description
            img_name
            link
            tags
            date
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 125
                  height: 125
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          peopleCards {
            name
            image
            position
            status
            imageFile {
              childImageSharp {
                gatsbyImageData(
                  width: 125
                  height: 125
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          newsTiles {
            name
            description
            category
            link
            date
          }
        }
      }
    }
  `)

  return (
    <SiteContext.Provider value={data.site.siteMetadata}>
      {children}
    </SiteContext.Provider>
  )
}

/**
 * Custom hook to access the site context
 */
export const useSiteMetadata = () => {
  const context = React.useContext(SiteContext)
  
  if (context === undefined) {
    throw new Error("useSiteMetadata must be used within a SiteProvider")
  }
  
  return context
}
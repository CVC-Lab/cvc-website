import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import NewsTiles from "../components/newsTiles"
import Cards from "../components/cards"
import About from "../components/about"

const NewsPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      site {
        siteMetadata {
          newsTiles {
            name
            description
            img_name
            link
          }    
        }
      }
    }
  `)

  return (
    <Layout>
      <NewsTiles id='projects' projectTiles={data.site.siteMetadata.newsTiles}></NewsTiles>
    </Layout>
  )
}

export default NewsPage

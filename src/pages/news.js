import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import NewsTiles from "../components/news_tiles"

const NewsPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      site {
        siteMetadata {
          newsTiles {
            name
            description
            category
            link
          }    
        }
      }
    }
  `)

  return (
    <Layout>
      <NewsTiles id='news' newsTiles={data.site.siteMetadata.newsTiles}></NewsTiles>
    </Layout>
  )
}

export default NewsPage

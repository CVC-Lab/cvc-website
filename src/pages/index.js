import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tiles from "../components/tiles"

const IndexPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      site {
        siteMetadata {
          projectTiles {
            name
            link
          }
        }
      }
    }
  `)

  return (<Layout>
    <Tiles projectTiles={data.site.siteMetadata.projectTiles}></Tiles>
  </Layout>
  )
}

export default IndexPage

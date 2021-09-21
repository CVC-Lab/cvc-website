import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Tiles from "../components/tiles"
import Cards from "../components/cards"

const IndexPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      site {
        siteMetadata {
          projectTiles {
            name
            link
          }
          peopleCards {
            name
            image
          }     
        }
      }
    }
  `)

  return (
    <Layout>
      <Tiles projectTiles={data.site.siteMetadata.projectTiles}></Tiles>
      <Cards peopleCards={data.site.siteMetadata.peopleCards}></Cards>
    </Layout>
  )
}

export default IndexPage

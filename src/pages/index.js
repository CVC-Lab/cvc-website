import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Tiles from "../components/tiles"
import Cards from "../components/cards"
import About from "../components/about"

const IndexPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      site {
        siteMetadata {
          projectTiles {
            name
            description
            img_name
            link
          }
          peopleCards {
            name
            image
            position
          }     
        }
      }
    }
  `)

  return (
    <Layout>
      <Tiles id='projects' projectTiles={data.site.siteMetadata.projectTiles}></Tiles>
      <Cards id='people' peopleCards={data.site.siteMetadata.peopleCards}></Cards>
      <About id='about'></About>
    </Layout>
  )
}

export default IndexPage

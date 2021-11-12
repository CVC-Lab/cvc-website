import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Tiles from "../components/tiles"
import Cards from "../components/cards"
import About from "../components/about"
import { Helmet } from "react-helmet"
import favicon from '../favicons/favicon.png'

const IndexPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      site {
        siteMetadata {
          dedreconProjectTiles {
            name
            description
            img_name
            link
          }
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
      <Helmet>
        <meta name="icon" href={favicon} />
      </Helmet>
      <Tiles id='projects' projectTiles={data.site.siteMetadata.projectTiles} dedreconProjectTiles={data.site.siteMetadata.dedreconProjectTiles}></Tiles>
      <Cards id='people' peopleCards={data.site.siteMetadata.peopleCards}></Cards>
      <About id='about'></About>
    </Layout>
  )
}

export default IndexPage

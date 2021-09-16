import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Tiles from "./tiles"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          projectTiles {
            name
            link
          }
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
      <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`}}>
        <main>{children}
        </main>
        <footer style={{marginTop: `2rem`}}>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

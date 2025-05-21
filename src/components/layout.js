import * as React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../context/SiteContext"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const { title, description, menuLinks } = useSiteMetadata()

  return (
    <>
      <Header
        menuLinks={menuLinks}
        siteTitle={title}
        siteDescription={description}
      />
      <div>
        <main style={{ minHeight: "90vh" }}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

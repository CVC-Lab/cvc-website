import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navigation from "./navigation"

const Header = ({ siteTitle, siteDescription, menuLinks }) => (
  <header style={{marginBottom: `1.45rem`}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`}}>
      <Navigation menuLinks={menuLinks}></Navigation>
      <h1 style={{margin: 0}}>
        <Link to="/" style={{color: `white`, textDecoration: `none`}}>
          <div style={{paddingBottom: '1.25rem', fontSize: '2.5rem'}}>{siteTitle}</div>
        </Link>
      </h1>
      <h3>
        <div style={{color: `white`, fontSize: '1.35rem'}}>{siteDescription}</div>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header

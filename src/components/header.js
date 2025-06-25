import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "./navigation"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ 
  siteTitle = "", 
  siteDescription = "", 
  menuLinks = [] 
}) => (
  <header
    style={{
      paddingLeft: `var(--space-lg)`,
      paddingRight: `var(--space-lg)`,
      background: `var(--color-primary)`,
      boxShadow: `var(--shadow-md)`,
    }}
  >
    <div style={{ margin: `0 auto`, maxWidth: `var(--max-width-content)`, paddingBottom: `var(--space-xl)` }}>
      <div
        className="headerFlexContainer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ flexShrink: 0 }}>
          <StaticImage
            className="headerlogo"
            src="../images/knockout_university_formal_horizontal.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="UT Austin Logo"
            placeholder="none"
            loading="eager"
          />
        </Link>
        <Navigation menuLinks={menuLinks} />
      </div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `0rem`,
            margin: `0rem`,
          }}
        >
          <div
            style={{
              paddingBottom: `var(--space-md)`,
              fontSize: `var(--font-size-4xl)`,
              fontWeight: `var(--font-weight-bold)`,
              letterSpacing: `-0.02em`,
              margin: `0`,
            }}
          >
            {siteTitle}
          </div>
        </Link>
      </h1>
      <h2
        style={{
          margin: 0,
          color: `var(--color-white)`,
          fontSize: `var(--font-size-xl)`,
          fontWeight: `var(--font-weight-normal)`,
          opacity: 0.9,
        }}
      >
        {siteDescription}
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  menuLinks: PropTypes.array,
}

export default Header

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "./navigation"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, siteDescription, menuLinks }) => (
  <header
    style={{
      paddingLeft: `1.25rem`,
      paddingRight: `1.25rem`,
      background: `#bf5700`,
    }}
  >
    <div style={{ margin: `0 auto`, maxWidth: 1150, paddingBottom: `2.7rem` }}>
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
              paddingBottom: "1.25rem",
              fontSize: "2.5rem",
              margin: `0rem`,
              transform: `translate(-2px, 0)`,
            }}
          >
            {siteTitle}
          </div>
        </Link>
      </h1>
      <h3>
        <div
          style={{ color: `white`, fontSize: "1.35rem", fontStretch: `2rem` }}
        >
          {siteDescription}
        </div>
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

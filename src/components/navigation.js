import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navigation = ({ menuLinks }) => (
  <div style={{display: 'flex', justifyContent:'flex-end'}}>
    <nav>
      <ul style={{display: "flex", flex: 1}}>
        {menuLinks.map(link => (
          <li key={link.name} style={{listStyleType: `none`, padding: `1rem`, paddingTop: `.35rem`, paddingBottom: `0rem`}}>
            <Link style={{color: `#333f48`, textDecoration: `none`, fontSize: `.73rem`}} to={link.link}>
              {link.name}
            </Link>
          </li>))}
      </ul>
    </nav>
  </div>
)

export default Navigation

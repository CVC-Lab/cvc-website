import * as React from "react"
import { Link } from "react-scroll"
import { Link as LinkRouter } from "gatsby";
const Navigation = ({ menuLinks }) => (
  <div style={{display: 'flex', justifyContent:'flex-end'}}>
    <nav>
      <ul style={{display: "flex", flex: 1}}>
        {menuLinks.map(link => (
          <li key={link.name} style={{listStyleType: `none`, padding: `1rem`, paddingTop: `.35rem`, paddingBottom: `0rem`}}>
              {link.scroll_link == true && window.location.pathname === `/` ?
                <LinkRouter to={link.link} style={{color: `#333f48`, textDecoration: `none`, fontSize: `.73rem`, fontWeight: `700`}}>
                <Link
                  style={{color: `#333f48`, textDecoration: `none`, fontSize: `.73rem`, fontWeight: `700`}}
                  activeClass="active"
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                {link.name}
                </Link></LinkRouter>
                :<LinkRouter to={link.scroll_link == true ? '/': link.link} style={{color: `#333f48`, textDecoration: `none`, fontSize: `.73rem`, fontWeight: `700`}}>
                  {link.name}
                </LinkRouter>}
          </li>))}
      </ul>
    </nav>
  </div>
)

export default Navigation

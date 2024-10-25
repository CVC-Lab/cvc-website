import * as React from "react"
import { Link as LinkRouter } from "gatsby"
import { useLocation } from "@reach/router"

const UserTheme = () => {
  const location = useLocation()
  return location.pathname
}

const DropdownMenu = ({ links }) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#fff",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {links.map(link => (
        <LinkRouter
          key={link.name}
          to={link.scroll_link === true ? `/#${link.link}` : link.link}
          style={{
            display: "block",
            padding: "12px 16px",
            color: "#333f48",
            textDecoration: "none",
            fontSize: ".73rem",
            fontWeight: "700",
          }}
        >
          {link.name}
        </LinkRouter>
      ))}
    </div>
  )
}

const Navigation = ({ menuLinks }) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false)
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible)

  const dropdownLinkNames = ["PEOPLE", "ABOUT US"]
  const dropdownLinks = menuLinks.filter(link =>
    dropdownLinkNames.includes(link.name.toUpperCase())
  )
  const otherLinks = menuLinks.filter(
    link => !dropdownLinkNames.includes(link.name.toUpperCase())
  )

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1.68rem",
            paddingBottom: 0,
          }}
        >
          <li
            style={{
              listStyleType: `none`,
              paddingLeft: "1rem",
              paddingRight: "1rem",
              position: "relative",
            }}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div
              style={{
                color: `#FFFFFF`,
                textDecoration: `none`,
                fontSize: `.73rem`,
                fontWeight: `700`,
              }}
            >
              <LinkRouter
                to={"/"}
                style={{
                  color: `#FFFFFF`,
                  textDecoration: `none`,
                  fontSize: `.73rem`,
                  fontWeight: `700`,
                }}
              >
                HOME
              </LinkRouter>
            </div>
            {dropdownVisible && <DropdownMenu links={dropdownLinks} />}
          </li>
          {otherLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              <LinkRouter
                to={link.link}
                style={{
                  color: `#FFFFFF`,
                  textDecoration: `none`,
                  fontSize: `.73rem`,
                  fontWeight: `700`,
                }}
              >
                {link.name}
              </LinkRouter>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation

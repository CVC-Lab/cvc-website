import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid } from '@material-ui/core';
import Navigation from "./navigation"
import { StaticImage } from "gatsby-plugin-image"
import { GridList, GridListTile } from '@material-ui/core';

const Tiles = ({ projectTiles }) => (
  <div>
    <h1 style={{color: `#333f48`, fontSize: `1.65rem`, margin: `0 auto`, display: "block", paddingBottom: `1.0rem`, fontStyle: `bold`}}>
      Projects
    </h1>
    <GridList cellHeight={275} cols={3}>
      {projectTiles.map(tile => (
        <GridListTile key={tile.name} cols={tile.cols || 1}>
          <Link style={{color: `#333f48`, textDecoration: `none`, fontSize: `.73rem`}} to={tile.link}>
            <img
              src={require(`../images/${tile.name}.png`).default}
              alt="UT Austin Logo"
              width={200}
            />
            <h3 style={{color: `#333f48`}}>
              {tile.name}
            </h3>
          </Link>
        </GridListTile>
      ))}
    </GridList>
  </div>
)

export default Tiles

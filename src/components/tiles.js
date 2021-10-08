import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid } from '@material-ui/core';
import Navigation from "./navigation"
import { StaticImage } from "gatsby-plugin-image"
import { GridList, GridListTile } from '@material-ui/core';
import './tiles.css'

const Tiles = ({ projectTiles }) => (
  <div className="tiles-class" id="projects" style={{background: 'white', display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: `left`}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`, marginLeft: `1.25rem`, marginRight: `1.25rem`, width: `100%`}}>
      <h4 className="header-subtitle" style={{color: `#787575`, fontSize: `1.0rem`, fontWeight: `600`, margin: `auto`, paddingBottom: `1.0rem`,
        paddingTop: `2.0rem`, marginBottom: '1rem'}}>
        Projects
      </h4>
      <GridList cols={3}>
        {projectTiles.map(tile => (
          <GridListTile key={tile.name} style={{
            position: 'relative',
            float: 'left',
            minHeight: '300px',
            width: '300px',
            overflow: 'hidden',
            height: '100% !important'
          }}>
            <div className='Tile'>
              <div className='upper-container'>
                <div className='image-container'>
                  <Link style={{color: `#333f48`, textDecoration: `none`, fontSize: `.73rem`}} to={tile.link}>
                    <img
                      src={require(`../images/${tile.img_name}.png`).default}
                      alt="profile picture"
                    />
                  </Link>
                </div>
              </div>
              <div className='lower-container'>
                <h3> {tile.name} </h3>
                <h4> {tile.description}  </h4>
              </div>
            </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  </div>
)

export default Tiles

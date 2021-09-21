import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid } from '@material-ui/core';
import Navigation from "./navigation"
import { StaticImage } from "gatsby-plugin-image"
import { GridList, GridListTile } from '@material-ui/core';

const Cards = ({ peopleCards }) => (
  <div>
    <h1 style={{color: `#333f48`, fontSize: `1.65rem`, margin: `0 auto`, display: "block", paddingBottom: `1.0rem`, fontStyle: `bold`}}>
      People
    </h1>
    <GridList cellHeight={125} cols={8}>
      {peopleCards.map(people => (
        <GridListTile key={people.name}>
          <img
            src={require(`../images/people/${people.image}`).default}
            alt="profile picture"
            width={100}
          />
        </GridListTile>
      ))}
    </GridList>
  </div>
)

export default Cards

import * as React from "react"
import { GridList, GridListTile } from '@material-ui/core';
import './cards.css'

const Cards = ({ peopleCards }) => (
  <div>
    <h1 style={{color: `#333f48`, fontSize: `1.65rem`, margin: `0 auto`, display: "block", paddingBottom: `1.0rem`, fontStyle: `bold`}}>
      People
    </h1>
    <GridList cols={7}>
      {peopleCards.map(people => (
        <GridListTile key={people.name}>
          <div className='Card'>
            <div className='upper-container'>
              <div className='image-container'>
                <img
                  src={require(`../images/people/${people.image}`).default}
                  alt="profile picture"
                />
              </div>
            </div>
            <div className='lower-container'>
              <h3> {people.name} </h3>
              <h4> {people.position}  </h4>
            </div>
          </div>
        </GridListTile>
      ))}
    </GridList>
  </div>
)

export default Cards

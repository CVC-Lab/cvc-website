import * as React from "react"
import { GridList, GridListTile } from '@material-ui/core';
import './cards.css'

const Cards = ({ peopleCards }) => (
  <div id="people" style={{background: '#DBDBDB', display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: `center`}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`}}>
      <h4 style={{color: `#333f48`, fontSize: `1.65rem`, margin: `auto`, paddingBottom: `1.0rem`,
        paddingTop: `2.0rem`, fontStyle: `bold`, borderBottom: `.5px solid #333f48`, marginBottom: '2rem'}}>
        People
      </h4>
      <GridList cols={6}>
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
  </div>
)

export default Cards

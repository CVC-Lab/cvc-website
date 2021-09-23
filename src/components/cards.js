import * as React from "react"
import { GridList, GridListTile } from '@material-ui/core';
import './cards.css'

const Cards = ({ peopleCards }) => (
  <div className="people-class" id="people" style={{background: '#DBDBDB', display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: `center`}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`, marginLeft: `1.25rem`, marginRight: `1.25rem`, width: `100%`}}>
      <h4 className="header-subtitle" style={{color: `#333f48`, fontSize: `1.0rem`, fontWeight: `600`, margin: `auto`, paddingBottom: `1.0rem`,
        paddingTop: `2.0rem`, marginBottom: '2rem'}}>
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

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid } from '@material-ui/core';
import Navigation from "./navigation"
import { StaticImage } from "gatsby-plugin-image"
import Background from '../images/background_crop.png';


const Footer = ({ siteTitle, siteDescription, menuLinks }) => (
  <footer style={{paddingLeft: `1.25rem`, paddingRight: `1.25rem`, backgroundImage: `url(${Background})`, textAlign: 'center'}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`, paddingTop: `1.45rem`}}>
      <h1 style={{margin: 0}}>
        <div style={{color: `#333f48`, paddingBottom: '1.25rem', paddingTop: `1.25rem`, fontSize: '2.5rem', margin: `0rem`}}>Contact Us</div>
      </h1>
      <h3>
        <div style={{color: `#333f48`, fontSize: '1.35rem', fontStretch: `2rem`}}>
          If you're interested in our work and want to learn more, please email us at
          cvc-lab@utexas.edu</div>
      </h3>
    </div>
  </footer>
)

export default Footer

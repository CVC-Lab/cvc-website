import * as React from "react"
import Background from '../images/background_crop.png';


const Footer = ({ siteTitle, siteDescription, menuLinks }) => (
  <footer style={{paddingLeft: `1.25rem`, paddingRight: `1.25rem`, background: '#bf5700', textAlign: 'center'}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`, paddingTop: `1.45rem`}}>
      <h1 style={{margin: 0}}>
        <div style={{color: `#FFFFFF`, paddingBottom: '1.25rem', paddingTop: `1.25rem`, fontSize: '2.5rem', margin: `0rem`}}>Contact Us</div>
      </h1>
      <h3>
        <div style={{color: `#FFFFFF`, fontSize: '1.35rem', fontStretch: `2rem`, paddingBottom: '2.25rem'}}>
          If you're interested in our work and want to learn more, please contact us.</div>
      </h3>
    </div>
  </footer>
)

export default Footer

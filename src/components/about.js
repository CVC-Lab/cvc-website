import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid, GridList, GridListTile } from "@material-ui/core"
import Navigation from "./navigation"
import { StaticImage } from "gatsby-plugin-image"

const About = () => (
  <div className="about-class" id="about" style={{background: 'white', display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: `left`}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`, marginLeft: `1.25rem`, marginRight: `1.25rem`, width: `100%`}}>
      <h4 className="header-subtitle" style={{color: `#333f48`, fontSize: `1.0rem`, fontWeight: `600`, margin: `auto`, paddingBottom: `1.0rem`,
        paddingTop: `2.0rem`, marginBottom: '1rem'}}>
        About Us
      </h4>
      <p>The Computational Visualization Center is a cross-disciplinary effort whose mission is to develop and improve
        the core technologies for comprehensive computational modeling, simulation, analysis, and visualization of
        natural and synthetic phenomena, and then utilize them as an integrated tool for rapid discovery.</p>
      <br></br>
      <p>The Center is under the joint auspices of the Institute for Computational Engineering and Sciences and the Department of Computer Sciences at the University of Texas at Austin.</p>
      <br></br>
      <div>
        <img
          src={require(`../images/oden.png`).default}
          alt="oden institute"
          width="45%"
        />
      </div>
      <div>
        <img
          src={require(`../images/cs.png`).default}
          alt="cs"
          width="45%"
        />
      </div>
      <p>The Center’s current research and education areas of interest span Image Processing, Computational Geometry,
        Geometric Modeling, Computer Graphics Animation, Data Analysis, Visualization, and Computational Mathematics.
        Recent research and software development topics include the design and development of efficient and robust
        2D/3D/4D image and geometry filtering, reconstruction, compression, matching, and meshing algorithms.
        These are being applied in our current research projects, in particular, to the structure elucidation and
        construction of multi-scale domain models of molecules, organelles, cells, tissues, and organs from multi-modal,
        microscopy, and bio-imaging.</p>
      <br></br>
      <p>The Center’s research groups are also involved in developing integrated approaches
        to computational modeling, mathematical analysis, and interrogative visualization, especially for dynamic
        bio-medical phenomena. The Center’s education and outreach output include generating interpretive scientific
        animation, and interactive movies, that are being used in classroom instruction, as well as increasing the
        public awareness of the causative nature of the disease, and potential cures.</p>
    </div>
  </div>
)

export default About

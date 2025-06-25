import * as React from "react"
import "./about-modern.css"

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <h2 className="about-subtitle">About Us</h2>
      
      <p className="about-paragraph">
        The Computational Visualization Center is a cross-disciplinary effort
        whose mission is to develop and improve the core technologies for
        comprehensive computational modeling, simulation, analysis, and
        visualization of natural and synthetic phenomena, and then utilize them
        as an integrated tool for rapid discovery.
      </p>
      
      <p className="about-paragraph">
        The Center is under the joint auspices of the Oden Institute for
        Computational Engineering and Sciences and the Department of Computer
        Science at the University of Texas at Austin.
      </p>
      
      <p className="about-paragraph">
        The Center&apos;s current research and education areas of interest span Image
        Processing, Computational Geometry, Geometric Modeling, Computer
        Graphics Animation, Data Analysis, Visualization, and Computational
        Mathematics. Recent research and software development topics include the
        design and development of efficient and robust 2D/3D/4D image and
        geometry filtering, reconstruction, compression, matching, and meshing
        algorithms. These are being applied in our current research projects, in
        particular, to the structure elucidation and construction of multi-scale
        domain models of molecules, organelles, cells, tissues, and organs from
        multi-modal, microscopy, and bio-imaging.
      </p>
      
      <p className="about-paragraph">
        The Center&apos;s research groups are also involved in developing integrated
        approaches to computational modeling, mathematical analysis, and
        interrogative visualization, especially for dynamic bio-medical
        phenomena. The Center&apos;s education and outreach output include generating
        interpretive scientific animation, and interactive movies, that are
        being used in classroom instruction, as well as increasing the public
        awareness of the causative nature of the disease, and potential cures.
      </p>
      
      <div className="logo-container-centered">
        <a
          href="https://www.oden.utexas.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
          aria-label="Visit Oden Institute website"
        >
          <img
            src={require("../images/oden.png").default}
            alt="Oden Institute logo"
            className="logo-image"
          />
        </a>
        
        <a
          href="https://www.cs.utexas.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
          aria-label="Visit UT Computer Science website"
        >
          <img
            src={require("../images/cs.png").default}
            alt="UT CS logo"
            className="logo-image"
          />
        </a>
      </div>
    </div>
  </section>
)

export default About
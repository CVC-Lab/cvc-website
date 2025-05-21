import * as React from "react"
import "./footer.css"

const Footer = () => {
  const links = [
    { href: "/cvc-website/postdoc-job", title: "Post-Doctoral Researcher" },
    { href: "/cvc-website/swe-job", title: "Software Engineer" },
    {
      href: "/cvc-website/network-job",
      title: "Software Engineer (IT Network/Security Specialist)",
    },
  ]
  return (
    <footer className="footer">
      <div className="container">
        <div className="title">Contact Us</div>
        <div className="subtitle">
          If you're interested in our work and want to learn more, please
          contact us. We are located in POB 2.102.
        </div>
        <div className="jobs">Current Job Opportunities:</div>
        <ul className="listStyleNone">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="jobs">Previous Website:</div>
        <div className="subtitle">
          <a href="https://cvcweb.oden.utexas.edu/cvcwp/" className="link">
            UT Austin Computational Visualization Center
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

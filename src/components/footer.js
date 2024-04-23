import * as React from 'react';
import './footer.css';

const Footer = () => {
  const isGitHubPages = window.location.hostname.includes('github.io');

  const baseURL = isGitHubPages ? '/cvc-website' : '';
  const links = [
    { href: `${baseURL}/research-job`, title: 'Lead Research Scientist (AI Networking and Security)' },
    { href: `${baseURL}/postdoc-job`, title: 'Post-Doctoral Researcher' },
    { href: `${baseURL}/swe-job`, title: 'Software Engineer' },
    { href: `${baseURL}/network-job`, title: 'Software Engineer (IT Network/Security Specialist)' },
  ];
  return (
  <footer className="footer">
    <div className="container">
      <div className="title">Contact Us</div>
      <div className="subtitle">
        If you're interested in our work and want to learn more, please contact us.
      </div>
      <div className="jobs">
        Current Job Opportunities:
      </div>
      <ul className="listStyleNone">
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} className="link">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
  )
};

export default Footer;

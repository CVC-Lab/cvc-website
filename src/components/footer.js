import * as React from 'react';
import './footer.css';

const Footer = () => {
  const links = [
    { href: '/research-job', title: 'Lead Research Scientist (AI Networking and Security)' },
    { href: '/postdoc-job', title: 'Post-Doctoral Researcher' },
    { href: '/swe-job', title: 'Software Engineer' },
    { href: '/network-job', title: 'Software Engineer (IT Network/Security Specialist)' },
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

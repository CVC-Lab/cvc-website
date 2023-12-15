import * as React from "react";
import { Link as LinkRouter } from "gatsby";
import "./software_list.css";

const SoftwareList = ({ softwareProjects }) => {
  const externalLinks = {
    "prism": "https://www.cs.utexas.edu/%7Ebajaj/cvc/software/prism.shtml",
    "pocket/tunnel": "https://www.cs.utexas.edu/%7Ebajaj/cvc/software/Pocktunnel.shtml",
    "qhm": "https://www.cs.utexas.edu/%7Ebajaj/cvc/software/QHM.shtml",
    "qtm": "https://www.cs.utexas.edu/%7Ebajaj/cvc/software/QTM.shtml",
    "gpu renderer": "https://www.cs.utexas.edu/%7Ebajaj/cvc/software/SurfVolRender.shtml",
    "trlib": "https://www.cs.utexas.edu/%7Ebajaj/cvc/software/TRLIB.shtml"
    // add other software names and their external URLs as needed
  };

  const renderLink = (item) => {
    const itemNameSlug = item.name.replace(/[\s\/]+/g, '-').toLowerCase();
    // check if item has a specified external link
    if (externalLinks[item.name.toLowerCase()]) {
      return (
        <a href={externalLinks[item.name.toLowerCase()]} target="_blank" rel="noopener noreferrer">
          <strong>{item.name}</strong>
        </a>
      );
    } else {
      return (
        <LinkRouter to={`/software/${itemNameSlug}`}>
          <strong>{item.name}</strong>
        </LinkRouter>
      );
    }
  };

  return (
    <div className='software'>
      <h1>Software Projects</h1>
      {softwareProjects.map(category => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map(item => (
              <li key={item.name}>
                {renderLink(item)}: {item.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SoftwareList;

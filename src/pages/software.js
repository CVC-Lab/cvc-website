import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SoftwareList from "../components/software_list";

const SoftwarePage = () => {
  const data = useStaticQuery(graphql`
    query SoftwareQuery {
      site {
        siteMetadata {
          softwareProjects {
            category
            items {
              name
              description
            }
          }
        }
      }
    }
  `);

  const softwareProjects = data.site.siteMetadata.softwareProjects;
  return (
    <Layout>
      <SoftwareList softwareProjects={softwareProjects} />
    </Layout>
  );
};

export default SoftwarePage;
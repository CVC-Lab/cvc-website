import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import "../components/project_page.css";

export default function ProjectTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="project-page-class" id="project-page" style={{background: 'white', display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: `left`}}>
        <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `5.45rem`, marginLeft: `1.25rem`, marginRight: `1.25rem`, width: `100%`}}>
          <h4 className="header-subtitle" style={{color: `#333f48`, fontSize: `1.5rem`, fontWeight: `600`, margin: `auto`, paddingBottom: `1.0rem`,
            paddingTop: `2.0rem`, marginBottom: '1rem'}}>
            {frontmatter.title}
          </h4>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        # date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
      <StaticImage
        src="../images/oden.png"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Oden logo"
        style={{ marginBottom: `1.45rem`, paddingRight: `.2em` }}
      />
    <StaticImage
      src="../images/cs.png"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Oden logo"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage

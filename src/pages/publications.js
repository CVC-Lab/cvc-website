import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"



const PublicationsPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the publications page</h1>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PublicationsPage

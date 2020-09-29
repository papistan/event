import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi</h1>
    <Link to="/sponsors/">Go to Sponsors</Link> <br />
  </Layout>
)

export default IndexPage

// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3 </p>
    <Link to="/">Homepage </Link><span>       </span>
    <Link to="/page-2/">Page 2</Link>
  </Layout>
)

export default ThirdPage

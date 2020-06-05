// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 </p>
    <Link to="/">Homepage  </Link><span>                            </span><span>                            </span>
    <Link to="/page-3/">Page 3</Link>
  </Layout>
)

export default SecondPage

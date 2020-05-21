import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/rules/header"
import Content from "../components/rules/content"
import AboutUs from "../components/footer/about-us"

const Page = () => (
  <Layout>
    <SEO title="Rules and Code of Conduct" />
    <Header />
    <Content />
    <AboutUs />
  </Layout>
)

export default Page

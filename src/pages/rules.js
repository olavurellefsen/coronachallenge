import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/rules/header"
import Content from "../components/rules/content"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.png"

const Page = () => (
  <Layout>
    <SEO
      title="Rules and Code of Conduct"
      description="Rules and Code of Conduct for the North Atlantic Corona Challenge"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/rules"
    />
    <Header />
    <Content />
    <AboutUs />
  </Layout>
)

export default Page

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/main/header"
import Intro from "../components/main/intro"
import Themes from "../components/main/themes"
import TargetGroup from "../components/main/targetgroup"
import JuryCriteria from "../components/main/jury-criteria"
import Prizes from "../components/main/prizes"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="North Atlantic Corona Challenge"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/"
    />
    <Header />
    <Intro />
    <Themes />
    <TargetGroup />
    <JuryCriteria />
    <Prizes />
    <AboutUs />
  </Layout>
)

export default IndexPage

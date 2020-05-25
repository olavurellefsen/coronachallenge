import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/speaker/header"
import Intro from "../components/speaker/content"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO
      title="Speaker"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/speaker"
    />
    <Header />
    <Intro />
    <AboutUs />
  </Layout>
)

export default Page

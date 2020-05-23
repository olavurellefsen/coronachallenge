import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/video/header"
import Video from "../components/video/video"
import Intro from "../components/video/intro"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO title="Video" />
    <SEO
      title="Home"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/"
    />
    <Header />
    <Video />
    <Intro />
    <AboutUs />
  </Layout>
)

export default Page

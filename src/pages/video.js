import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/video/header"
import Video from "../components/video/video"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO
      title="Video"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/"
    />
    <Header />
    <Video />
    <AboutUs />
  </Layout>
)

export default Page

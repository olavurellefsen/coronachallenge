import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/media/header"
import Intro from "../components/media/content"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO
      title="Media Coverage"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/media"
    />
    <Header />
    <Intro />
    <AboutUs />
  </Layout>
)

export default Page

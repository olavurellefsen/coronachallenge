import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/video/header"
import Video from "../components/video/video"
import Intro from "../components/video/intro"
import AboutUs from "../components/footer/about-us"

const Page = () => (
  <Layout>
    <SEO title="Video" />
    <Header />
    <Video />
    <Intro />
    <AboutUs />
  </Layout>
)

export default Page

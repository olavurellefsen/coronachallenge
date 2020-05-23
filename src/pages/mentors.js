import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/mentors/header"
import Content from "../components/mentors/content"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO
      title="Mentors"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/mentors"
    />
    <Header />
    <Content />
    <AboutUs />
  </Layout>
)

export default Page

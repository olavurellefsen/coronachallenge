import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/signup/header"
import Intro from "../components/signup/intro"
import Form2 from "../components/signup/form"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO
      title="Sign up 2"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/signup"
    />
    <Header />
    <Intro />
    <Form2 />
    <AboutUs />
  </Layout>
)

export default Page

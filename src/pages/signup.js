import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/media/header"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO
      title="Sign up"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/signup"
    />
    <Header />
    <DescriptionStyle>The registration deadline has passed.</DescriptionStyle>
    <AboutUs />
  </Layout>
)

const DescriptionStyle = styled.div`
  color: black;
  font-size: 32px;
  text-align: center;
  margin: 40px 5vw;
`

export default Page

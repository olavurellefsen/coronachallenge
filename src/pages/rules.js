import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/rules/header"
import DownloadPDF from "../components/rules/download-pdf"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO
      title="Rules and Code of Conduct"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/rules"
    />
    <Header />
    <DownloadPDF />
    <AboutUs />
  </Layout>
)

export default Page

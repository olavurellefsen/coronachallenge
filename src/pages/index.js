import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/main/header"
import Intro from "../components/main/intro"
import Signup from "../components/main/signup"
import Themes from "../components/main/themes"
import TargetGroup from "../components/main/targetgroup"
import JuryCriteria from "../components/main/jury-criteria"
import Prizes from "../components/main/prizes"
import EventSchedule from "../components/main/eventschedule"
import AboutUs from "../components/main/about-us"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Intro />
    <Signup />
    <Themes />
    <TargetGroup />
    <JuryCriteria />
    <Prizes />
    <EventSchedule />
    <AboutUs />
  </Layout>
)

export default IndexPage

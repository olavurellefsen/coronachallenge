import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/main/header"
import Intro from "../components/main/intro"
import Themes from "../components/main/themes"
import TargetGroup from "../components/main/targetgroup"
import Video from "../components/main/video"
import JuryCriteria from "../components/main/jury-criteria"
import Prizes from "../components/main/prizes"
import EventSchedule from "../components/main/eventschedule"
import AboutUs from "../components/footer/about-us"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Intro />
    <Themes />
    <TargetGroup />
    <Video />
    <JuryCriteria />
    <Prizes />
    <EventSchedule />
    <AboutUs />
  </Layout>
)

export default IndexPage

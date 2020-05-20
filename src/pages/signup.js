import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/signup/header"
import Intro from "../components/signup/intro"
import Form from "../components/signup/form"

const Page = () => (
  <Layout>
    <SEO title="Sign up" />
    <Header />
    <Intro />
    <Form />
  </Layout>
)

export default Page

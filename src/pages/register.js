import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/register/header"
import Intro from "../components/register/intro"
import Form from "../components/register/form"

const Page = () => (
  <Layout>
    <SEO title="Register" />
    <Header />
    <Intro />
    <Form />
  </Layout>
)

export default Page

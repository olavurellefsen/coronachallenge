// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import YouTube from 'react-youtube'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props) => {
  console.log(process.env.GATSBY_X_VIDEO_ID)
  return(
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path}) -{process.env.GATSBY_X_VIDEO_ID}</p>
    <ContainerStyle><YouTube videoId={`${process.env.GATSBY_X_VIDEO_ID}`} opts={{
    height: '800',
    width: '840',
    position: 'relative',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },

  }} /></ContainerStyle>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
}
const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default SecondPage;
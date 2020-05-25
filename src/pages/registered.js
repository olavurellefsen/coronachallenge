import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Registered = ({ location }) => {
  return (
    <Layout>
      {location.state ? (
        location.state.requestId === `${process.env.GATSBY_X_REQUEST_ID}` && (
          <>
            <SEO title="Sign up received" />
            <TextStyle>Sign up received.</TextStyle>
            <TextStyle>
              Please check your email and follow the instructions to confirm
              your sign up.
            </TextStyle>
            <TextStyle>
              You might want to check your spam folder if you cannot find the
              email. The email will be from registration@proposalpot.com.
            </TextStyle>
          </>
        )
      ) : (
        <TextStyle>Sign up confirmation page.</TextStyle>
      )}
    </Layout>
  )
}

const TextStyle = styled.div`
  font-size: 22px;
  text-align: center;
  margin: 20px;
`

export default Registered

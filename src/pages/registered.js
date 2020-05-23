import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Registered = ({ location }) => {
  return (
    <Layout>
      {location.state ? (
        location.state.requestId === `2009906c-a06f-4aee-b0ea-a38b00c5779c` && (
          <>
            <SEO title="Sign up received" />
            <TextStyle>Sign up received.</TextStyle>
            <TextStyle>
              Please check your email and follow the instructions to confirm
              your sign up.
            </TextStyle>
            <TextStyle>
              You might want to check your spam folder if you cannot find the
              email.
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

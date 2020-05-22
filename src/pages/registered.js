import React from 'react'
import short from 'short-uuid'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const registered = () => (
  <Layout>
    <SEO title="registered" />
    <ContainerStyle>
      <TextStyle>
        You've succesfully registered. Please check your email, and follow the instructions listed there. Possibly check spam box for it.
        </TextStyle>
    </ContainerStyle>
  </Layout>
)
const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextStyle = styled.div`
  font-size: 22px;
  margin-top: 20px;
`
export default registered

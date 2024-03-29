import React from "react"
import styled from "styled-components"
import DownloadPdfImage from "./download-pdf-image"
import downloadFile from "../../downloads/rules-and-code-of-conduct.pdf"

const Content = () => (
  <ContentContainer>
    <ContentTitleStyle>RULES AND CODE OF CONDUCT</ContentTitleStyle>
    <SectionHeaderStyle>
      Download the document
      <br />
      <br />
      <a href={downloadFile} download>
        <DownloadPdfImage />
      </a>
      <br />
      <br />
    </SectionHeaderStyle>
  </ContentContainer>
)

const ContentContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1608px;
  margin: 0;
  padding: 60px 5vw 10px 5vw;
  background: #e8e8e8;
`

const ContentTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  margin: 0 0 20px 0;
`

const SectionHeaderStyle = styled.div`
  color: #006eb6;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  margin: 40px 0 10px 0;
`

export default Content

import React from "react"
import styled from "styled-components"

const Content = () => (
  <ContentContainer>
    <ContentTitleStyle>PRIVACY POLICY</ContentTitleStyle>

    <SectionHeaderStyle>Who we are</SectionHeaderStyle>

    <DescriptionStyle>
      The organisers of the North Atlantic Corona Challenge (NACC) are Nordic
      Atlantic Cooperation (<a href="https://www.nora.fo">NORA</a>) and
      Highlands and Islands Enterprise (<a href="https://www.hie.co.uk/">HIE</a>
      ).
    </DescriptionStyle>
    <DescriptionStyle>
      Your personal data is processed as described in this Privacy Policy.
    </DescriptionStyle>

    <SectionHeaderStyle>Information you provide</SectionHeaderStyle>
    <DescriptionStyle>
      You may provide personally identifiable information (“personal data”)
      about yourself when you participate to our event and, of course, when you
      fill in your personal data in “Sign Up form” name, e-mail address, and
      other relevant background information.
    </DescriptionStyle>
    <DescriptionStyle>
      Persons that are under 16 years old cannot provide their personal data
      through this Website. If you are below the age of 16 years, please provide
      consent for personal data submission and processing by the holder of
      parental responsibility over you.
    </DescriptionStyle>

    <SectionHeaderStyle>Cookies</SectionHeaderStyle>
    <DescriptionStyle>
      If you have an account and you log in to this site, we will set a
      temporary cookie to determine if your browser accepts cookies. This cookie
      contains no personal data and is discarded when you close your browser.
    </DescriptionStyle>

    <DescriptionStyle>
      When participants add content on the site we collect the data and also the
      IP address and browser user agent string to help spam detection.
    </DescriptionStyle>

    <DescriptionStyle>
      If you edit or publish content, an additional cookie will be saved in your
      browser. This cookie includes no personal data and simply indicates the
      post ID of the content you just edited. It expires after 1 day.
    </DescriptionStyle>

    <DescriptionStyle>
      When you log in, we will also set up several cookies to save your login
      information and your screen display choices. Login cookies last for 10
      hours days. If you log out of your account, the login cookies will be
      removed.
    </DescriptionStyle>

    <SectionHeaderStyle>Media</SectionHeaderStyle>
    <DescriptionStyle>
      If you upload images or videos to the site, you should avoid uploading
      images with embedded location data (EXIF GPS) included. Visitors to the
      website can download and extract any location data from images on the
      website.
    </DescriptionStyle>

    <SectionHeaderStyle>
      Embedded content from other websites
    </SectionHeaderStyle>
    <DescriptionStyle>
      Articles on this site may include embedded content (e.g. videos, images,
      articles, etc.). Embedded content from other websites behaves in the exact
      same way as if the visitor has visited the other website.
    </DescriptionStyle>

    <DescriptionStyle>
      These websites may collect data about you, use cookies, embed additional
      third-party tracking, and monitor your interaction with that embedded
      content, including tracking your interaction with the embedded content if
      you have an account and are logged in to that website.
    </DescriptionStyle>

    <SectionHeaderStyle>Analytics</SectionHeaderStyle>
    <DescriptionStyle>
      We may share your data with sponsors and partners involved in funding and
      supporting our event. These entities may receive your information only to
      the extent necessary for the proper execution of the purposes defined
      above. Parties when required by law or as necessary to protect our
      services.
    </DescriptionStyle>

    <SectionHeaderStyle>Where we store your personal data</SectionHeaderStyle>
    <DescriptionStyle>
      We primarily store and process your personal data in the company archives,
      which is accessible by only our employees and contractors.
    </DescriptionStyle>

    <SectionHeaderStyle>Period of storage</SectionHeaderStyle>
    <DescriptionStyle>
      Your personal data will be kept for no longer than is necessary for the
      specific purposes for which the personal data are processed.
    </DescriptionStyle>

    <SectionHeaderStyle>What rights you have over your data</SectionHeaderStyle>
    <DescriptionStyle>
      If you have an account on this site you can request to receive an exported
      file of the personal data we hold about you, including any data you have
      provided to us. You can also request that we erase any personal data we
      hold about you. This does not include any data we are obliged to keep for
      administrative, legal, or security purposes.
    </DescriptionStyle>

    <SectionHeaderStyle>Your contact information</SectionHeaderStyle>
    <DescriptionStyle>
      All contact information given to NORA and HIE in this site will be
      processed and stored by the event for the following purposes:
    </DescriptionStyle>
    <br />
    <ul>
      <ListItemStyle>
        E-mails will be added to lists for the purpose of sending out
        information about the event to participants. E-mail provided to us will
        not be disclosed and/or sold to third party.
      </ListItemStyle>
      <ListItemStyle>
        Phone Numbers will only be stored and used in case of emergencies; such
        as medical emergencies during the event. Phone numbers provided to us
        will not be disclosed and/or sold to third party.
      </ListItemStyle>
    </ul>
    <SectionHeaderStyle>Changes to this policy</SectionHeaderStyle>
    <DescriptionStyle>
      We may revise this Privacy Policy from time to time. The most current
      version of the policy will govern our use of your information and will be
      located at{" "}
      <a href="https://coronachallenge.fo/privacypolicy">
        coronachallenge.fo/privacypolicy
      </a>
      . We may make changes to this policy at our sole discretion. By continuing
      to access or use the Website after those changes become effective, you
      agree to be bound by the revised Privacy Policy.
    </DescriptionStyle>
    <br />
    <br />
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
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  margin: 40px 0 10px 0;
`

const DescriptionStyle = styled.div`
  color: black;
  font-size: 18px;
  text-align: left;
  margin: 10px 0;
`

const ListItemStyle = styled.li`
  font-size: 18px;
`

export default Content

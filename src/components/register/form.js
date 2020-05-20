import React from "react"
import styled from "styled-components"

const Form = () => (
  <FormContainer>
    <form
      method="post"
      action="#"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="bot-field" />
      <FieldStyle>
        <LabelStyle>First Name</LabelStyle>
        <br />
        <InputStyle type="text" name="firstname" id="firstname" />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Surname</LabelStyle>
        <br />
        <InputStyle type="text" name="surname" id="surname" />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Age</LabelStyle>
        <br />
        <InputStyle type="text" name="age" id="age" />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Email</LabelStyle>
        <br />
        <InputStyle type="email" name="email" id="email" />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Country</LabelStyle>
        <br />
        <InputStyle type="text" name="country" id="country" />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Which themes are you interested in?</LabelStyle>
        <br />
        <br />
        <RadioButtonStyle type="radio" name="themes" id="savelives" value="savelives"/>
        <RadioButtonLabelStyle for="savelives">SAVE LIVES</RadioButtonLabelStyle><br/><br/>
        <RadioButtonStyle type="radio" name="themes" id="savecommunities" value="savecommunities"/>
        <RadioButtonLabelStyle for="savecommunities">SAVE COMMUNITIES</RadioButtonLabelStyle><br/><br/>
        <RadioButtonStyle type="radio" name="themes" id="savebusinesses" value="savebusinesses"/>
        <RadioButtonLabelStyle for="savebusinesses">SAVE BUSINESSES</RadioButtonLabelStyle><br/><br/>
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Skills and experiences</LabelStyle>
        <br />
        <br />
        <br />
        <RadioButtonStyle type="radio" name="skillsexperiences" id="projectmanagement" value="projectmanagement"/>
        <RadioButtonLabelStyle for="projectmanagement">PROJECT MANAGEMENT</RadioButtonLabelStyle><br/><br/>
        <RadioButtonStyle type="radio" name="skillsexperiences" id="health" value="health"/>
        <RadioButtonLabelStyle for="health">HEALTH</RadioButtonLabelStyle><br/><br/>
        <RadioButtonStyle type="radio" name="skillsexperiences" id="software" value="software"/>
        <RadioButtonLabelStyle for="software">SOFTWARE</RadioButtonLabelStyle><br/><br/>
      </FieldStyle>
      <DescriptionContainerStyle>
        <DescriptionParagraphStyle>
          The organizers are free to use the submitted videos for marketing
          purposes.
        </DescriptionParagraphStyle>
        <DescriptionParagraphStyle>
          All personal data will be treated in accordance with the{" "}
          <a href="https://gdpr-info.eu/">
            EU's General Data Protection Regulation (GDPR)
          </a>
        </DescriptionParagraphStyle>
        <ButtonStyle type="submit">Submit</ButtonStyle>
        <DescriptionParagraphStyle>
          By submitting this form you agree to our Terms and Conditions.
        </DescriptionParagraphStyle>
      </DescriptionContainerStyle>
    </form>
  </FormContainer>
)

const FormContainer = styled.div`
  display: flex;
  padding: 0 5vw;
  background: #e8e8e8;
`

const FieldStyle = styled.div`
  margin: 20px 0 0 0;
`

const LabelStyle = styled.label`
  color: #006eb6;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 0 2px;
`

const InputStyle = styled.input`
  color: black;
  font-size: 24px;
  text-align: left;
  box-shadow: 0px 3px 6px #00000029;
  margin: 0;
  border: 0;
  height: 56px;
  width: 325px;
  padding: 10px;
`

const RadioButtonStyle = styled.input`
  padding: 10px;
`

const RadioButtonLabelStyle = styled.label`
  color: #006eb6;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
`

const DescriptionContainerStyle = styled.div`
  margin: 48px 0;
`

const DescriptionParagraphStyle = styled.div`
  position: relative;
  color: #006eb6;
  font-size: 18px;
  margin: 20px 0;
`

const ButtonStyle = styled.button`
  display: block;
  position: relative;
  margin: 40px 10px;
  max-width: 400px;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  background: #006eb6;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  opacity: 1;
  padding: 16px 20px;
  text-transform: uppercase;
  text-align: center;
`

export default Form

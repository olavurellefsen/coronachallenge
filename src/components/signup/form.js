import React from "react"
import styled from "styled-components"
import short from "short-uuid"
import SendEmail from "../utils/SendEmail"

const Form = () => {
  const translator = short()
  return (
    <FormContainer>
      <form
        name="signup"
        method="post"
        action="http://localhost:9000/ReceiveRegistration"
        onSubmit={(event) => {
          let experiences = ``
          let themes = ``
          event.target.skillsexperiences.forEach(element => {
            experiences = element.checked ? experiences + element.value + ", " : experiences

          });
          event.target.themes.forEach(element => {
            themes = element.checked ? themes + element.value + ", " : themes

          });

          const user = {
            name: `${event.target.firstnames.value} ${event.target.lastname.value}`,
            ageGroup: event.target.age.value,
            email: event.target.email.value,
            country: event.target.country.value,
            experiences: experiences,
            themes: themes,
            requestId: `2009906c-a06f-4aee-b0ea-a38b00c5779c`, // TODO: #38 find a better way to post request ID,
            need_help: event.target.needhelp.value,
          }
          fetch(`${process.env.GATSBY_X_REGISTER_URL}`, { // "http://localhost:9000/ReceiveRegistration"
            method: 'POST',
            body: JSON.stringify(user),
            mode: "cors"
          }).then((response) => response.json())
            .then((responseData) => {
              if (responseData.variables.email) alert("Your email is already registered")
              else if (responseData.variables.user_id) {
                const requestId = translator.fromUUID(responseData.variables.request_id)
                const userId = translator.fromUUID(responseData.variables.user_id)

                SendEmail(`${process.env.GATSBY_X_EMAIL_URL}`, {
                  to: `${user.email}`,
                  subject: `Registration to North Atlantic Corona Challenge`,
                  html: `<p>Dear ${user.name}.</p></br>
                  <p>Thank you for registering to the North Atlantic Corona Challenge!</p></br>
                    <p> Please click on the following <a href="${
                    process.env.GATSBY_X_CONFIRM_URL
                    }/${requestId}/${userId}">link</a> to finish your sign up, and to be redirected to the right workspace. It's important that you use this email to login with - you won't able to access the event otherwise.</p>
                `,
                })
                window.location.href = `/registered`
              }
            })
            .catch(error => console.warn(error));

          event.preventDefault();
        }}
      >
        <FieldContainer>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="signup" />
          <FieldStyle>
            <LabelStyle>First Names</LabelStyle>
            <br />
            <InputStyle type="text" name="firstnames" id="firstnames" required />
          </FieldStyle>
          <FieldStyle>
            <LabelStyle>Last Name</LabelStyle>
            <br />
            <InputStyle type="text" name="lastname" id="lastname" required />
          </FieldStyle>
          <FieldStyle>
            <LabelStyle>Email</LabelStyle>
            <br />
            <InputStyle type="email" name="email" id="email" required />
          </FieldStyle>
          <FieldStyle>
            <LabelStyle>Age</LabelStyle>
            <br />
            <CheckboxGroupStyle>
              <CheckboxStyle
                type="radio"
                name="age"
                id="age1617"
                value="age1617"
                required
              />
              <CheckboxLabelStyle htmlFor="age1617">16-17 years</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="radio"
                name="age"
                id="age1830"
                value="age1830"
                required
              />
              <CheckboxLabelStyle htmlFor="age1830">18-30 years</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="radio"
                name="age"
                id="age31plus"
                value="age31plus"
                required
              />
              <CheckboxLabelStyle htmlFor="age31plus">31+ years</CheckboxLabelStyle>
              <br />
            </CheckboxGroupStyle>
          </FieldStyle>
          <FieldStyle>
            <LabelStyle>Country</LabelStyle>
            <br />
            <CheckboxGroupStyle>
              <CheckboxStyle
                type="radio"
                name="country"
                id="greenland"
                value="greenland"
                required
              />
              <CheckboxLabelStyle htmlFor="greenland">GREENLAND</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="radio"
                name="country"
                id="iceland"
                value="iceland"
                required
              />
              <CheckboxLabelStyle htmlFor="iceland">ICELAND</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="radio"
                name="country"
                id="faroeislands"
                value="faroeislands"
                required
              />
              <CheckboxLabelStyle htmlFor="faroeislands">
                FAROE ISLANDS
            </CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="radio"
                name="country"
                id="scotland"
                value="scotland"
                required
              />
              <CheckboxLabelStyle htmlFor="scotland">SCOTLAND</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="radio"
                name="country"
                id="coastalnorway"
                value="coastalnorway"
                required
              />
              <CheckboxLabelStyle htmlFor="coastalnorway">
                COASTAL NORWAY
            </CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="radio"
                name="country"
                id="other"
                value="other"
                required
              />
              <CheckboxLabelStyle htmlFor="other">OTHER</CheckboxLabelStyle>
              <br />
            </CheckboxGroupStyle>
          </FieldStyle>
          <FieldStyle>
            <LabelStyle>Which themes interest you?</LabelStyle>
            <br />
            <CheckboxGroupStyle>
              <CheckboxStyle
                type="checkbox"
                name="themes"
                id="savelives"
                value="savelives"
              />
              <CheckboxLabelStyle htmlFor="savelives">SAVE LIVES</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="checkbox"
                name="themes"
                id="savecommunities"
                value="savecommunities"
              />
              <CheckboxLabelStyle htmlFor="savecommunities">
                SAVE COMMUNITIES
            </CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="checkbox"
                name="themes"
                id="savebusinesses"
                value="savebusinesses"
              />
              <CheckboxLabelStyle htmlFor="savebusinesses">
                SAVE BUSINESSES
            </CheckboxLabelStyle>
              <br />
            </CheckboxGroupStyle>
          </FieldStyle>
          <FieldStyle>
            <LabelStyle>Skills and experiences</LabelStyle>
            <br />
            <CheckboxGroupStyle>
              <CheckboxStyle
                type="checkbox"
                name="skillsexperiences"
                id="projectmanagement"
                value="projectmanagement"
              />
              <CheckboxLabelStyle htmlFor="projectmanagement">
                PROJECT MANAGEMENT
            </CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="checkbox"
                name="skillsexperiences"
                id="health"
                value="health"
              />
              <CheckboxLabelStyle htmlFor="health">HEALTH</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="checkbox"
                name="skillsexperiences"
                id="software"
                value="software"
              />
              <CheckboxLabelStyle htmlFor="software">SOFTWARE</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="checkbox"
                name="skillsexperiences"
                id="hardware"
                value="hardware"
              />
              <CheckboxLabelStyle htmlFor="hardware">HARDWARE</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="checkbox"
                name="skillsexperiences"
                id="conceptdevelopment"
                value="conceptdevelopment"
              />
              <CheckboxLabelStyle htmlFor="conceptdevelopment">
                CONCEPT DEVELOPMENT
            </CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="checkbox"
                name="skillsexperiences"
                id="other"
                value="other"
              />
              <CheckboxLabelStyle htmlFor="other">
                OTHER, PLEASE SPECIFY
            </CheckboxLabelStyle>
              <InputOtherStyle type="text" name="skillsexperiences_other" />
              <br />
            </CheckboxGroupStyle>
          </FieldStyle>
          <FieldStyle>
            <LabelStyle>
              Do you want the organisers to help you find a team?
          </LabelStyle>
            <br />
            <CheckboxGroupStyle>
              <CheckboxStyle
                type="radio"
                name="needhelp"
                id="yes"
                value="yes"
                required
              />
              <CheckboxLabelStyle htmlFor="yes">YES</CheckboxLabelStyle>
              <br />
              <br />
              <CheckboxStyle
                type="radio"
                name="needhelp"
                id="no"
                value="no"
                required
              />
              <CheckboxLabelStyle htmlFor="no">NO</CheckboxLabelStyle>
            </CheckboxGroupStyle>
          </FieldStyle>
        </FieldContainer>
        <DescriptionContainerStyle>
          <DescriptionParagraphStyle>
            The organizers are free to use the submitted videos for marketing
            purposes.
        </DescriptionParagraphStyle>
          <DescriptionParagraphStyle>
            By submitting this form you agree to our <a href="/privacypolicy">Privacy Policy</a> and our <a href="/rules">Rules and Code of Conduct</a>.
        </DescriptionParagraphStyle>
          <DescriptionParagraphStyle>
            All personal data will be treated in accordance with the{" "}
            <a href="https://gdpr-info.eu/">
              EU's General Data Protection Regulation (GDPR)
          </a>
          </DescriptionParagraphStyle>
          <ButtonStyle type="submit">SIGN UP FOR EVENT</ButtonStyle>
        </DescriptionContainerStyle>
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  padding: 0 5vw;
  background: #e8e8e8;
`

const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FieldStyle = styled.div`
  margin: 20px 40px 0 0;
`

const LabelStyle = styled.label`
  color: #006eb6;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 0;
  line-height: 2;
`

const InputStyle = styled.input`
  color: black;
  font-size: 24px;
  text-align: left;
  box-shadow: 0px 3px 6px #00000029;
  margin: 0;
  border: 0;
  height: 56px;
  width: 600px;
  max-width: 90vw;
  padding: 10px;
`

const CheckboxGroupStyle = styled.div`
  padding: 20px;
  background: white;
  box-shadow: 0px 3px 6px #00000029;
  margin: 0;
  border: 0;
  width: 600px;
  max-width: 90vw;
`

const CheckboxStyle = styled.input`
  padding: 10px;
`

const CheckboxLabelStyle = styled.label`
  color: #006eb6;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
`

const InputOtherStyle = styled.input`
  color: black;
  font-size: 24px;
  text-align: left;
  box-shadow: 0px 3px 6px #00000029;
  border: 0;
  height: 30px;
  width: 500px;
  max-width: 80vw;
  padding: 10px;
  margin: 10px 0 0 0;
`

const DescriptionContainerStyle = styled.div`
  margin: 48px 0;
`

const DescriptionParagraphStyle = styled.div`
  color: #006eb6;
  font-size: 18px;
  margin: 20px 0;
  width: 600px;
  max-width: 90vw;
`

const ButtonStyle = styled.button`
  display: block;
  position: relative;
  margin: 40px 0px;
  width: 400px;
  max-width: 90vw;
  color: white;
  background: #006eb6;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  opacity: 1;
  padding: 16px 20px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
`

export default Form

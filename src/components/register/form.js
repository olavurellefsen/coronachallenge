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
      <label>
        First Name
        <input type="text" name="firstname" id="firstname" />
      </label>
      <label>
        Surname
        <input type="text" name="surname" id="surname" />
      </label>
      <label>
        Age
        <input type="text" name="age" id="age" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Country
        <input type="text" name="country" id="country" />
      </label>
      <label>
        Which themes are you interested in?
        <input type="text" name="themes" id="themes" />
      </label>
      <label>
        Skills and experiences
        <textarea name="message" id="message" rows="5" />
      </label>
      <p>The organizers are free to use the submitted videos for marketing purpose</p>
      <p>All personal data will be treated in accordance with the EU's General Data Protection Regulation (GDPR) (insert link to https://gdpr-info.eu/)</p>
      <p>CHECKBOX - I have read and understood</p>
      <button type="submit">Submit</button>
      <p>By submitting this form you agree to our Terms and Conditions.</p>
    </form>
  </FormContainer>
)

const FormContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 5vw;
`

// const LabelStyle = styled.label`
//   color: #006eb6;
//   font-size: 30px;
//   font-weight: 600;
//   text-transform: uppercase;
//   text-align: center;
// `

// const InputStyle = styled.input`
//   color: black;
//   font-size: 24px;
//   text-align: center;
//   margin-top: 48px;
// `

export default Form

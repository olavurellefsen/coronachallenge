const URL = process.env.GATSBY_X_EMAIL_URL

//function to make a post request to lambda function using the fetch API
const SendEmail = async (url = URL, data = {}) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: `POST`,
    'Content-Type': `application/json`,
    Accept: `application/json`,
    body: JSON.stringify(data),
  })
  return await response.json() // parses JSON response into native JavaScript objects
}

export default SendEmail

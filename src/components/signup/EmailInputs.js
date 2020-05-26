import React, { useState } from 'react';
import short from "short-uuid"
import SendEmail from '../utils/SendEmail';
import { emailHtml } from './emailHtml';

const EmailInputs = () => {
  const translator = short()
  const users = [{
    email: "robert.c.armitage@gmail.com", name: "Rob Armitage", id: `${translator.fromUUID("af989550-9eca-4457-8397-b20d25e13e4f")}`
  }, {
    email: "yati.yati@nord.no", name: "Yati Yati", id: `${translator.fromUUID("33f31d70-7083-4de1-a600-42ebe3628083")}`
  }, {
    email: "teigen_kaare@hotmail.com", name: "Kåre Johan Teigen", id: `${translator.fromUUID("af595155-2613-43d5-8079-9dec5ccea362")}`
  }, {
    email: "kristian.eli@zachariasen.fo", name: "Kristian Eli Zachariasen", id: `${translator.fromUUID("4d0f805d-9cae-4ae4-9b5b-9ccd6efe37cc")}`
  }, {
      email: "bryonybeck@btinternet.com", name: "Bryony Louisa Beck", id: `${translator.fromUUID("f7c2f8fe-4ce8-417b-8852-691aeede43cd")}`
  }, {
      email: "tovemca@gmail.com", name: "Tove McArthur", id: `${translator.fromUUID("70cbbcad-79c4-43f8-9b07-8884f25e7285")}`
  },
  {
    email: "madspoulsen2002@gmail.com", name: "Mads Poulsen", id: `${translator.fromUUID("e569ee21-16de-4a0a-97b5-01bc137fd2bc")}`
  }]
  const requestShortId = "4XsmuEnAtrJzJcc1P5gXHw"
  return (
    <div>
      <button onClick={() => {


        users.forEach(user => {
          const confirmationUrl = `https://proposalpot.tokni.com/confirm/${requestShortId}/${user.id}`
          console.log("confirmationUrl", confirmationUrl)

          console.log("url", confirmationUrl)
          // SendEmail(`${process.env.GATSBY_X_EMAIL_URL}`, {
          //   to: `${user.email}`,
          //   subject: `Corona Challenge confirmation link`,
          //   html: emailHtml(user.name, confirmationUrl),
          // })
        });
      }}>send email</button>
    </div>
  );
};

export default EmailInputs;

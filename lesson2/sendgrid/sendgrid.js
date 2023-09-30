const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const email = {
  to: "livoye5390@fandsend.com",
  from: "vladislavshsh@gmail.com",
  subject: "Verify email",
  text: "and easy to do anywhere, even with Node.js",
  html: `<p> Yours verify</p>`
};

const sendEmail = async (data) => {
  const email = { ...data, from: "vladislavshsh@gmail.com" };
  await sgMail.send(email);
  return true;
};

// sgMail
//   .send(email)
//   .then(() => console.log("success"))
//   .catch((error) => console.log(error.message));
module.exports = sendEmail;

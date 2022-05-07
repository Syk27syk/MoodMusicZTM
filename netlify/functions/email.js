// we are using SendGrid. We obtained the API key and put it in Netlify.
// we wrote code to collect email, and for an email to be sent when the user submit their order. we collected information about their email and their orders to use in the email.

// create the nodemailer package
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  //change this: changed
  const body = JSON.parse(event.body);
  const senderEmail = body.senderEmail;
  //change this: 
  const orders = body.orders;

  const total = 0;
  let emailcontent = "We have received a new order: \n\n";
  //change this:
  orders.forEach(order => {
    emailContent = emailContent +`${order.name} - ${order.quantity} pcs - ${order.price * order.quantity}\n`;
    total = total + (order.price * order.quantity);
  })
  emailContent = emailContent + `\n TotalAmount: ${total.toFixed(2)}`;
};
   //

// construct email object to send with node mailer
const email = {
  from: 'Shiyun.khoo@gmail.com',
  to: customerEmail,
  subject: "New Order Received",
  text: emailContent,
  };

 // construct a mailer. leave this unchanged. 
const mailer = nodemailercreateTransport ({
  host: 'smtp.sendgrid.net',
  port: 465,
  secure: true,
  auth: {
  user: 'apiKey',
  pass: process.env.sendgridApiKey
  }
});

//this should be unchanged too, but there is an error. 
try {
    await mailer.sendMail(email);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message:"Email sent successfully",
      }),
    };
  }
catch (error) {
    console.log('Error sending email', error);
}

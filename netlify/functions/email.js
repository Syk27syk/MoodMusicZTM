// we are using SendGrid. We obtained the API key and put it in Netlify.
// we wrote code to collect email, and for an email to be sent when the user submit their order. we collected information about their email and their orders to use in the email.

// create the nodemailer package
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  //change this: changed
  const body = JSON.parse(event.body);
  const senderEmail = body.senderEmail;
  //change this: changed
  const order = body.order;

  const total = 0;
  let emailcontent = `Dear + ${order.senderName} \n\n Thank you for shopping with us! \n\n Here is a summary of your order: \n\n`
  //change this: chnaged
  order.forEach(giftCard => {
    emailContent = emailContent 
    +`Gift Card ID: ${order.giftCard.giftCardID}; 
    Delivery method: ${order.giftCard.delivery}; 
    Design: ${order.giftCard.design};
    Amount: ${order.giftCard.giftCardAmount};
    Recipient name: ${order.giftCard.recipientName};
    Recipient email: ${order.giftCard.recipientEmail};
    Recipient address: ${order.giftCard.recipientAddress};
    Personalized message: ${order.giftCard.personalizedMessage}`
    total = total + (order.giftCard.giftCardAmount);
  })
  emailContent = emailContent + `\n TotalAmount: ${total.toFixed(2)}` + "You may track your order here: /link";
};
   //

// construct email object to send with node mailer
const email = {
  from: 'Shiyun.khoo@gmail.com',
  //
  to: senderEmail,
  //
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

// this should be unchanged too, but there is an error. 
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

const admin = require('firebase-admin');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = JSON.parse(process.env.firebaseCredential);

exports.handler = async function (event, context) {
  let app;
  if (admin.apps.length === 0) {
    app = initializeApp({
      credential: cert(serviceAccount),
    });
  }

  const db = getFirestore(app);

  // edit this: edited. not sure about ('order') after await db.collection
  try {
    const body = JSON.parse(event.body);
    const senderEmail = body.senderEmail;
    const order = body.order;

    const response = await db.collection('order').add({
      senderEmail,
      order,
    });
    //
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Document added successfully - ' + response.id,
      }),
    };
  } catch (error) {
    console.log('Error adding document', error);
  }
};

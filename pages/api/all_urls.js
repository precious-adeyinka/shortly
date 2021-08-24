// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const firebase = require('firebase/app')
const firestore = require('firebase/firestore')

// setup firebase
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.API_AUTH_DOMAIN,
  projectId: process.env.API_PROJECT_ID,
  storageBucket: process.env.API_STORAGE_BUCKET,
  messagingSenderId:process.env.API_MESSAGING_SENDER_ID,
  appId: process.env.API_APP_ID,
  measurementId: process.env.API_MEASUREMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// Initialize firestore database
const db = firebase.firestore();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        let urlsRef = db.collection('urls');
        let snapshot = await urlsRef.get();
        let foundUrls = [];

        if(snapshot.empty) {
          res.status(404).json([])
        }
        else {
          snapshot.forEach(doc => foundUrls.push(({id: doc.id, ...doc.data()})));
          res.status(200).json(foundUrls);
        }
      }
      catch(err) {
        console.error(err);
        res.status(500).json({message: "Server error"});
      }

      break
    default:
      res.setHeaders('Allow', ['GET']);
      res.status(405).end("method" + " " + method + " " + "not allowed!")
      break
  }
}
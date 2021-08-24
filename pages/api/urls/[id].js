// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

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
  // Run cors
  await cors(req, res)

  switch (req.method) {
    case 'GET':
      try {
        let urlsRef = db.collection('urls');
        let snapshot = await urlsRef.where('urlCode', '==', req.query.id).get();
        if (!snapshot.empty) {
          let foundUrl = [];
          snapshot.forEach(doc => foundUrl.push(({id: doc.id, ...doc.data()})));

          if (foundUrl.length > 0) {
            return res.redirect(foundUrl[0].longUrl);
          }
          else {
            return res.status(404).json('No url found');
          }
        }
      }
      catch(err) {
        console.error(err);
        res.status(500).json({message: "Server error"});
      }
      break
    case 'POST':
       res.json({id: req.query.id})
      break
    default:
      res.setHeaders('Allow', ['GET', 'POST']);
      res.status(405).end("method" + " " + method + " " + "not allowed!")
      break
  }
}
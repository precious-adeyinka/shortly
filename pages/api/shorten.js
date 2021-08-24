// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const firebase = require('firebase/app')
const firestore = require('firebase/firestore')
const validUrl = require('valid-url');
const shortId = require('shortid');

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
  const baseURL = "http://localhost:3000";

  if (req.method === "POST") {
    // logic goes here
    const {longUrl} = req.body;

    // check base url
    if (!validUrl.is_web_uri(baseURL)) {
      res.status(401).json({
        message: "Invalid base url"
      })
    }
    else {
      // create url code
      const urlCode = shortId.generate();

      // check long url
      if (validUrl.is_web_uri(longUrl)){
            try {
              // check if url exists in database
              const urlsRef = db.collection('urls');
              const snapshot = await urlsRef.where('longUrl','==', longUrl).get();

              // if the returned result is not empty, return the stored value
              if (!snapshot.empty) {
                // merge and destructure each document onject into an array with ids included
                let url = [];
                snapshot.forEach(doc => {
                  url.push(({id: doc.id, ...doc.data()}))
                });
                // Return the url(s)
                res.status(200).json(url[0]);
              }
              else {
                const shortUrl = baseURL + '/' + urlCode;
                
                // create new url object
                let newUrl = {
                  longUrl,
                  shortUrl,
                  urlCode,
                  date: new Date().toLocaleDateString()
                }

                // save the new url object to the database
                let result = await db.collection('urls').add(newUrl);
                // search the db for the newly created url by id
                let urlObject = await db.collection('urls').doc(result.id).get();
                // then return the url object
                res.status(200).json({id:result.id, ...urlObject.data()});
              }
            }
            catch(err) {
              console.error(err);
              res.status(500).json({message: "Server error"});
            }

      }
      else {
        res.status(401).json({message: "Invalid long url", longUrl})
      }
    }

  } else {
    // API info
    res.status(200).json({
      'version': 'v1',
      'message': 'Welcome to the shortly API. GET/POST api/shorten/<long_url> to get started'
    });
  }
};

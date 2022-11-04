const { initializeApp } = require('firebase/app');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZPdEFwF4kTSyvpDsQXijb9zuAkeZTf74',
  authDomain: 'deutsch-blog.firebaseapp.com',
  projectId: 'deutsch-blog',
  storageBucket: 'deutsch-blog.appspot.com',
  messagingSenderId: '716066380351',
  appId: '1:716066380351:web:2f54a766971c3d29f8768a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

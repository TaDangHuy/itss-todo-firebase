import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB54hn6OAfehMAuL0LYSh7nNXeaQituuWw",
  authDomain: "fir-sample-19770.firebaseapp.com",
  projectId: "fir-sample-19770",
  storageBucket: "fir-sample-19770.appspot.com",
  messagingSenderId: "983907104954",
  appId: "1:983907104954:web:0738a101b87268eb70ea83"
};

const app = firebase.initializeApp(firebaseConfig);
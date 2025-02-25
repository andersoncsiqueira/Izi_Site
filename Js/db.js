
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCrxlosMCoYIOLQf56lFu4Ac-MyXOaGZwk",
    authDomain: "estoque-izi.firebaseapp.com",
    projectId: "estoque-izi",
    storageBucket: "estoque-izi.firebasestorage.app",
    messagingSenderId: "173339853396",
    appId: "1:173339853396:web:6771bd1254584e78d323c1",
    measurementId: "G-EYCLDNJ31Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  console.log(app)

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"
  
  const firebaseConfig = {
    apiKey: "AIzaSyDMNXtG5FmaswVHYIq4Rn6gT1TZN_bg_ho",
    authDomain: "izi-db.firebaseapp.com",
    projectId: "izi-db",
    storageBucket: "izi-db.appspot.com",
    messagingSenderId: "671329066253",
    appId: "1:671329066253:web:8e55ec3a21d626ccaf6444",
    measurementId: "G-BT6ZJW0RE4"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
console.log(db)

































const tbody = document.querySelector('[data-js="tbody"]')
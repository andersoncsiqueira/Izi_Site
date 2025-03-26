import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



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
const db = getFirestore(app)

/*

getDocs(collection(db,'NOTEBOOKS'))
.then((querySnapshot)=>{
  querySnapshot.forEach(element => {
    console.log(element.data(),
  element)
    console.log(

  )

  console.log(element.data())
    
  });

})
.catch(console.log)
.catch(console.log)

*/

const colecao = 'NOTEBOOKS'
const id5490 = 'eRqlvo7jgZUK4mf3bsB9'
const idCard = document.getElementById("dynamicLinkImg")

async function getDocumento(colecao, idDocumento, img,a) {
  try {
    const docRef = doc(db, colecao, idDocumento);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      
      img.src = docSnap.data().path;
      console.log(img.src)
      
      a.innerText =  docSnap.data().MODELO
      a.href = `/pages/produto.html?id=${idDocumento}`

      
      return docSnap.data().path;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar documento:", error);
    return null;
  }
}



export {getDocumento, getDoc, db, doc}
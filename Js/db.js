import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, doc, where, query, orderBy   } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-functions.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { firebaseConfig } from "../config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const functions = getFunctions(app)

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
const id5420 = "BAphodbw9b633vBfWWtY" 
const idCard = document.getElementById("dynamicLinkImg")

async function getDocumento(colecao, idDocumento, img,a,urlBase) {
  try {
    const docRef = doc(db, colecao, idDocumento);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      


      img.src = urlBase + `\\${docSnap.data().MODELO}\\01.jpg`

      
      a.innerText =  `Notebook ${docSnap.data().MODELO}`
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



export {getDocumento, getDoc, db, doc, collection, getDocs, app, functions, where, query, orderBy}
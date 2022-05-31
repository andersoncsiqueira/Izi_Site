
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"
  

  const tbody = document.querySelector('[data-js="tbody"]')

  const firebaseConfig = {
    apiKey: "AIzaSyDMNXtG5FmaswVHYIq4Rn6gT1TZN_bg_ho",
    authDomain: "izi-db.firebaseapp.com",
    projectId: "izi-db",
    storageBucket: "izi-db.appspot.com",
    messagingSenderId: "671329066253",
    appId: "1:671329066253:web:8e55ec3a21d626ccaf6444",
    measurementId: "G-BT6ZJW0RE4"
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  getDocs(collection(db,"Produtos"))
        .then(querySnapshot=>{
        
    const templateForTable = querySnapshot.docs.reduce((acc,doc) => {
      const {name,datebuy,Custo,descricao} = doc.data()
             acc += `<td>${name}</td>
                    <td>${descricao}</td>
                    <td>${datebuy.toDate()}</td>
                    <td></td>
                    <td> R$ ${Custo}</td>
                    <td><i><img src="engrenagem.png" alt=""></i></td>
                    <td><i><img src="lixeira.png" alt=""></i></td>`
    
             return acc
           },'')

           const tr = document.createElement('tr')
           tr.innerHTML = templateForTable
           tbody.append(tr)


        })
        .catch(console.log)



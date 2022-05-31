  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
  import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"
  

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
  const collectionprodutos = collection(db,"Produtos")

  const formAddGame = document.querySelector('[data-js="form"]')

  getDocs(collectionprodutos)
        .then(querySnapshot=>{    
          let template = ""
    const templateForTable = querySnapshot.docs.map((doc) => {
      const {name,datebuy,custo,descricao, datearrive} = doc.data()
             template += `<tr>
                    <td>${name}</td>
                    <td>${descricao}</td>
                    <td>${datebuy}</td>
                    <td>${datearrive}</td>
                    <td> R$ ${custo}</td>
                    <td>
                    <i><img src="engrenagem.png" alt=""></i>
                    <img src="lixeira.png" alt=""></i>
                    </td>
                    </tr>
                    `
            
           })
           tbody.innerHTML = template
        })
        .catch(console.log)

formAddGame.addEventListener('submit', e => {
e.preventDefault()


addDoc(collectionprodutos,{
  name:e.target.item.value,
  datebuy:e.target.dt_compra.value,
  descricao:e.target.descricao.value,
  datearrive:e.target.dt_chegada.value,
  custo:e.target.custo.value
})
.then(doc => console.log(doc.id))
.catch(console.log)

}) 

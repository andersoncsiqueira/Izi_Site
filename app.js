  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
  import { getFirestore, collection, addDoc, doc, deleteDoc, updateDoc,onSnapshot } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"
  

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
  const buttonEdit = document.querySelector('[data-js="edit"]')

onSnapshot(collectionprodutos,querySnapshot => {
  let template = ""
  const templateForTable = querySnapshot.docs.map((doc) => {
    const {name,datebuy,custo,descricao, datearrive} = doc.data()
           template += `<tr data-tr="${doc.id}">
                  <td>${name}</td>
                  <td>${descricao}</td>
                  <td>${datebuy}</td>
                  <td>${datearrive}</td>
                  <td>${custo}</td>
                  <td>
                  <i><img src="engrenagem.png" data-edit="${doc.id}" alt=""></i>
                  <i "><img  src="lixeira.png" data-delete="${doc.id}" alt=""></i>
                  </td>
                  </tr>
                  `
          
         })
         tbody.innerHTML = template
      
})

formAddGame.addEventListener('submit', e => {
e.preventDefault()


addDoc(collectionprodutos,{
  name:e.target.item.value,
  datebuy:e.target.dt_compra.value,
  descricao:e.target.descricao.value,
  datearrive:e.target.dt_chegada.value,
  custo:e.target.custo.value
})
.then()
.catch(console.log)

}) 

tbody.addEventListener('click', e => {
  const idDeleteClicked = e.target.dataset.delete
  const idEditClicked = e.target.dataset.edit
 
  if(idDeleteClicked){
    
    deleteDoc(doc(db, "Produtos",idDeleteClicked))
    .then(() => console.log('Removido'))
    .catch(console.log)
  }
  if(idEditClicked) {
    const bodyForm = document.querySelector('form')
    bodyForm.style.background = 'orange'
    const trEdited = document.querySelector(`[data-tr="${idEditClicked}"]`)
    
    bodyForm.children[1].value = trEdited.children[0].textContent
    bodyForm.children[3].value = trEdited.children[1].textContent
    bodyForm.children[6].value = trEdited.children[2].textContent
    bodyForm.children[8].value = trEdited.children[3].textContent
    bodyForm.children[11].value = trEdited.children[4].textContent
    bodyForm.children[13].value = idEditClicked

   
  }

})



buttonEdit.addEventListener('click', e => {
  e.preventDefault()
  const bodyForm = document.querySelector('form')

  updateDoc(doc(db,'Produtos',bodyForm.children[13].value),{
    name: bodyForm.children[1].value,
    datebuy: bodyForm.children[6].value,
    descricao: bodyForm.children[3].value,
    datearrive: bodyForm.children[8].value,
    custo: bodyForm.children[11].value
  })
  .then(doc => console.log(doc))
  .catch(console.log)


})
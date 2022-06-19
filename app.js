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

  const formHandlePRoduct = document.querySelector('[data-js="form"]')
  const buttonEdit = document.querySelector('[data-js="edit"]')
  const sum = document.querySelector('[data-js="sum"]')
  const infoBody = document.querySelector('[data-js="info-body"]')

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
      
         const amount = querySnapshot.docs.reduce((acc,doc)=> {
              acc += Number(doc.data().custo)
             // console.log(doc.data().custo)
              return acc
         },0)

         sum.innerText = " "+amount.toFixed(2)

         const dataForInfo = querySnapshot.docs.reduce((acc,doc)=>{
           const obj = {
             ...acc,
             [doc.data().name]: (acc[doc.data().name] || 0) + 1
            
           }
           return obj
         },{})
         
         let priceUnit = (nameOfItem) => {
           const result = querySnapshot.docs
           .filter(item => item.data().name === nameOfItem)
           .reduce((acc,item)=>{
             acc += Number(item.data().custo)
             console.log(Number(item.data().custo))
             return acc
           },0)
           return result
         }

         console.log(priceUnit('Calculadora'))

         let renderInfo = () => {
           let template = ""
          Object.keys(dataForInfo).map((item) => {
           template += `<tr><td>${item}</td><td>${dataForInfo[item]}</td><td>R$ ${(priceUnit(item)/dataForInfo[item]).toFixed(2)}</td</tr>`
          })
        return template
        }
        
        infoBody.innerHTML = renderInfo()
})

formHandlePRoduct.addEventListener('submit', e => {
e.preventDefault()

addDoc(collectionprodutos,{
  name:DOMPurify.sanitize(e.target.item.value),
  datebuy:DOMPurify.sanitize(e.target.dt_compra.value),
  descricao:DOMPurify.sanitize(e.target.descricao.value),
  datearrive:DOMPurify.sanitize(e.target.dt_chegada.value),
  custo:DOMPurify.sanitize(e.target.custo.value)
})
.then(doc => {
   console.log("")
   formHandlePRoduct.reset()
})
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
  .then(doc => {
    console.log(doc)
    })
  .catch(console.log)
  formHandlePRoduct.reset()
})

import { getDoc, db, doc } from "./Js/db.js";

const carrosselOferta = document.querySelector(".carrosselOfert")
const info = document.querySelector(".infoOfertas")

async function inserImgOfert (id,url) {
const notebook = await getDoc(doc(db,'NOTEBOOKS',id))

//notebook.data().forEach(n => console.log(n))
const preco = notebook.data().CUSTO
const modelo = notebook.data().MODELO
const ssd = notebook.data().SSD 
const ram = notebook.data().RAM   
const bateria = notebook.data().BATERIA 
const condicao = notebook.data().CONDICAO

const precoLi =document.createElement("li")
const modeloLi =document.createElement("li")
const ssdLi =document.createElement("li") 
const ramLi =document.createElement("li")   
const bateriaLi =document.createElement("li")
const condicaoLi =document.createElement("li")

precoLi.innerText = `Preço: R$ ${preco}`
modeloLi.innerText = `Modelo: R$ ${modelo}`
ssdLi.innerText = `SSD: ${ssd}`
ramLi.innerText = `Ram: ${ram}`
bateriaLi.innerText = `Bateria: ${bateria}`
condicaoLi.innerText = `Condicao da máquina: ${condicao}`


info.appendChild(precoLi)
info.appendChild(modeloLi)
info.appendChild(ssdLi)
info.appendChild(ramLi)
info.appendChild(bateriaLi)
info.appendChild(condicaoLi)

Array.from(carrosselOferta.children).forEach((img,index) => {

  img.setAttribute('src',url + `${notebook.data().MODELO}` + "\\" + `0${index+1}` + ".jpg")

})

}

inserImgOfert("UtpzRNIRw1z3KBM7z2Mn","imagens\\modelos\\")

AOS.init({ delay: 1000, // values from 0 to 3000, with step 50ms
    duration: 1400, 

})

// script.js
let currentIndex = 0;
const photos = document.querySelectorAll('.photo');

function showPhoto(index) {
  // Remove a classe 'active' de todas as fotos
  photos.forEach(photo => photo.classList.remove('active'));
  // Adiciona a classe 'active' para a foto atual
  photos[index].classList.add('active');
}

const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length; // Avança para a próxima foto
  console.log("next")
  showPhoto(currentIndex);
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length; // Volta para a foto anterior
  showPhoto(currentIndex);
}


next.addEventListener("click", nextPhoto)
prev.addEventListener("click", prevPhoto)

// Inicializa a galeria mostrando a primeira foto
showPhoto(currentIndex);
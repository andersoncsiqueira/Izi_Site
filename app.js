
import { getDoc, db, doc } from "./Js/db.js";

const carrosselOferta = document.querySelector(".carrosselOfert")
const info = document.querySelector(".infoOfertas")
const linkOferta = document.querySelector("#linkOferta")

function formatarParaReais(valor) {
  return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });
}

async function inserImgOfert (id,url) {
const notebook = await getDoc(doc(db,'NOTEBOOKS',id))


const preco = notebook.data().VENDA
const modelo = notebook.data().MODELO
const ssd = notebook.data().SSD 
const ram = notebook.data().RAM   
const bateria = notebook.data().BATERIA 
const condicao = notebook.data().CONDICAO
const marca = notebook.data().MARCA
const tela = notebook.data().TELA
const processador = notebook.data().PROCESSADOR

const precoLi =document.createElement("li")
const modeloLi =document.createElement("li")
const ssdLi =document.createElement("li") 
const ramLi =document.createElement("li")   
const marcaLi =document.createElement("li")
const telaLi = document.createElement("li")
const processadorLi = document.createElement("li")

 precoLi.classList.add("descricao")
 modeloLi.classList.add("descricao")
 ssdLi.classList.add("descricao")
 ramLi.classList.add("descricao")  
 marcaLi.classList.add("descricao")
 telaLi.classList.add("descricao")
 processadorLi.classList.add("descricao")

modeloLi.innerText = `Modelo:  ${modelo}.`
precoLi.innerText = `Preço: ${formatarParaReais(preco)}`
ssdLi.innerText = `SSD: ${ssd}.`
ramLi.innerText = `Ram: ${ram}.`
marcaLi.innerText = `Marca: ${marca}.`
telaLi.innerText = `Tamanho da tela: ${tela}`
processadorLi.innerText = `Proceesador: ${processador}`
linkOferta.setAttribute("href", `/pages/produto.html?id=${id}`)

info.appendChild(modeloLi)
info.appendChild(processadorLi)
info.appendChild(precoLi)
info.appendChild(ssdLi)
info.appendChild(ramLi)
info.appendChild(marcaLi)  
info.appendChild(telaLi)


Array.from(carrosselOferta.children).forEach((img,index) => {
  if(img.tagName === "A") {
    console.log('é link')
    
  } else {

    img.setAttribute('src',url + `${notebook.data().MODELO}` + "\\" + `0${index+1}` + ".jpg")
   
  }


})

}

inserImgOfert("NIHINhOlj5mYHUvL1CCn","imagens\\modelos\\")

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



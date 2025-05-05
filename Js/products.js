import { getDocumento, getDoc, db, doc, collection, getDocs } from "/Js/db.js";





const allProducts = document.querySelectorAll(".products")
const infos = document.querySelector(".infosP")

const carrossel = document.querySelector(".carroseelPropduct")
const othersProducts = document.querySelector(".containOthersProdutos")

function formatarParaReais(valor) {
    valor = Number(valor)
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
  }

allProducts.forEach(async (card, index) =>  {

const querySnapshot = await getDocs(collection(db, "NOTEBOOKS"));   
const idAll = querySnapshot.docs.map((doc) => doc.id)
      
const img = document.createElement("img")
const a = document.createElement("a")
getDocumento('NOTEBOOKS',idAll[index],img,a,"imagens\\modelos")
card.appendChild(img)
a.href = `/pages/produto.html?id=${idAll[index]}`
card.appendChild(a)

})

const insertImg =  async function(urlBase) {

    const querySnapshot = await getDocs(collection(db, "NOTEBOOKS"));
    
    const idAll = querySnapshot.docs.map((doc) => doc.id)
      
    
    idAll.forEach( async (id) => {
        let mineCard = document.createElement("div")
       mineCard.classList.add("mineProducts") 
       
        const notebook = await getDoc(doc(db,'NOTEBOOKS',id))
        const img = document.createElement("img")
        const a = document.createElement("a")
    
        let url = urlBase + `\\${notebook.data().MODELO}\\01.jpg`
        
        mineCard.appendChild(img)
        img.src =  url
        a.textContent = `${notebook.data().MODELO}`
    a.href = `/pages/produto.html?id=${id}`
    mineCard.appendChild(a)
    othersProducts.appendChild(mineCard)
    
    })

}

insertImg("\\imagens\\modelos")

 const queryString = window.location.search; 
 const urlParams = new URLSearchParams(queryString)
 const id = urlParams.get("id")
 async function inserImg (id,urlBase) {

const notebook = await getDoc(doc(db,'NOTEBOOKS',id))

let url = urlBase

Array.from(carrossel.children).forEach( (img) => {
    
    const foto = img.querySelector("img")
    console.log(foto)
    
    foto.setAttribute('src',url + `\\${notebook.data().MODELO}` + "\\" + `0${indexFotos}` + ".jpg")
    img.setAttribute('href',url + `\\${notebook.data().MODELO}` + "\\" + `0${indexFotos}` + ".jpg")
})

 }
 
const numFotos = carrossel.children
let indexFotos = 1

const prevFotoButton = document.querySelector(".prevFoto")
const proxFotoButton = document.querySelector(".proxFoto")

const  prevfoto = e => {

indexFotos = indexFotos - 1

if(indexFotos <= 0 ) {
    indexFotos = Number(numFotos.length)
}
console.log(indexFotos)

}

const  proxfoto = e => {

    indexFotos = indexFotos + 1
    
    if( indexFotos > 5 ) {
        indexFotos = 1
    }
   
    console.log(indexFotos)
    
    }

prevFotoButton.addEventListener("click", e => {

e.preventDefault()
prevfoto()
inserImg(id,"\\imagens\\modelos")

})

proxFotoButton.addEventListener("click", e => {

    e.preventDefault()
    proxfoto()
    inserImg(id,"\\imagens\\modelos")
    
    })

 async function postInfosInProducts  (id)  {


const notebook = await getDoc(doc(db,'NOTEBOOKS',id))

const h3 = document.createElement('h3')

const lista = document.createElement("ul")

const span = document.createElement('span')
const span1 = document.createElement('span')
const span2 = document.createElement('span')
const span3 = document.createElement('span')
const span4 = document.createElement('span')
const span5 = document.createElement('span')

const valor = document.createElement('span')
const processador = document.createElement('span')
const memoria = document.createElement('span')
const ssd  = document.createElement('span')
const bateria = document.createElement('span')
const condicao = document.createElement('span')

h3.innerText = notebook.data().MODELO
//titulo.innerText = notebook.data().MODELO
valor.innerText = formatarParaReais(notebook.data().VENDA)
processador.innerText = notebook.data().PROCESSADOR
memoria.innerText = notebook.data().RAM
ssd.innerText = notebook.data().SSD
bateria.innerText = notebook.data().BATERIA
condicao.innerText = notebook.data().CONDICAO

span.innerText = "Valor: "
span1.innerText = "Processador: "
span2.innerText = "Memória Ram: "
span3.innerText = "SSD: "
span4.innerText = "Saúde da batéria: "
span5.innerText = "Condição: "

const li = document.createElement("li")
const li1= document.createElement('li')
const li2 = document.createElement('li')
const li3  = document.createElement('li')
const li4 = document.createElement('li')
const li5 = document.createElement('li')

li.appendChild(span)
li.appendChild(valor)


li1.appendChild(span1)
li1.appendChild(processador)


li2.appendChild(span2)
li2.appendChild(memoria)


li3.appendChild(span3)
li3.appendChild(ssd)

li4.appendChild(span4)
li4.appendChild(bateria)

li5.appendChild(span5)
li5.appendChild(condicao)

lista.appendChild(li)
lista.appendChild(li1)
lista.appendChild(li2)
lista.appendChild(li3)
lista.appendChild(li4)
lista.appendChild(li5)


const buttonWhats = document.createElement("button")
buttonWhats.setAttribute("id","whatsappBtn")

infos.append(h3)
infos.append(lista)

if(notebook.data().ESTOQUE) {
    const li6 = document.createElement("li")
    li6.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
    li5.append(li6)
} else {
    const li6 = document.createElement("li")
    li6.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para encomenda.`
    lista.append(li6)
}

}

 inserImg(id,"\\imagens\\modelos")
 postInfosInProducts(id)

 Fancybox.bind("[data-fancybox]", {
    closeButton: true,      // Mostra o botão de fechar (padrão: true)
    clickOutside: "close",  // Fecha ao clicar fora (padrão: "close")
    Keyboard: true,         // Permite fechar com ESC (padrão: true)
  });




const buttonWhats =  document.getElementById('whatsappBtn')

 buttonWhats.addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    
    const numero = '5587981426519'; // Substitua pelo seu número
    const urlAtual = window.location.href; // Pega a URL atual automaticamente
    const texto = `Olá! Acessei seu site e quero comprar esse notebook. (URL: ${urlAtual}`;
    console.log('oi')
    // Codifica o texto para URL e abre o WhatsApp
    const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(linkWhatsApp, '_blank');
  });


  
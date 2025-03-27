import { getDocumento, getDoc, db, doc } from "/Js/db.js";




const allProducts = document.querySelectorAll(".products")
const infos = document.querySelector(".infosP")
let titulo = document.querySelector(".titulo")

let ids = [
"2SmCjPTsuofSSm0P5I0W",
"UtpzRNIRw1z3KBM7z2Mn",
"WfOmuLrpdPvzkCPmEcHv",
"Y1qrFLdHypBlertDbqD6",
"eRqlvo7jgZUK4mf3bsB9",
"gxj6oPoZQQ51iNe35SZE",
"hJoOzj6Wi0gmsFDY32WY",
"r50kPJsYiiERF8n5s4ob"
]





allProducts.forEach((card, index) => {

const img = document.createElement("img")

const a = document.createElement("a")
getDocumento('NOTEBOOKS',ids[index],img,a)
card.appendChild(img)

a.href = `/pages/produto.html?id=${ids[index]}`
card.appendChild(a)






 
})


 const queryString = window.location.search; 



 const urlParams = new URLSearchParams(queryString)

 const id = urlParams.get("id")

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
titulo.innerText = notebook.data().MODELO

span.innerText = "Valor:"
span1.innerText = "Processador:"
span2.innerText = "Memória Ram:"
span3.innerText = "SSD:"
span4.innerText = "Saúde da batéria:"
span5.innerText = "Condição:"

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
li5.appendChild(bateria)

lista.appendChild(li)
lista.appendChild(li1)
lista.appendChild(li2)
lista.appendChild(li3)
lista.appendChild(li4)
lista.appendChild(li5)

infos.append(h3)
infos.append(lista)

}

 postInfosInProducts(id)
import {  getDocs, db, doc, collection } from "/Js/db.js";

const containsAllNotebooks = document.querySelector(".containAllNotebooks")
const filtro = document.querySelector(".filtro-select")




filtro.addEventListener("change", e => {
    console.log(e.target.value)
})

async function getAllNotebooks(url) {

 const notebooks = await getDocs(collection( db, "NOTEBOOKS"))

notebooks.forEach(element => {

    const card = document.createElement("div")
    const img = document.createElement("img")
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    const a = document.createElement("a")
    const id = element.id
    const spanValor = document.createElement("span")
    const spanMarca = document.createElement("span")

    li.innerText = `Modelo: ${element.data().MODELO}`
    a.setAttribute("href",`/pages/produto.html?id=${id}`)

    img.setAttribute("src",`${url}`+`\\${element.data().MODELO}\\01.jpg`)
    spanValor.innerText = `Modelo: ${element.data().VENDA}`
    spanMarca.innerText = `Modelo: ${element.data().MARCA}`

    card.classList.add("cardNote")
    containsAllNotebooks.appendChild(card)
    card.append(ul)
    ul.append(li)
    card.append(img)
    card.append(spanValor)
    card.append(spanMarca)
    card.append(a)
    a.innerText = "Clique aqui para mais detalhes"

    if(element.data().ESTOQUE) {
        const span = document.createElement("span")
        span.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
        card.append(span)
    } else {
        const span = document.createElement("span")
        span.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para Encomenda.`
        card.append(span)
    }
    
    
     
});
}



getAllNotebooks("\\imagens\\modelos")



import {  getDocs, db, doc, collection } from "/Js/db.js";

const containsAllNotebooks = document.querySelector(".containAllNotebooks")

async function getAllNotebooks(url) {

 const notebooks = await getDocs(collection( db, "NOTEBOOKS"))

notebooks.forEach(element => {

    const card = document.createElement("div")
    const img = document.createElement("img")
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    const a = document.createElement("a")
    const id = element.id

    li.innerText = `Modelo: ${element.data().MODELO}`
    a.setAttribute("href",`/pages/produto.html?id=${id}`)

    img.setAttribute("src",`${url}`+`\\${element.data().MODELO}\\01.jpg`)

    card.classList.add("cardNote")
    containsAllNotebooks.appendChild(card)
    card.append(ul)
    ul.append(li)
    card.append(img)
    card.append(a)
    a.innerText = "Clique aqui para mais detalhes"

    if(element.data().ESTOQUE) {
        const span = document.createElement("span")
        span.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i>`
        card.append(span)
    } else {
        const span = document.createElement("span")
        span.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i>`
        card.append(span)
    }
    
    
     
});
}


getAllNotebooks("\\imagens\\modelos")

import {  getDocs, db, doc, collection } from "/Js/db.js";

const containsAllNotebooks = document.querySelector(".containAllNotebooks")

async function getAllNotebooks(url) {

 const notebooks = await getDocs(collection( db, "NOTEBOOKS"))

notebooks.forEach(element => {

    const card = document.createElement("div")
    const img = document.createElement("img")
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    li.innerText = `Modelo: ${element.data().MODELO}`
    card.classList.add("cardNote")

    containsAllNotebooks.appendChild(card)
    card.append(ul)
    ul.append(li)
    
     
});
}

getAllNotebooks()

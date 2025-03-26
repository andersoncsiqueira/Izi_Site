import { getDocumento, getDoc, db, doc } from "/Js/db.js";




const allProducts = document.querySelectorAll(".products")

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

console.log(notebook.data())

 }

 postInfosInProducts(id)
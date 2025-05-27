
import {  getDocs, db, getDoc, doc, collection, orderBy, query } from "/Js/db.js";
import { firebaseConfig } from "../config.js";

const containsAllNotebooks = document.querySelector(".containAllNotebooks")
const filtro = document.querySelector(".filtro-select")


function formatarParaReais(valor) {
    valor = Number(valor)
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
  }



filtro.addEventListener("change", e => {
    
    const selecao = e.target.value
    let forRend = []
    let priceAll = []
async function ordem () {
        
        const allDocs = await getDocs(collection(db, "NOTEBOOKS"))
        
        const idsDocs = allDocs.docs.map((doc) => doc.id)

    

    switch (selecao) {
        case "dell":

            containsAllNotebooks.innerHTML = ""
            forRend = []
        
            for (const item of idsDocs) {
                     const ref = doc(db, "NOTEBOOKS", `${item}`);
                     
                     const result = await getDoc(ref)
                     
                    if(result.data().MARCA === "Dell"){
                            forRend.push({ id: result.id })
                    }
                     
            }

            for(const notebok of forRend ) {

                        const ref = doc(db, "NOTEBOOKS", `${notebok.id}`)
                        const renderizado = await getDoc(ref)
                        console.log(renderizado.data())

                


                const card = document.createElement("div")
                    const img = document.createElement("img")
                    const ul = document.createElement("ul")
                    const li = document.createElement("li")
                    const a = document.createElement("a")
                    const id = renderizado.id
                    const spanValor = document.createElement("span")
                    const spanMarca = document.createElement("span")

                    li.innerText = `Modelo: ${renderizado.data().MODELO}`
                    a.setAttribute("href",`/pages/produto.html?id=${id}`)

                    img.setAttribute("src",`\\imagens\\modelos`+`\\${renderizado.data().MODELO}\\01.jpg`)
                    spanValor.innerText = `Preço: ${formatarParaReais(renderizado.data().VENDA)}`
                    spanMarca.innerText = `Marca: ${renderizado.data().MARCA}`

                    card.classList.add("cardNote")
                    containsAllNotebooks.appendChild(card)
                    card.append(ul)
                    ul.append(li)
                    card.append(img)
                    card.append(spanValor)
                    card.append(spanMarca)
                    card.append(a)
                    a.innerText = "Clique aqui para mais detalhes"

                    if(renderizado.data().ESTOQUE) {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
                        card.append(span)
                    } else {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para Encomenda.`
                        card.append(span)
                    }


            }
        
            break;
        case "hp":
                  containsAllNotebooks.innerHTML = ""

              forRend = []
        
            for (const item of idsDocs) {
                     const ref = doc(db, "NOTEBOOKS", `${item}`);
                     
                     const result = await getDoc(ref)
                     
                    if(result.data().MARCA === "HP"){
                            forRend.push({ id: result.id })
                    }
                     
            }

            for(const notebok of forRend ) {

                        const ref = doc(db, "NOTEBOOKS", `${notebok.id}`)
                        const renderizado = await getDoc(ref)
                        console.log(renderizado.data())

                


                const card = document.createElement("div")
                    const img = document.createElement("img")
                    const ul = document.createElement("ul")
                    const li = document.createElement("li")
                    const a = document.createElement("a")
                    const id = renderizado.id
                    const spanValor = document.createElement("span")
                    const spanMarca = document.createElement("span")

                    li.innerText = `Modelo: ${renderizado.data().MODELO}`
                    a.setAttribute("href",`/pages/produto.html?id=${id}`)
                    

                    img.setAttribute("src",`\\imagens\\modelos`+`\\${renderizado.data().MODELO}\\01.jpg`)
                    spanValor.innerText = `Preço: ${formatarParaReais(renderizado.data().VENDA)}`
                    spanMarca.innerText = `Marca: ${renderizado.data().MARCA}`

                    card.classList.add("cardNote")
                    containsAllNotebooks.appendChild(card)
                    card.append(ul)
                    ul.append(li)
                    card.append(img)
                    card.append(spanValor)
                    card.append(spanMarca)
                    card.append(a)
                    a.innerText = "Clique aqui para mais detalhes"
                    if(renderizado.data().ESTOQUE) {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
                        card.append(span)
                    } else {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para Encomenda.`
                        card.append(span)
                    }


            }

        break;

        case "samsung":

            containsAllNotebooks.innerHTML = ""
            forRend = []
        
            for (const item of idsDocs) {
                     const ref = doc(db, "NOTEBOOKS", `${item}`);
                     
                     const result = await getDoc(ref)
                     
                    if(result.data().MARCA === "Samsung"){
                            forRend.push({ id: result.id })
                    }
                     
            }

            for(const notebok of forRend ) {

                        const ref = doc(db, "NOTEBOOKS", `${notebok.id}`)
                        const renderizado = await getDoc(ref)
                        console.log(renderizado.data())

                


                const card = document.createElement("div")
                    const img = document.createElement("img")
                    const ul = document.createElement("ul")
                    const li = document.createElement("li")
                    const a = document.createElement("a")
                    const id = renderizado.id
                    const spanValor = document.createElement("span")
                    const spanMarca = document.createElement("span")

                    li.innerText = `Modelo: ${renderizado.data().MODELO}`
                    a.setAttribute("href",`/pages/produto.html?id=${id}`)

                    img.setAttribute("src",`\\imagens\\modelos`+`\\${renderizado.data().MODELO}\\01.jpg`)
                    spanValor.innerText = `Preço: ${formatarParaReais(renderizado.data().VENDA)}`
                    spanMarca.innerText = `Marca: ${renderizado.data().MARCA}`

                    card.classList.add("cardNote")
                    containsAllNotebooks.appendChild(card)
                    card.append(ul)
                    ul.append(li)
                    card.append(img)
                    card.append(spanValor)
                    card.append(spanMarca)
                    card.append(a)
                    a.innerText = "Clique aqui para mais detalhes"

                    if(renderizado.data().ESTOQUE) {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
                        card.append(span)
                    } else {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para Encomenda.`
                        card.append(span)
                    }


            }
        
            break;

             case "lenovo":

            containsAllNotebooks.innerHTML = ""
            forRend = []
        
            for (const item of idsDocs) {
                     const ref = doc(db, "NOTEBOOKS", `${item}`);
                     
                     const result = await getDoc(ref)
                     
                    if(result.data().MARCA === "Lenovo"){
                            forRend.push({ id: result.id })
                    }
                     
            }

            for(const notebok of forRend ) {

                        const ref = doc(db, "NOTEBOOKS", `${notebok.id}`)
                        const renderizado = await getDoc(ref)
                        console.log(renderizado.data())

                


                const card = document.createElement("div")
                    const img = document.createElement("img")
                    const ul = document.createElement("ul")
                    const li = document.createElement("li")
                    const a = document.createElement("a")
                    const id = renderizado.id
                    const spanValor = document.createElement("span")
                    const spanMarca = document.createElement("span")

                    li.innerText = `Modelo: ${renderizado.data().MODELO}`
                    a.setAttribute("href",`/pages/produto.html?id=${id}`)

                    img.setAttribute("src",`\\imagens\\modelos`+`\\${renderizado.data().MODELO}\\01.jpg`)
                    spanValor.innerText = `Preço: ${formatarParaReais(renderizado.data().VENDA)}`
                    spanMarca.innerText = `Marca: ${renderizado.data().MARCA}`

                    card.classList.add("cardNote")
                    containsAllNotebooks.appendChild(card)
                    card.append(ul)
                    ul.append(li)
                    card.append(img)
                    card.append(spanValor)
                    card.append(spanMarca)
                    card.append(a)
                    a.innerText = "Clique aqui para mais detalhes"

                    if(renderizado.data().ESTOQUE) {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
                        card.append(span)
                    } else {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para Encomenda.`
                        card.append(span)
                    }


            }
        
            break;


         case "menorP":

            containsAllNotebooks.innerHTML = ""
            forRend = []
        
            for (const item of idsDocs) {
                     const ref = doc(db, "NOTEBOOKS", `${item}`);
                     
                     const result = await getDoc(ref)

                     priceAll.push({"key":item,"Price":result.data().VENDA})
                     
            }

             priceAll = priceAll.sort((a,b) => Number(a.Price) - Number(b.Price))


            for(const obj of priceAll){

                forRend.push(obj.key)

            }
           
        
            for(const notebok of forRend ) {

                        const ref = doc(db, "NOTEBOOKS", `${notebok}`)
                        const renderizado = await getDoc(ref)
                        console.log(renderizado.data())


                const card = document.createElement("div")
                    const img = document.createElement("img")
                    const ul = document.createElement("ul")
                    const li = document.createElement("li")
                    const a = document.createElement("a")
                    const id = renderizado.id
                    const spanValor = document.createElement("span")
                    const spanMarca = document.createElement("span")

                    li.innerText = `Modelo: ${renderizado.data().MODELO}`
                    a.setAttribute("href",`/pages/produto.html?id=${id}`)

                    img.setAttribute("src",`\\imagens\\modelos`+`\\${renderizado.data().MODELO}\\01.jpg`)
                    spanValor.innerText = `Preço: ${formatarParaReais(renderizado.data().VENDA)}`
                    spanMarca.innerText = `Marca: ${renderizado.data().MARCA}`

                    card.classList.add("cardNote")
                    containsAllNotebooks.appendChild(card)
                    card.append(ul)
                    ul.append(li)
                    card.append(img)
                    card.append(spanValor)
                    card.append(spanMarca)
                    card.append(a)
                    a.innerText = "Clique aqui para mais detalhes"

                    if(renderizado.data().ESTOQUE) {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
                        card.append(span)
                    } else {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para Encomenda.`
                        card.append(span)
                    }


            }
        
            break;

             case "maiorP":

            containsAllNotebooks.innerHTML = ""
            forRend = []
        
            for (const item of idsDocs) {
                     const ref = doc(db, "NOTEBOOKS", `${item}`);
                     
                     const result = await getDoc(ref)

                     priceAll.push({"key":item,"Price":result.data().VENDA})
                     
            }

             priceAll = priceAll.sort((a,b) => Number(b.Price) - Number(a.Price))


            for(const obj of priceAll){

                forRend.push(obj.key)

            }
           
        
            for(const notebok of forRend ) {

                        const ref = doc(db, "NOTEBOOKS", `${notebok}`)
                        const renderizado = await getDoc(ref)
                        console.log(renderizado.data())


                const card = document.createElement("div")
                    const img = document.createElement("img")
                    const ul = document.createElement("ul")
                    const li = document.createElement("li")
                    const a = document.createElement("a")
                    const id = renderizado.id
                    const spanValor = document.createElement("span")
                    const spanMarca = document.createElement("span")

                    li.innerText = `Modelo: ${renderizado.data().MODELO}`
                    a.setAttribute("href",`/pages/produto.html?id=${id}`)

                    img.setAttribute("src",`\\imagens\\modelos`+`\\${renderizado.data().MODELO}\\01.jpg`)
                    spanValor.innerText = `Preço: ${formatarParaReais(renderizado.data().VENDA)}`
                    spanMarca.innerText = `Marca: ${renderizado.data().MARCA}`

                    card.classList.add("cardNote")
                    containsAllNotebooks.appendChild(card)
                    card.append(ul)
                    ul.append(li)
                    card.append(img)
                    card.append(spanValor)
                    card.append(spanMarca)
                    card.append(a)
                    a.innerText = "Clique aqui para mais detalhes"

                    if(renderizado.data().ESTOQUE) {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
                        card.append(span)
                    } else {
                        const span = document.createElement("span")
                        span.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para Encomenda.`
                        card.append(span)
                    }


            }
        
            break;
            
    
        default:
            break;
    }

//const documentos = [];
//querySnapshot.forEach((doc) => {
//  documentos.push({ id: doc.id, ...doc.data() });
//});

//console.log(documentos,'???')
}

ordem()


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
    spanValor.innerText = `Preço: ${formatarParaReais(element.data().VENDA)}`
    spanMarca.innerText = `Marca: ${element.data().MARCA}`

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



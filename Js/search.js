import { getDocumento, getDoc, db, doc, collection, getDocs, where, query } from "/Js/db.js";


const formSearch = document.querySelector(".search")
const result = document.querySelector(".result")
const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString)




function formatarParaReais(valor) {
    valor = Number(valor)
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
  }

formSearch.addEventListener("submit", e => {
    
    e.preventDefault()
    const pm = formSearch.querySelector('input[name="parametro"]').value.trim()
    window.location.href = `/pages/search.html?parametro=${pm}`;

    console.log(formSearch.parametro.value)

}
)

const filds = ["MARCA", "MODELO","RAM","SSD","TELA","BATERIA","PROCESSADOR"]

  function  showSearch () {

    const parametro = urlParams.get("parametro").toLocaleUpperCase()
    
    filds.forEach(fild => {

        const q = query(
            collection(db, "NOTEBOOKS"),
            where(`${fild}`, "==", `${parametro}`) // Filtra usuários com idade >= 18
          )

          async function getResult () {

              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {


if(doc.id) {
    
        const notebook =  doc.data()

        console.log(notebook)
        
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
        
        h3.innerText = notebook.MODELO
        //titulo.innerText = notebook.data().MODELO
        valor.innerText = formatarParaReais(notebook.VENDA)
        processador.innerText = notebook.PROCESSADOR
        memoria.innerText = notebook.RAM
        ssd.innerText = notebook.SSD
        bateria.innerText = notebook.BATERIA
        condicao.innerText = notebook.CONDICAO
        
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

        const img = document.createElement("img")
        img.setAttribute("src",`\\imagens\\modelos\\${notebook.MODELO}\\01.jpg`)

        console.log(img)
        result.append(img)
        
        lista.appendChild(li)
        lista.appendChild(li1)
        lista.appendChild(li2)
        lista.appendChild(li3)
        lista.appendChild(li4)
        lista.appendChild(li5)
        
        result.append(h3)
        result.append(lista)
        
        
        if(notebook.ESTOQUE) {
            const li6 = document.createElement("li")
            li6.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.9em;"></i> Em estoque.`
            li5.append(li6)
        } else {
            const li6 = document.createElement("li")
            li6.innerHTML = `<i class="fas fa-circle" style="color: #cca72e; font-size: 0.9em;"></i> Para encomenda.`
            lista.append(li6)
        }
        
        
}
              });

          } 
            getResult()

    })
    
}

const buttonWhats =  document.querySelector('.whatsappBtnS')

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



showSearch()
 
function pesquisar() {

// Obtém a seção HTML onde os resultados da pesquisa serão exibidos
let section = document.getElementById("resultados-pesquisa") 

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string vazia
if (!campoPesquisa){
  section.innerHTML = "<p> Nenhum resultado encontrado. </p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados formatados
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

// Itera sobre cada dado na lista de resultados
for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  tags = dado.tags.toLowerCase()
  // Se titulo includes campoPesquisa
  if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
     // Cria um novo elemento HTML para cada dado
     resultados += `
     <div class="item-resultado">
       <h2>${dado.titulo}</h2>
       <p class="descricao-meta">${dado.descricao}</p>
       <img src="${dado.Imagem1}" alt= Imagem de ${dado.Imagem2} > 
       <p> ${dado.Fonteimg} </p>
       <button class="botao-saibamais"
           onclick="window.open('${dado.link}', '_blank')"> Saiba mais </button> 
   </div>
   
     `;
  }
   
}

// Se resultado não existir, será exibido uma mensagem
if (!resultados) {
  resultados = "<p> Nenhum resultado encontrado. </p>"
}

 // Insere os resultados formatados na seção HTML
section.innerHTML = resultados

}

function pesquisar(){
    //obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa se for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p> Esse componente, não existe no Ecossistema da Google ou não foi inventado.</p>"
        return
    };
            
    campoPesquisa = campoPesquisa.toLowerCase()

    //Inicializa uma string vazia para armazenar os resulados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let link = "";
    let tags = "";
    //Itera sobre cada dado da lista de dados
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
           
         //se titulo inclides campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    //Cria um novo elemento 
resultados += `
<div class="item-resultado">
                <h2> ${dado.titulo}</h2>
                <P class="descricao-meta">${dado.descricao}</p>
                      <a href= ${dado.link}
                      target="_blank"> Mais informação: Clica aqui!</a>
            </div>
       `;
        }    
     }

     if (!resultados) {
        resultados = "<p> Esse produto ou serviço, não foi inserido.</p>"
     }
 
    //Atribui os resultados gerados à secão HTML
    section.innerHTML = resultados;

    }



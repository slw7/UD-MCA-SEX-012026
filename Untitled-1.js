let produto1_nome = "Notebook"
let produto1_preco = 3500
let produto1_estoque = 5
let produto2_nome = "Mouse"
let produto2_preco = 50


    let produtos = [
        {  nome: "Notebook",
           preco: 3500,
           estoque: 5,
           imagens: ["foto1.jpg", "foto2.jpg"],
           especificacoes: {
                 memoria: "8GB",
                 processador: "15",
                 mouse: "Marca X Ø1UN"
              }         
        
        }, ]

function mostrarProdutoNaTela(produto) {
    return `<div class="produto">
         <h2>${produto.nome}</h2>
         <p>Preço: R$ ${produto.preco}</p>"
         <p>Em estoque: ${produto.estoque} unidades</p>
         <p>Memória: ${produto.especificacoes.memoria}</p>
     </div>`

    }

    // Cenário: E-commerce com 10.000 produtos
let catalogo = [ /* 10.000 produtos aqui */ ]
// O USUARIO quer: |
// 1. Filtrar por categoria
let eletronicos = catalogo.filter(p => p.categoria === "eletrônicos")
// 2. Buscar por preço máximo
let ate100Reais = catalogo.filter(p => p. preco <= 100)
// 3. Ordenar por relevância
let maisVendidos = catalogo.sort((a, b) => b.vendas - a.vendas)
// 4. Busca por texto
function buscarProdutos (termo) {
return catalogo.filter(p =>
p. nome. toLowerCase().includes(termo.toLowerCase())
      )

}
// SEM ARRAYS, cada uma dessas operações seria IMPOSSÍVEL de implementar

// Sistema que se ADAPTA a cada usuário
    let usuarios = {
        "j0a0123": {
           preferencias: {
              tema: "escuro", 
              idioma: "pt-BR", 
              notificacoes: true,
          },
          historico: ["/produtos", "/carrinho", "/checkout"], 
          recomendacoes: []
   },
    "maria456": {
       preferencias: {
              tema: "claro", 
              idioma: "en-US", 
              notificacoes: false,
          },
          historico: ["/promocoes", "/novidades"], 
          recomendacoes: []

    }
 }

 // USABILIDADE: Experiência personalizada
 function carregarInterfaceParaUsuario(usuarioId) {
    let user = usuarios[usuarioId]
        
        }
        
        if (user.preferencias.tema === "escuro") {
             aplicarTemaEscuro()
        }

         // Recomendações baseadas no histórico
        if (user.historico.includes("/promocoes")) {
            mostrarBannerPromocoes()

        }

        console.log('Bem-vindo de volta! Última visita: ' + user.historico.slice(-1)) 
      

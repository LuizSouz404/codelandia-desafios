const data = [
    {
        "source": {
            "id": "globo",
            "name": "Globo"
        },
        "title": "Nova parte do corpo humano é descoberta por cientistas suíços - Revista Galileu",
        "description": "Pesquisadores da Universidade de Basileia identificaram uma camada profunda do músculo masseter que contribui para a estabilização da mandíbula",
        "url": "https://revistagalileu.globo.com/Ciencia/Biologia/noticia/2021/12/nova-parte-do-corpo-humano-e-descoberta-por-cientistas-suicos.html",
        "publishedAt": "2021-12-28T17:27:18Z",
    },
    {
        "source": {
            "id": null,
            "name": "Tudocelular.com"
        },
        "title": "Buraco negro em erupção é fotografado por astrônomos da Austrália; veja a imagem - Tudocelular.com",
        "description": "Confira a imagem mais nítida de um buraco negro em erupção já capturada.",
        "url": "https://www.tudocelular.com/tech/noticias/n184202/buraco-negro-erupcao-fotografado-australia-veja.html",
        "publishedAt": "2021-12-28T12:12:53Z",
    },
    {
        "source": {
            "id": null,
            "name": "Revistaplaneta.com.br"
        },
        "title": "Hubble mostra notáveis redemoinhos de poeira na Nebulosa da Chama - Planeta - Revista Planeta",
        "description": "Brilho visível por trás das nuvens de poeira resulta da emissão de luz pelo resfriamento do hidrogênio",
        "url": "https://www.revistaplaneta.com.br/hubble-mostra-notaveis-redemoinhos-de-poeira-na-nebulosa-da-chama/",
        "publishedAt": "2021-12-28T11:41:02Z",
    },
    {
        "source": {
            "id": null,
            "name": "Canaltech.com.br"
        },
        "title": "Embrião de dinossauro é encontrado quase intacto dentro de ovo fossilizado - Canaltech",
        "description": "O ovo estava guardando há mais de 10 anos em museu da China, até que foi analisado pelos cientistas que descobriram semelhanças com pássaros modernos",
        "url": "https://canaltech.com.br/ciencia/embriao-de-dinossauro-e-encontrado-quase-intacto-dentro-de-ovo-fossilizado-205332/",
        "publishedAt": "2021-12-28T11:30:00Z",
    },
    {
        "source": {
            "id": "globo",
            "name": "Globo"
        },
        "title": "Boa Vista e 88i miram ciência de dados - Valor Econômico",
        "description": "Insurtech irá mapear hábitos de usuários e desenvolver soluções",
        "url": "https://valor.globo.com/financas/noticia/2021/12/28/boa-vista-e-88i-miram-ciencia-de-dados.ghtml",
        "publishedAt": "2021-12-28T08:02:06Z",
    },
    {
        "source": {
            "id": null,
            "name": "Cnnbrasil.com.br"
        },
        "title": "Essas fêmeas não precisam de um macho para se reproduzirem - CNN Brasil",
        "description": "Método de reprodução assexuada, partenogênese é encontrada em organismos como plantas, insetos, peixes, répteis e pássaros",
        "url": "https://www.cnnbrasil.com.br/internacional/essas-femeas-nao-precisam-de-um-macho-para-se-reproduzirem/",
        "publishedAt": "2021-12-28T07:30:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Uol.com.br"
        },
        "title": "Atriz do 'primeiro sutiã' trocou fama por psicologia: 'Meu filho me salvou' - UOL",
        "description": "Patrícia Lucchesi ficou famosa bem cedo, aos 11 anos, quando protagonizou o famoso comercial do \"Meu primeiro sutiã\". O sucesso rendeu-lhe participações no cinema — em 'O Casamento dos Trapalhões\" — e na TV, chegando até a integrar o elenco do",
        "url": "https://www.uol.com.br/splash/noticias/2021/12/28/patricia-lucchesi-do-primeiro-sutia-sobre-filho-autista-me-salvou.htm",
        "publishedAt": "2021-12-28T07:00:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Inovacaotecnologica.com.br"
        },
        "title": "Dupla hélice metálica armazena informações magnéticas em 3D - Site Inovação Tecnológica",
        "description": "É uma espécie de DNA magnético, que pode ser construído para guardar dados na estrutura desejada.",
        "url": "https://www.inovacaotecnologica.com.br/noticias/noticia.php?artigo=dupla-helice-metalica-armazena-informacoes-magneticas-3d&id=010110211228",
        "publishedAt": "2021-12-28T06:50:57Z",
    },
    {
        "source": {
            "id": null,
            "name": "Istoedinheiro.com.br"
        },
        "title": "Três asteroides passarão próximo a Terra já em janeiro de 2022 - Istoé Dinheiro",
        "description": "Para quem gosta de acompanhar as possíveis ameaças à Terra vindo do espaço, 2022 trará pelo menos três aproximações de asteróides.",
        "url": "https://www.istoedinheiro.com.br/tres-asteroides-passarao-proximo-a-terra-ja-em-janeiro-de-2022/",
        "publishedAt": "2021-12-28T05:10:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Sputnik International"
        },
        "title": "Galáxia solitária usada para determinar distâncias no Universo é registrada pelo Hubble (FOTO) - Sputnik Brasil",
        "description": "A galáxia espiral solitária UGC 9391, localizada a 130 milhões de anos-luz da Terra, foi flagrada pelo Telescópio Espacial Hubble.",
        "url": "https://br.sputniknews.com/20211227/galaxia-solitaria-usada-para-determinar-distancias-no-universo-e-registrada-pelo-hubble-foto-20826160.html",
        "publishedAt": "2021-12-27T23:41:40Z",
    },
    {
        "source": {
            "id": null,
            "name": "Canaltech.com.br"
        },
        "title": "China lança satélite de observação da Terra para exploração de recursos naturais - Canaltech",
        "description": "O mesmo lançamento, o 53º lançamento espacial da China neste ano, também enviou outro satélite, menor, que será dedicado a uma escola de ensino médio em Pequim",
        "url": "https://canaltech.com.br/espaco/china-lanca-satelite-de-observacao-da-terra-para-exploracao-de-recursos-naturais-205301/",
        "publishedAt": "2021-12-27T22:30:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Canaltech.com.br"
        },
        "title": "Cratera de Marte cheia de gelo em seu interior é fotografada por sonda em órbita - Canaltech",
        "description": "A imagem mostra gelo presente no interior de uma cratera com 4 km de largura. Na borda, há materiais escuros, provavelmente formados por materiais vulcânicos",
        "url": "https://canaltech.com.br/espaco/cratera-de-marte-cheia-de-gelo-em-seu-interior-e-fotografada-por-sonda-em-orbita-205309/",
        "publishedAt": "2021-12-27T21:40:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Socientifica.com.br"
        },
        "title": "Por que botamos a língua para fora quando estamos concentrados? - SoCientífica",
        "description": "Quando nos concentramos, principalmente em atividades motoras, é comum mostrarmos a língua. Isso, contudo, tem uma origem evolutiva.",
        "url": "https://socientifica.com.br/por-que-botamos-a-lingua-para-fora-quando-estamos-concentrados/",
        "publishedAt": "2021-12-27T20:54:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Canaltech.com.br"
        },
        "title": "Covid-19 pode danificar tecido cardíaco, segundo estudo - Canaltech",
        "description": "Especialistas fizeram uma análise do tecido cardíaco afetado com o auxílio de um microscópio especial de raio-X, e observaram alterações nos vasos sanguíneos",
        "url": "https://canaltech.com.br/saude/covid-19-pode-danificar-tecido-cardiaco-segundo-estudo-205311/",
        "publishedAt": "2021-12-27T20:22:21Z",
    },
    {
        "source": {
            "id": null,
            "name": "Escolaeducacao.com.br"
        },
        "title": "O Multiverso, como o da Marvel realmente existe? Um físico explica - Escola Educação",
        "description": "“O multiverso é um conceito sobre o qual sabemos assustadoramente pouco”. Estas palavras do Dr. Strange a Peter Parker no recém-lançado Homem-Aranha: Sem Volta Para Casa não são absolutamente incorretas. Na semana passada, também, o teaser de Doutor",
        "url": "https://escolaeducacao.com.br/o-multiverso-parecido-com-o-da-marvel-realmente-existe-um-fisico-explica/",
        "publishedAt": "2021-12-27T19:01:06Z",
    },
    {
        "source": {
            "id": null,
            "name": "Canaltech.com.br"
        },
        "title": "Missão da NASA que tentará desviar asteroide faz suas primeiras fotos; veja! - Canaltech",
        "description": "As imagens mostram estrelas próximas das constelações de Áries e Touro, e do aglomerado estelar Messier 38, localizado a aproximadamente 4.200 anos-luz de nós",
        "url": "https://canaltech.com.br/espaco/missao-da-nasa-que-tentara-desviar-asteroide-faz-suas-primeiras-fotos-veja-205300/",
        "publishedAt": "2021-12-27T18:45:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Noticiasaominuto.com"
        },
        "title": "\"Quanto mais transmissível for um vírus, menos patogénico ele vai ser\" - Notícias ao Minuto",
        "description": "Virologista garante que há \"várias notícias boas\" e que, apesar de termos de ter cautela\" com este grau de infeção \"vamos controlar de uma maneira mais rápida a pandemia\".",
        "url": "https://www.noticiasaominuto.com/pais/1900206/quanto-mais-transmissvel-for-um-vrus-menos-patognico-ele-vai-ser",
        "publishedAt": "2021-12-27T18:17:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Go.gov.br"
        },
        "title": "Prefeitura Municipal de Aparecida de Goiânia | Com amplo rastreamento e sequenciamento, Aparecida confirma transmissão comunitária da variante ômicron - Aparecida de Goiânia",
        "description": "Prefeitura Municipal de Aparecida de Goiânia",
        "url": "https://www.aparecida.go.gov.br/com-amplo-rastreamento-e-sequenciamento-aparecida-confirma-transmissao-comunitaria-da-variante-omicron/",
        "publishedAt": "2021-12-27T17:53:37Z",
    },
    {
        "source": {
            "id": null,
            "name": "Observador.pt"
        },
        "title": "Fact Check. Cientistas divulgaram fotografia de como será o planeta se não travarem alterações climáticas? - Observador",
        "description": "Publicação viral garante que uma imagem mostra a Terra afetada pelas alterações climáticas em 2041. É falsa.",
        "url": "https://observador.pt/factchecks/fact-check-cientistas-divulgaram-fotografia-de-como-sera-o-planeta-se-nao-travarem-alteracoes-climaticas/",
        "publishedAt": "2021-12-27T17:24:00Z",
    },
    {
        "source": {
            "id": null,
            "name": "Ncg.news"
        },
        "title": "Variante ômicron pode ter chegado a Ponta Grossa, diz secretário estadual de Saúde - NCG.news",
        "description": "Atualmente o Brasil tem 45 casos confirmados da nova cepa; casos suspeitos no Paraná estão sob monitoramento",
        "url": "https://ncg.news/noticia/5834/variante-omicron-pode-ter-chegado-a-ponta-grossa-diz-secretario-estadual-de-saude",
        "publishedAt": "2021-12-27T17:12:38Z",
      }
]


const dataElemt = document.querySelector("div.container");
const inputSearch = document.querySelector("input.search-input");
const contentBlog = document.getElementById("news");

const printAddress = () => {
  
  data.map(article => {
    const newContainer = dataElemt.cloneNode(true);
    
    newContainer.children[1].innerText = `${new Date(article.publishedAt).toLocaleDateString("pt-BR")} · ${article.source.name}`
    newContainer.children[2].children[0].innerText = article.title;
    newContainer.children[2].children[0].href = article.url;
    newContainer.children[3].innerText = article.description;
    
    contentBlog.appendChild(newContainer)
  })
  
  dataElemt.remove()
};


setTimeout(() => {printAddress()}, 1000);


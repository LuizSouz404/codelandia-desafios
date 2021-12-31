const item = [
  {
    "title": "Mini Bonsai",
    "urlImage" : "/assets/images/1.png",
    "urlLink": "https://www.pinterest.co.uk/pin/831969731171584969/",
    "preview": "/assets/bonsai.gif"
  },
  {
    "title": "Cartão com coração 3D",
    "urlImage" : "/assets/images/2.png",
    "urlLink": "https://www.pinterest.co.uk/pin/831969731171584974/",
    "preview": "/assets/coracao.gif"
  },
  {
    "title": "Polaroid guarda fotos",
    "urlImage" : "/assets/images/3.png",
    "urlLink": "https://www.pinterest.co.uk/pin/831969731171584987/",
    "preview": "/assets/polaroid.gif"
  },
  {
    "title": "Coroa de origami",
    "urlImage" : "/assets/images/4.png",
    "urlLink": "https://www.pinterest.co.uk/pin/831969731171585020/",
    "preview": "/assets/coroa.gif"
  },
  {
    "title": "Porta celular",
    "urlImage" : "/assets/images/5.png",
    "urlLink": "https://www.pinterest.co.uk/pin/831969731171584946/",
    "preview": "/assets/celular.gif"
  },
  {
    "title": "Arvore de Natal",
    "urlImage" : "/assets/images/9.png",
    "urlLink": "https://www.pinterest.co.uk/pin/68743512734/",
    "preview": "/assets/arvore.gif"
  },
  {
    "title": "Borboleta de origami",
    "urlImage" : "/assets/images/7.png",
    "urlLink": "https://www.pinterest.co.uk/pin/831969731171587238/",
    "preview": "/assets/borboleta.gif"
  },
  {
    "title": "Estrela de origami",
    "urlImage" : "/assets/images/8.png",
    "urlLink": "https://www.pinterest.co.uk/pin/831969731171587239/",
    "preview": "/assets/estrela.gif"
  },
]

const itemContainer = document.querySelector(".item-container");
const content = document.querySelector("div.content");

item.map(item => {
  const newContainer = itemContainer.cloneNode(true);

  newContainer.children[0].style.backgroundImage = `url(${item.urlImage})`;
  newContainer.children[1].href = item.urlLink;
  newContainer.children[1].children[0].innerText = item.title;

  
  content.appendChild(newContainer);
})

itemContainer.remove()



const itemContainers = document.querySelectorAll(".item-container");

for (let index = 0; index < itemContainers.length; index++) {
  itemContainers[index].addEventListener("mouseover", function() {
    itemContainers[index].children[0].style.backgroundImage = `url(${item[index].preview})`
  });

  itemContainers[index].addEventListener("mouseout", function() {
    itemContainers[index].children[0].style.backgroundImage = `url(${item[index].urlImage})`
  });
}


const dataElemt = document.querySelector("div.container");
const inputSearch = document.querySelector("input.search-input");
const contentBlog = document.getElementById("news");

const address = fetch('https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=711383be165b4e409f56cd912ad56a32')
  .then((response) => response.json())
  .then((articles) => {
    return articles;
  });

const printAddress = async () => {
  const {articles} = await address;

  articles.map(article => {
    const newContainer = dataElemt.cloneNode(true);

    newContainer.children[1].innerText = new Date(article.publishedAt).toLocaleDateString("pt-BR");
    newContainer.children[2].children[0].innerText = article.title;
    newContainer.children[2].children[0].href = article.url;
    newContainer.children[3].innerText = article.description;

    contentBlog.appendChild(newContainer)
  })

  dataElemt.remove()
};


printAddress();

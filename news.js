async function loadNewsApi() {
  let response = await axios.get('https://gnews.io/api/v4/search?q=cocaine&token=ab6e3bcb8285c9465972109f6f1a7761');
  updateDisplay(response.data.articles);
  console.log(response.data.articles)
};

loadNewsApi();

function updateDisplay(articles) {
  for (let eachArticles of articles) {
    let htmlSnippet = `<div class="card" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${eachArticles.title}
                <div class="card-text">
                    <ul>
                        <li>Url: ${eachArticles.url}</li>
                        <li>Date published: ${eachArticles.publishedAt}</li>
                    </ul>
                </div>
            </div>
            </div>`


    let newsDisplayDiv = document.querySelector("#news-display");

    newsDisplayDiv.innerHTML += htmlSnippet;
  }
}
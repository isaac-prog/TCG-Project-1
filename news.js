let newsCounter=0;

async function loadNewsApi() {
  let apiKey = 'ab6e3bcb8285c9465972109f6f1a7761'
  let newsSearch = document.querySelector('#news-search').value;
  newsCounter += 1;
  if (newsCounter>1){
    document.getElementById('news-display').innerHTML = "";}
  
  let response = await axios.get('https://gnews.io/api/v4/search?q='+'"'+newsSearch.replace(/\s+/g, '-')+'"'+'&token='+apiKey);
  updateDisplay(response.data.articles);
  console.log(response.data.articles)
};

let btn = document.querySelector('#search-btn');

btn.addEventListener('click', function(){
  loadNewsApi();
})

function updateDisplay(articles) {
  for (let eachArticles of articles) {
    let htmlSnippet = `<div class="card" style="width: 100%;">
            <div class="card-body" id="news-body">
                <h5 class="card-title">${eachArticles.title}
                <div class="card-text">
                    <ul>
                        <li><a href='${eachArticles.url}'>Url: ${eachArticles.url}</a></li>
                        <li>Date published: ${eachArticles.publishedAt}</li>
                    </ul>
                </div>
            </div>
            </div>`
    let newsDisplayDiv = document.querySelector("#news-display");
    newsDisplayDiv.innerHTML += htmlSnippet;
  }
}
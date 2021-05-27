let newsCounter=0;

async function loadNewsApi() {
  let apiKey = 'ab6e3bcb8285c9465972109f6f1a7761'
  let newsSearch = document.querySelector('#news-search').value;
  newsCounter += 1;
  if (newsCounter>1){
    document.getElementById('news-display').innerHTML = "";}
    let response = await axios.get('news.json');
    // let response = await axios.get('https://gnews.io/api/v4/search?q='+'"'+newsSearch.replace(/\s+/g, '-')+'"'+'&token='+apiKey);
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
            <div class="card-body" id="news-body"><a href='${eachArticles.url}'>
            <img src='${eachArticles.image}' style="width:250px;height:170px;margin-right:15px;float: left">
                <h5 class="card-title">${eachArticles.title}
                    <br><small>${eachArticles.description}</small></br>
                    <p><small>Date published: ${eachArticles.publishedAt}<small></p>
                    </a>
            </div>
            </div>`
    let newsDisplayDiv = document.querySelector("#news-display");
    newsDisplayDiv.innerHTML += htmlSnippet;
  }
}
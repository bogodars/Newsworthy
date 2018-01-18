// Page Elements 

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const conetent = document.getElementById('content');

// News API Data 

const apiKey = '1ldcC4plRSe9lOHEbDcgxQqQs';
const endadgetUrl = 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=7ec072451165486eadf811158e5ac764';
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=recode&apiKey=7ec072451165486eadf811158e5ac764';
const nextWebUrl = 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=7ec072451165486eadf811158e5ac764';

// Request News Function 

async function getNews(url) {
    let response = await fetch(url); 
        let jsonResponse = await response.json();
        let articlesArray = jsonResponse.articles.slice(0,5);
        return articlesArray;
    
}

// Render Function 

function renderNews(articles) {
    articles.map((article, index) => {
        let articleRow = '<div class="row">' + '<div class="col-md-9 article">' + '<h2 class="title">' + article.title + '</h2>' + '<h3>By ' + article.author + '</h3>' + '<p> ' + article.description + '</p>' + '<a href="' + article.url + '"target="_blank" class="readmore"><p>Read More</p></a>' + ' </div>' + '<div class="col-md-3 share">' + ' <img class="storyimage" src="' + article.urlToImage + '"/>' + '</div>' + '</div>' ;
        
        content.innerHTML += articleRow;
    });
    
    return articles;
}

// Button Event Listeners

engadget.addEventListener('click', function() {
    content.innerHTML= ' ';
    
    // Call getNews() 
    
    getNews(endadgetUrl).then(articlesArray => renderNews(articlesArray));
}, false);

recode.addEventListener('click', function() {
    content.innerHTML= ' ';
    
    // Call getNews()
    
    getNews(recodeUrl).then(articlesArray => renderNews(articlesArray));
}, false);

nextWeb.addEventListener('click', function() {
    content.innerHTML= ' ';
    
    // Call getNews()
    
    getNews(nextWebUrl).then(articlesArray => renderNews(articlesArray));
}, false);
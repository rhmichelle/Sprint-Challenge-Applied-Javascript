// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log('Bootstrap Here', response.data.articles.bootstrap)
    // console.log(response.data.articles.bootstrap[0].headline)

    // response.data.articles.bootstrap.forEach(articles => {
    //     const newBootstrapArticle = articleComponent(articles)
    //     cardsContainer.appendChild(newBootstrapArticle)
    // })
})
    .then(response => {
        console.log('Javascript Here', response.data.articles.javascript)
    })


const cardsContainer = document.querySelector('.cards-container')

const articleComponent = (articles) => {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = articles.headline
    img.src = articles.authorPhoto
    authorsName.textContent = articles.authorName

    return card
}
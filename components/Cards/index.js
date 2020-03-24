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
    console.log('Bootstrap Here', response.data.articles)
    // console.log(response.data.articles.bootstrap[0].headline)

    response.data.articles.javascript.forEach(obj => {
        const newJSArticle = articleComponent(obj)
        cardsContainer.appendChild(newJSArticle)
    })

    response.data.articles.bootstrap.forEach(obj => {
        const newBootstrapArticle = articleComponent(obj)
        cardsContainer.appendChild(newBootstrapArticle)
    })

    response.data.articles.technology.forEach(obj => {
        const newTechArticle = articleComponent(obj)
        cardsContainer.appendChild(newTechArticle)
    })

    response.data.articles.node.forEach(obj => {
        const newNodeArticle = articleComponent(obj)
        cardsContainer.appendChild(newNodeArticle)
    })

    response.data.articles.jquery.forEach(obj => {
        const newJQArticle = articleComponent(obj)
        cardsContainer.appendChild(newJQArticle)
    })
})
   


const cardsContainer = document.querySelector('.cards-container')

const articleComponent = (obj) => {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorsName)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = obj.headline
    img.src = obj.authorPhoto
    authorsName.textContent = obj.authorName

    return card
}
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



// Axios
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log('Topics Here', response.data.topics)

    response.data.topics.forEach(topics => {
        const newTab = createTabs(topics)
        tabsContainer.appendChild(newTab)
    })
})





// Create new tab function

const tabsContainer = document.querySelector('.topics')

const createTabs = (topics) => {
    const tab = document.createElement('div')

    tab.textContent = topics

    tab.classList.add('tab')

    return tab
}




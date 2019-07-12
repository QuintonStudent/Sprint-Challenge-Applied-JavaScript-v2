// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then( response => {
    response.data.topics.forEach( item => {
      Tab(item);
    });
  })
  .catch ( error => {
    console.log(error);
  });

function Tab(item) {
  let div1 = document.createElement('div');
  div1.className = 'tab';
  div1.innerText = item;

  let topics = document.querySelector('.topics');
  topics.appendChild(div1);

  console.log(topics);
}

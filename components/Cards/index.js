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
  .then( response => {
    Object.keys(response.data.articles).forEach( item => {
      // console.log(response.data.articles[`${item}`]);
      for(let i = 0; i < response.data.articles[`${item}`].length; i++) {
        Article(response.data.articles[`${item}`][i]);
      }
    });
  })
  .catch( error => {
    console.log(error);
  });


function Article(Obj) {
  // create elements
  const divCard = document.createElement('div');
  const divHeadline = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImg = document.createElement('div');
  const img1 = document.createElement('img');
  const span1 = document.createElement('span');

  // add classes to elements
  divCard.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author');
  divImg.classList.add('img-container');

  // arrange elements
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImg);
  divImg.appendChild(img1);
  divAuthor.appendChild(span1);

  // add content to elements
  divHeadline.innerText = `${Obj.headline}`;
  img1.src = `${Obj.authorPhoto}`;
  span1.innerText = `By: ${Obj.authorName}`;

  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.appendChild(divCard);

  // console.log(divCard);
}

Article();

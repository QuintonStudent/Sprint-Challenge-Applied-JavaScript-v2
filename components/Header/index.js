// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  // create elements
  let div1 = document.createElement('div');
  let span1 = document.createElement('span');
  let header1 = document.createElement('h1');
  let span2 = document.createElement('span');

  // add classes to elements
  div1.className = 'header';
  span1.className = 'date';
  span2.className = 'temp';

  // add content to elements
  span1.innerText = 'SMARCH 28, 2019';
  header1.innerText = 'Lambda Times';
  span2.innerText = '98°';

  // arrange elements
  div1.appendChild(span1);
  div1.appendChild(header1);
  div1.appendChild(span2);
  let headerContainer = document.querySelector('.header-container');
  headerContainer.appendChild(div1);

  console.log(headerContainer);
}

Header();

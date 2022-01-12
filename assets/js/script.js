var count = 0;

// document.querySelector() methods: Telling the DOM that these elements with matching ID
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// function that sets the counter: Selecting the text content to display dynamically
function setCounterText() {
  countEl.textContent = count;
}
// event listener function for adding one increment count +1 to the setCounterText
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// // event listener function for decreasing increment count -1 to the setCounterText
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});

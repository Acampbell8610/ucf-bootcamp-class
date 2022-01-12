var count = 0;

// TODO: Add a comment describing the functionality of the following document.querySelector() methods:
// a way to pull elements from html for refrence
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// TODO: Add a comment describing the functionality of the following code:
// setcountertext will equal what the buttons actions are
function setCounterText() {
  countEl.textContent = count;
}
// TODO: Add a comment describing the functionality of the following event listener:
// increasing number by 1
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// TODO: Add a comment describing the functionality of the following event listener:
// decreasing number by 1 until 0
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});

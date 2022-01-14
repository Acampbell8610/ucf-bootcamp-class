var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

console.log(element);


if(element.textContent){
 // element.textContent = '';
  element.setAttribute('data-state', 'hidden');
}else{
  element.textContent= element.dataset.number;
  //element.dataset.state = "visible";
  element.getAttribute('data-state', 'visible')
}
});
var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
     populateList(data)
    });
}
const populateList=(data) => {
 
 for (let i =0; i < data.length; i++) {
    let userWrapperEl = document.createElement("div");
    let userNameEl = document.createElement("p");
    userNameEl.textContent= data[i].login;
    userWrapperEl.appendChild(userNameEl);
    
    let urlEl = document.createElement("p");
    urlEl.textContent=data[i].html_url;
    userWrapperEl.appendChild(urlEl);


    userContainer.appendChild(userWrapperEl);
  }
}

fetchButton.addEventListener('click', getApi);

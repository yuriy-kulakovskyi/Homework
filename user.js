fetch("https://randomuser.me/api/")
.then(response => {return response.json()})
.then(data => {
  $("#avatar").css('background-image', `url(${data.results[0].picture.large})`);
})
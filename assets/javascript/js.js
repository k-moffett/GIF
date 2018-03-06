$( document ).ready(function () {


let search_term = ""
let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qb8lbk6ofj2a1OHH6gXZDnJbL6M4s5Zl&q=" + search_term + "&limit=1&offset=0&rating=G&lang=en";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    console.log(response);
});





$("#click-submit").on("click", function(){
    event.preventDefault();
    console.log($("#form").text())
})
});
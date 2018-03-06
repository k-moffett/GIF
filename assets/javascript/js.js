$( document ).ready(function () {





let search_term = "cat"
let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qb8lbk6ofj2a1OHH6gXZDnJbL6M4s5Zl&q=" + search_term + "&limit=1&offset=0&rating=G&lang=en";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    console.log(response);
});

let all_buttons = []

function create_buttonz() {
let a = $("<button>")
for (i=0; i<all_buttons.length; i++) {
    a.addClass("buttonz btn btn-primary")
    a.attr("data-name", all_buttons[i])
    a.text(all_buttons[i])
    $("#buttons-span").append(a)
    }
}



$("#click-submit").on("click", function(){
    event.preventDefault();
    let button = $("#form-input").val().trim()
    all_buttons.push(button)
    create_buttonz()
})


});
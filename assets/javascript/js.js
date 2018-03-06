$( document ).ready(function () {


let all_buttons = []


function generate_gif(){
    let search_term = $(this).attr("data-name")
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qb8lbk6ofj2a1OHH6gXZDnJbL6M4s5Zl&q=" + search_term + "&limit=5&offset=0&rating=G&lang=en";
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    console.log(response);
    console.log(search_term)
    let gif_div = $("<div class=`gif_div`>")
    let gif_url = response.data[i].images.original.url
    let gif = $("<img>").attr("src", gif_url)
    gif_div.append(gif)
    $("#gif-span").append(gif_div)

});//ajax then

}//generate gif






function create_buttonz() {
let a = $("<button>")
for (i=0; i<all_buttons.length; i++) {
    a.addClass("buttonz btn btn-primary")
    a.attr("data-name", all_buttons[i])
    a.text(all_buttons[i])
    $("#buttons-span").append(a)
    }
}
$(document).on("click",".buttonz", generate_gif)
$("#click-submit").on("click", function(){
    event.preventDefault();
    let button = $("#form-input").val().trim()
    all_buttons.push(button)
    create_buttonz()
})
$("#clear-buttons").on("click", function(){
    event.preventDefault();
    $("#buttons-span").empty()
})

/////////////////////////////////////////////////////////////
});
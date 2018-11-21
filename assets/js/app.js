$(document).ready(function () {
// Array for searched topics to be added
var topics = [];

// Function with AJAX call to GIPHY
// Q parameterc for API link set to search term
// Limit 10 results
// Creates a div with respective still and 
// animate image sources with "data-state"
// "data-still" and 
// "data-animate" attributes
function displaytvShow() {

// Kat's Code -----------------------------------------------
var x = $(this).data("search");
console.log(x);

// API Key issued from Kat Bell's GIPHY Developers account: https://developers.giphy.com/dashboard/
// Kat's Code -----------------------------------------------
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=u347AreGwzvcxtxMQLERMwnKBUmyfWBJ";

// Travis' Demo ---------------------------------------------
// var queryUrl = "https://api.giphy.com/v1/gifs/search";
// var apiKey = "u347AreGwzvcxtxMQLERMwnKBUmyfWBJ";
// var params = "?" + $.param({
//   api_key: apiKey,
//   q: queryItem,
//   limit: 25,
//   offset: 0,
//   rating: "G",
//   lang: "en"

// Travis' Demo ---------------------------------------------
// var queryUrlWithParams = queryUrl + params;

// Kat's Code -----------------------------------------------
console.log(queryURL);

// Travis' Demo ---------------------------------------------
// console.log("Our request url is " + queryUrlWithParams);

// Making a request to the GIPHY search API
$.ajax({

// Kat's Code -----------------------------------------------
url: queryURL,

// Travis' Demo ---------------------------------------------
// url: queryUrlWithParams,
method: "GET"
}).done(function (response) {
var results = response.data;
console.log(results);
for (var i = 0; i < results.length; i++) {

var showDiv = $("<div class='col-md-4'>");

var rating = results[i].rating;
var defaultAnimatedSrc = results[i].images.fixed_height.url;
var staticSrc = results[i].images.fixed_height_still.url;
var showImage = $("<img>");
var p = $("<p>").text("Rating: " + rating);

showImage.attr("src", staticSrc);
showImage.addClass("tvGiphy");
showImage.attr("data-state", "still");
showImage.attr("data-still", staticSrc);
showImage.attr("data-animate", defaultAnimatedSrc);
showDiv.append(p);
showDiv.append(showImage);
$("#gifArea").prepend(showDiv);

}
});
}

// Submit button click event takes search term from form input
// Trims and pushes to topics array, displays button
$("#addShow").on("click", function (event) {
event.preventDefault();
var newShow = $("#tvInput").val().trim();
topics.push(newShow);
console.log(topics);
$("#tvInput").val('');
displayButtons();
});

// Function iterates through topics array to display 
// button with array values in "myButtons" section of HTML
function displayButtons() {
$("#myButtons").empty();
for (var i = 0; i < topics.length; i++) {
var a = $('<button class="btn btn-info">');
a.attr("id", "show");
a.attr("data-search", topics[i]);
a.text(topics[i]);
$("#myButtons").append(a);
}
}

displayButtons();

// Click event on button with id of "show" 
// executes displaytvShow function
$(document).on("click", "#show", displaytvShow);

// Click event on gifs with class of "tvGiphy"
// executes pausePlayGifs function
$(document).on("click", ".tvGiphy", pausePlayGifs);

// Function accesses "data-state" attribute
// Depending on status, changes image source
// To "data-animate" or "data-still"
function pausePlayGifs() {
var state = $(this).attr("data-state");
if (state === "still") {
$(this).attr("src", $(this).attr("data-animate"));
$(this).attr("data-state", "animate");
} else {
$(this).attr("src", $(this).attr("data-still"));
$(this).attr("data-state", "still");
}
}

});

$("#submit-form").on("click", function(e){
e.preventDefault();
var userName = $("#user-name").val().trim();
console.log(userName);
$("#user-name-local").text(userName);   

// Setting an item in localStorage setItem
localStorage.setItem("username", userName);
});

// Getting an item from localStorage with getItem
var localUserName = localStorage.getItem("username");
$("#user-name-local").text(localUserName);
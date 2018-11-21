// make a function that makes a request to giphy
function makeAPICallToGiphy(queryItem) {
    var queryURL = "https://api.giphy.com/v1/gifs/search";
    var apiKey = "u347AreGwzvcxtxMQLERMwnKBUmyfWBJ";
    var params = "?" + $.param({
        api_key: apiKey,
        q: queryItem,
        limit: 25,
        offset: 0,
        rating: "G",
        lang: "en"
    });

    var queryURLWithParams = queryURL + params;

    console.log("Our request url is" + queryURLWithParams)

    // make a request to giphy search API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var imagesArr = response.data;
        for (var i = 0; i < imagesArr.length; i++) {
            var img = $("<img>");
            img.addClass("gif-image");
            img.attr("scr", response.data[0].images.fixed);
            img.attr("data-still", imagesArr[i].images.fixed // fix
            img.attr("data-still", imagesArr[i].images.fixed // fix

        }

    });

    makeAPICallToGiphy("cats");
    // makeAPICallToGiphy("dogs");

}
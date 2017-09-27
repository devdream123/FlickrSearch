/*
function searchFlickrPhoto(location, longtitude, latitude) {
    var FLICKR_API_KEY = "6a669c22eae9c3cc0c4bc67a26f2b1ce"; //"f7636588d15ff7c6847b45bdfa9ab33c";
    var FLICKR_SECRET = "d75d2ff57751c0b9";
    var jsonRequest = "https://api.flickr.com/services/rest/?method=flickr.photos.search&";
    var requestParam = {
        api_key: FLICKR_API_KEY,
        lat: latitude,
        lon: longtitude,
        per_page: 10,
        format: "json",
        nojsoncallback: 1
    };
    //alert(requestParam);
    //Send the request
    //  $.getJSON(jsonRequest, requestParam).done(getFlickrResponse);
    // $(".result h3").append(data.val());

}
*/

function searchFlickrPhoto(location, longtitude, latitude) {
    var FLICKR_API_KEY = "6a669c22eae9c3cc0c4bc67a26f2b1ce"; //"f7636588d15ff7c6847b45bdfa9ab33c";
    var FLICKR_SECRET = "d75d2ff57751c0b9";
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&";

    var requestParam = {
        api_key: FLICKR_API_KEY,
        secret: FLICKR_SECRET,
        lat: latitude,
        lon: longtitude,
        per_page: 10,
        format: "json",
        nojsoncallback: "?"
    };
    var photoUrl;
    $.getJSON(url, requestParam, getFlickrResponse);
}

function getFlickrResponse(data) {
    console.log(data.photos.photo);
    $.each(data.photos.photo, function(i, item) {
        photoUrl = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
        $("<img/>").attr("src", photoUrl).appendTo(".result .photos");
    });
}

function clearSearchResult() {
    $("img").remove();
}

$(document).ready(function() {
    var location = $("#location").val();
    var longtitude = $("#long").val();
    var latitude = $("#lat").val();

    console.log("latitude: " + latitude);
    console.log("longtitude: " + longtitude);
    console.log("location: " + location);

    $(".search-btn").click(function() {
        clearSearchResult();
        searchFlickrPhoto(location, longtitude, latitude);
    });
});
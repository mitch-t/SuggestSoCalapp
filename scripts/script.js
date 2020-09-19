$(document).ready(function() {

// var userLocation = "location=" + lat + ", " + lon; This variable would be inserted into the queryUrl if location is relevant to the deal search.

// Search by category_slug
var shopping = "category_slugs=baby, bridal, clothing, electronics, fashion-accessories, gay, gifts, home_goods, jewish, kids, kitchen, makeup, mens-clothing, movies_music_games, office_supplies, pets, product, tools, toys, womens-clothing";
var wellness = "category_slugs=beauty_health, chiropractic, dental, dermatology, eye-vision, facial, fitness, fitness_classes, gym, hair-removal, hair-salon, health-beauty, manicure-pedicure, massage, personal-training, pilates, spa, tanning, teeth-whitening, yoga";
var activities = "category_slugs=activities-events, bars-clubs, bowling, dance-classes, city-tours, comedy-clubs, concerts, life-skills-classes, museums, outdoor_adventures, skiing, skydiving, sporting-events, theater, travel, wine-tasting, martial-arts";

// var queryUrl = "https://api.discountapi.com/v2/deals?location=33.980602, -117.375496&api_key=" + apiKey; 
var queryUrl = "https://api.discountapi.com/v2/deals?" + activities + "&api_key=" + apiKey; 
var apiKey = "uFVXWRdL";

var i = 0; // This is the counter so that the user can click a button to retrieve a new deal.

// Here is the list of all category slugs. The api only lets you query up to 20 category slugs. If we want them
// to access all category, simply query deals with no parameters.
//  category_slugs=activities-events, adult, audio, automotive, automotive-services, baby, 
//bars-clubs, beauty_health, boot-camp, bowling, bridal, chiropractic, city-tours, clothing, college, comedy-clubs, 
//concerts, crafts_hobbies, dance-classes, dental, dermatology, dining-nightlife, electronics, eye-vision, facial, 
//fashion-accessories, fitness, fitness_product, fitness_classes, food_alcohol, food-grocery, gay, gifts, golf, gym, 
//hair-removal, hair-salon, health-beauty, home_goods, home-services, jewish, kids, kitchen, kosher, life-skills-classes, 
//luggage, makeup, manicure-pedicure, martial-arts, massage, mens-clothing, mens_fashion, mobile, movies_music_games, museums, 
//office_supplies, outdoor_adventures, personal-training, pets, photography-services, pilates, product, restaurants, 
//retail-services, skiing, skydiving, spa, special-interest, sporting-events, tanning, teeth-whitening, theater, tools, 
//toys, travel, treats, unknown, wine-tasting, womens-clothing, women_fashion, yoga

// This is the function to get deals
function getDeals(i){
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        
        var description = response.deals[i].deal.short_title;
        var percentOff = ((response.deals[i].deal.discount_percentage)*100).toFixed(0);    
        var expiration = response.deals[i].deal.expires_at; // Will have to fix formatting if we use this
        var imgUrl = response.deals[i].deal.image_url;
        var dealUrl = response.deals[i].deal.url;

        // This callback sets the page content
        function displayNewDeal(){
            $("#test h2").text(description);
            $("#expiration").text("Expires on: " + expiration);
            $("#percent").text(percentOff + "% off!");
            $("#image").attr({src: imgUrl, alt: "deal image"});
            $("#product-url").attr("href", dealUrl);
        };
        displayNewDeal();
    });
};
getDeals(i);

// This click event allows the user to generate a new deal, up to 20 max. 
$("#button").on("click", function(event){
    i++;    // This will need a restriction: if i > 19, they can't click anymore, and it takes them back to i=0 deal
    console.log(i);
    getDeals(i);
});

// Use these functions to get user lat and lon
window.navigator.geolocation.getCurrentPosition(console.log, console.log);
var location = document.getElementById("location");

function getLocation() {
  if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    location.innerHTML = "Geolocation is not supported by this browser.";
  };
};
getLocation();
    // showPosition is a callback for when the getCurrentPosition is successful (i.e., the user accepts location permissions and the browser is compatible)
function showPosition(position) { 
  location.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  test(lat, lon);   // Have these location functions get triggered by certain user criteria and communicate with another function that needs the lat and lon
};

function test(lat, lon){
    console.log("Your coordinates are latitude: " + lat + "and longitude: " + lon);
};



}); //document.ready end brackets
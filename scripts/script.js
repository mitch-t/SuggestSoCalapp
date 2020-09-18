$(document).ready(function() {

var queryUrl = "https://api.discountapi.com/v2/deals?location=33.980602, -117.375496&api_key=" + apiKey; 
var apiKey = "uFVXWRdL";

// categorySlugs = category_slugs=activities-events, adult, audio, automotive, automotive-services, baby, 
//bars-clubs, beauty_health, boot-camp, bowling, bridal, chiropractic, city-tours, clothing, college, comedy-clubs, 
//concerts, crafts_hobbies, dance-classes, dental, dermatology, dining-nightlife, electronics, eye-vision, facial, 
//fashion-accessories, fitness, fitness_product, fitness_classes, food_alcohol, food-grocery, gay, gifts, golf, gym, 
//hair-removal, hair-salon, health-beauty, home_goods, home-services, jewish, kids, kitchen, kosher, life-skills-classes, 
//luggage, makeup, manicure-pedicure, martial-arts, massage, mens-clothing, mens_fashion, mobile, movies_music_games, museums, 
//office_supplies, outdoor_adventures, personal-training, pets, photography-services, pilates, product, restaurants, 
//retail-services, skiing, skydiving, spa, special-interest, sporting-events, tanning, teeth-whitening, theater, tools, 
//toys, travel, treats, unknown, wine-tasting, womens-clothing, women_fashion, yoga

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.deals[0].deal.category_name);
    
    console.log(response.deals[0].deal.short_title);
    var description = response.deals[0].deal.short_title;

    console.log(response.deals[0].deal.discount_amount);
    console.log(response.deals[0].deal.discount_percentage);
    var percentOff = ((response.deals[0].deal.discount_percentage)*100).toFixed(0);

    console.log(response.deals[0].deal.expires_at);
    var expiration = response.deals[0].deal.expires_at;

    console.log(response.deals[0].deal.image_url);
    var imgUrl = response.deals[0].deal.image_url;

    console.log(response.deals[0].deal.url);
    var dealUrl = response.deals[0].deal.url;

    $("#test h2").text(description);
    $("#expiration").text("Expires on: " + expiration);
    $("#percent").text(percentOff + "% off!");
    var imgElement = $("<img>").attr({src: imgUrl, alt: "Product image"});
    $("#test").append(imgElement);
    $("#product-url").attr("href", dealUrl);
    
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

function showPosition(position) {
  location.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  console.log(position.coords.longitude);
  // Create variables to hold user lat and lon
};





});
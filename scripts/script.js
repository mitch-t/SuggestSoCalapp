$(document).ready(function() {

var queryUrl = "https://api.discountapi.com/v2/deals?api_key=" + apiKey;
var apiKey = "uFVXWRdL";

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.deals[0].deal.category_name);
    
    console.log(response.deals[0].deal.description);
    var description = response.deals[0].deal.description;

    console.log(response.deals[0].deal.discount_amount);
    console.log(response.deals[0].deal.discount_percentage);
    var percentOff = ((response.deals[0].deal.discount_percentage)*100).toFixed(0);

    console.log(response.deals[0].deal.expires_at);
    console.log(response.deals[0].deal.image_url);
    var imgUrl = response.deals[0].deal.image_url;

    console.log(response.deals[0].deal.url);
    var dealUrl = response.deals[0].deal.url;

    $("#test h2").text(description);
    $("#test p").text(percentOff + "% off!");
    var imgElement = $("<img>").attr({src: imgUrl, alt: "Product image"});
    $("#test").append(imgElement);
    $("#product-url").attr("href", dealUrl);
    



});






});
$(document).ready(function(){
  	console.log("here's your mock data to start with:")
  	console.log(GLOBAL_MOCK_DATA_OBJECT)

	var GIF_STORE = "http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC"
	var GIF_SITE_SPLIT =  GIF_STORE.split("&");
	var GIF_SITE = GIF_SITE_SPLIT[0];
 	var GIF_KEY = GIF_SITE_SPLIT[1];

   $(".button").on("click", function(){
   	console.log("key was pressed:");

   	gifSearch($("#gifword").val());


   });
 
 	function gifSearch(wordlooking4){
 		console.log(" The GIF you are looking is: " + wordlooking4);
		$.get(GIF_SITE + wordlooking4 + "&" + GIF_KEY, function(data){
			console.log(data);
			$("img").remove()
			data.data.forEach(function(gif){
				console.log(gif);
				$('body').append("<img src= " + gif.images.fixed_height.url + ">")
			});
		});
 	};
 	

});
	// GIF_STORE.data.forEach(function(gif){
	// 	console.log(gif)
	// 	$("body").append("<img src=" + gif.images.fixed_height.url + ">");
	// });

// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
//   	// can you render the mock data to the page?


// var endpoint = 'https://api.spotify.com/v1/search?q=goodbye&type=artist'

// // click event on button
// $('button').on('click', function(event) {
//       $.get(spotify_endpoint, function(data) {
//             console.log(data);
//       });
// });

// // submit event on form
// $('form').on('submit', function(event){
//       $.get(endpoint, function(data) {
//             console.log(data);
//       });
// });
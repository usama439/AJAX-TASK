// $(function() {
//   loadRecipes();
// });

// function loadRecipes() {
//   $.ajax({
//     url: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json',
//     method: 'GET',
//     success: function(response) {
//       console.log(response);
//       var recipes = $('#recipes');
//       recipes.empty();
//       for (var i = 0; i < response.length; i++) {
//         var imageUrl = response[i];
//         recipes.append(
//           `<div class="recipe"><img src="${imageUrl}" alt="Shibe Image"><p><button class="btn btn-danger btn-sm float-right">delete</button></p></div>`
//         );
//       }
//     }
//   });
// }
$(function() {
  loadRecipes();
});

function loadRecipes() {
  $.ajax({
    url: 'https://api.artic.edu/api/v1/artworks/search?q=cats',
    method: 'GET',
    success: function(response) {
      console.log(response);
      var recipes = $('#recipes');
      recipes.empty();
      for (var i = 0; i < response.data.length; i++) {
        var artwork = response.data[i];
        recipes.append(
          `<div class="recipe"><p>${artwork.title}: ${artwork.artist_title}</p><button class="btn btn-danger btn-sm float-right">delete</button></div>`
        );
      }
    }
  });
}


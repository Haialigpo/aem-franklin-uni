// Function to initialize the component and make the HTTP request
function initProductListComponents() {
  // Select all div elements with the class 'recipe-list-container'
  const divs = document.querySelectorAll('.recipe-list-container');

  // Iterate over each div and perform the necessary operations
  divs.forEach((div) => {
    function createRecipeList(recipeData) {
      let productListHTML = '';
      products.forEach((recipe) => {
        productListHTML += `
                          <div class='recipe-item'>
                          <a href='${`recipe?id=${recipe.recipeData.recipeID}`}' aria-label='View details for ${recipe.recipeData.name}'>
                          <img src='${`${recipe.recipeData.newImage[0].default.url}?im=AspectCrop=(400,400);Resize=(400,400)`}' alt='${recipe.recipeData.newImage[0].default.title}'>
                            <h2>${recipe.recipeData.name}</h2>
                          </a>
                      </div>
                        `;
      });

      div.querySelector('.recipe-list').innerHTML += productListHTML;
    }

    const { size, apiurl, store } = div.dataset;
    // Extract data attributes from the div
    const fetchAndDisplayProducts = (page = 1) => {
      const headers = {
        size,
        store,
        'Content-Type': 'application/json',
      };
      //  const loadmoreButtonText = div.dataset.loadmorebutton;

      const query = `
          query {recipes(bygroup:{from:0,group:{in:["{\"brands\":\"knorr\"}","{\"countries\":\"gb\"}"]},size:${size}}){items{recipeData{recipeID,name,description,prepTime,cookTime,totalTime,createdDate,modifiedDate,recipeName,validServingSizes,aggregateRating{ratingCount,ratingValue},difficulty,newImage{default{url,title,caption}},newImage{dish{url,title,caption}},newImage{principle{url,title,caption}},newImage{main_ingredient{url,title,caption}},video{name,contentUrl,type,thumbnailUrl},healthyRecipeFramework,dietaryClaim{include},spiciness,nutritionalInformation{nutritionPerServing{energyPerNutrientBasis{value,unitCode}}}},custom_generalAttributes_custom_:custom_generalAttributes},total_Count_custom_:total_Count,custom_recipeData_custom_:custom_recipeData,status_message_custom_:status_message}}`;

      fetch(apiurl, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          createRecipeList(data.data.recipes.items);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    fetchAndDisplayProducts();
  });
}

initProductListComponents();

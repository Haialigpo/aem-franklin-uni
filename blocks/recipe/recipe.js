// Function to initialize the component and make the HTTP request
function createrecipeHTML(recipe, div) {
    let recipeHTML = '';
    recipeHTML += `
    <div class="recipe-info">
          <div class="left-container">
           <img src="${`${recipe.recipeData.image[0].default}?im=AspectCrop=(400,400);Resize=(400,400)`}" alt="${recipe.recipeData.name}">
          </div>
          <div class="right-container">
          <h1>${recipe.recipeData.name}</h1>
          </div>
          </div>
      
      `;
  
    div.querySelector('.recipe-wrapper').innerHTML += recipeHTML;
  }
  function fetchrecipeDetails(recipeId) {
    const div = document.querySelector('.recipe-container');
    const { apiurl, store } = div.dataset;
  
    const headers = {
      store,
      'Content-Type': 'application/json',
    };
    //  const loadmoreButtonText = div.dataset.loadmorebutton;
  
    const query = `{
        recipes(filter: { recipeID: { eq: ${JSON.stringify(recipeId)} } }) {
            total_Count
            items {
                recipeData {
                    recipeID
                    recipeName
                    name
                    image {
                        default
                    }
                    newImage {
                        default {
                            url
                            title
                            caption
                        }
                        dish {
                            url
                            title
                            caption
                        }
                        principle {
                            url
                            title
                            caption
                        }
                        main_ingredient {
                            url
                            title
                            caption
                        }
                    }
                }
            }
        }
    }`;
  
    fetch(apiurl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => {
        createrecipeHTML(data.data.recipes.items[0], div);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  function initrecipeComponents() {
    const url = window.location.href;
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    const recipeId = params.get('id');
    fetchrecipeDetails(recipeId);
  }
  
  initrecipeComponents();
  
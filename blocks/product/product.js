// Function to initialize the component and make the HTTP request
function createProductHTML(product, div) {
  let productHTML = '';
  productHTML += `
  <div class="product-info">
        <div class="left-container">
         <img src="${`https://assets.unileversolutions.com/v1/${product.image.url}.png?im=AspectCrop=(400,400);Resize=(400,400)`}" alt="${product.image.label}">
        </div>
        <div class="right-container">
        <h1>${product.name}</h1>
        <p>${product.description.html}</p>
        </div>
        </div>
    
    `;

  div.querySelector('.product-wrapper').innerHTML += productHTML;
}
function fetchProductDetails(sku) {
  const div = document.querySelector('.product-container');
  const { apiurl, store } = div.dataset;

  const headers = {
    store,
    'Content-Type': 'application/json',
  };
  //  const loadmoreButtonText = div.dataset.loadmorebutton;

  const query = `{
        products(filter: { sku: { eq: ${JSON.stringify(sku)} } }) {
          items {
            sku
            name
            description {
              html
            }
            image {
              label
              url
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
      createProductHTML(data.data.products.items[0], div);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
function initProductComponents() {
  const url = window.location.href;
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  const sku = params.get('product');
  fetchProductDetails(sku);
}

initProductComponents();

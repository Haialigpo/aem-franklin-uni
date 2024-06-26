// Function to initialize the component and make the HTTP request
function initProductListComponents() {
  // Select all div elements with the class 'product-list-container'
  const divs = document.querySelectorAll('.product-list-container');

  // Iterate over each div and perform the necessary operations
  divs.forEach((div) => {
    function createProductList(products) {
      console.log(products);
      let productListHTML = '';
      products.forEach((product) => {
        productListHTML += `
                          <div class="product-item">
                             <a href="${`pdp?product=${product.sku}`}" aria-label="View details for ${product.name}">
                              <img src="${`https://assets.unileversolutions.com/v1/${product.thumbnail.url}.png?im=AspectCrop=(400,400);Resize=(400,400)`}" alt="${product.thumbnail.label}">
                               <div>Ratings [TBD]</div>
                               <h2>${product.name}</h2>
                              <div class="product-description">${product.description.html}</div>
                              </a>
                          </div>
                      `;
      });

      div.querySelector('.product-list').innerHTML += productListHTML;
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
        query {
          products(currentPage: ${page}, pageSize: ${size}, filter: {category_uid: {eq: "{\\"sort_by\\":\\"relevance\\"}"}}, sort: {price: ASC}) {
            total_count
            items {
              __typename
              sku
              name
              description {
                html
              }
              image {
                label
                url
              }
              thumbnail {
                label
                url
              }
              url_key
              url_rewrites {
                url
              }
              media_gallery {
                __typename
                disabled
                url
                label
                position
              }
              categories {
                __typename
                id
                name
                image
              }
              smartProductID_custom_: smartProductID
              localized_sku_custom_: localized_sku
              brand_custom_: brand
              category_custom_: category
              productVariants_custom_: custom_retailerVariantsSummary
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
          console.log(data);
          createProductList(data.data.products.items);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    fetchAndDisplayProducts();
  });
}

initProductListComponents();

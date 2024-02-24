const detailsContainer = document.querySelector(".product-specific");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// Authentication credentials
const consumerKey = "ck_6e4154ea477ad3e58d960758f2dac91660d0d8a9";
const consumerSecret = "cs_17d2c393632a0a320647a43a1195595d7f879bea";

// URL to fetch a specific product
const baseUrl = "https://www.veronika-codes.one/wp-json/wc/v3/products";
const productUrl = `${baseUrl}/${id}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

// Functions to fetch product and create HTML
async function getJacket() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();
        createHtml(details);
        setupAddToBasketButton(details);
    } catch (error) {
        detailsContainer.innerHTML = message("error");
    }
}

getJacket();

function createHtml(details) {
    detailsContainer.innerHTML = `<section class="product-ronja">
                                    <img src=${details.images[0].src} alt="Product image"/>
                                    <div class="product-ronja-price">  
                                        <h1>${details.name}</h1>
                                        <div>
                                            <p class="price">${details.price}</p>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="cta-button product-ronja-button" id="addToBasketButton">Add to shopping bag</a>
                                    <div class="product-ronja-text">${details.description}</div>
                                </section>`;
}

function setupAddToBasketButton(details) {
    const addToBasketButton = document.getElementById("addToBasketButton");
    addToBasketButton.addEventListener("click", function () {
        addToShoppingBag(details);
    });
}

function addToShoppingBag(productDetails) {
    // Retrieve existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the current product to the cart
    cartItems.push(productDetails);

    // Save the updated cart items back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Redirect to the checkout page
    window.location.href = "../Clothing/checkout.html";
}
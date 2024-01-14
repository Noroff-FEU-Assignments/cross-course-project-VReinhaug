const detailsContainer = document.querySelector(".product-specific");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

async function getJacket() {
    try {
        const response = await fetch(url);
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
                                    <img src=${details.image} alt="Product image"/>
                                    <div class="product-ronja-price">  
                                        <h1>${details.title}</h1>
                                        <div>
                                            <p class="price">${details.price}</p>
                                        </div>
                                    </div>
                                    <div class="product-ronja-color">
                                        <p>Color: ${details.baseColor}</p>
                                    </div>
                                    <a href="javascript:void(0);" class="cta-button product-ronja-button" id="addToBasketButton">Add to shopping bag</a>
                                    <p class="product-ronja-text">${details.description}</p>
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



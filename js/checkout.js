const cartContainer = document.querySelector(".basket-items");
const totalPriceContainer = document.querySelector(".total-price");

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartContainer.innerHTML = "";
    let totalPrice = 0;

    if (cartItems.length > 0) {
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.innerHTML = ` <section class="basket">
                                    <div>
                                        <img src="${item.image}" alt="${item.title}">
                                    </div>
                                    <div>
                                        <h3>${item.title}</h3>
                                        <p>Colour: ${item.baseColor}</p>
                                    </div>
                                    <i class="fa-solid fa-trash-can fa-2xl trashcan" data-index="${index}"></i>
                                    <div class="border"></div>
                                    <div class="price-text">
                                        <p>Price:</p>
                                    </div>
                                    <div class="prices">
                                        <p>${item.price}</p>
                                    </div>
                                </section>`;

            cartContainer.appendChild(cartItem);

            // Add the item price to the total
            totalPrice += parseFloat(item.price);
        });

        // Add event listeners to trashcan icons
        const trashcanIcons = document.querySelectorAll(".trashcan");
        trashcanIcons.forEach((trashcan) => {
            trashcan.addEventListener("click", removeCartItem);
        });
    } else {
        cartContainer.innerHTML = "<p>Your shopping cart is empty.</p>";
    }

    // Display the total price at the bottom
    totalPriceContainer.innerHTML = `<div class="border"></div>
                                    <p>Total Price: ${totalPrice.toFixed(2)}</p>`;
}

function removeCartItem(event) {
    const indexToRemove = event.target.dataset.index;

    // Retrieve existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Remove the item at the specified index
    cartItems.splice(indexToRemove, 1);

    // Save the updated cart items back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Update the displayed cart items
    displayCartItems();
}

// Call the function to display cart items when the cart page loads
displayCartItems();

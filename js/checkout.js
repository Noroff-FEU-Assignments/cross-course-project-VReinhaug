const cartContainer = document.querySelector(".basket-items");
const totalPriceContainer = document.querySelector(".total-price");

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    console.log(cartItems)

    cartContainer.innerHTML = "";
    let totalPrice = 0;

    if (cartItems.length > 0) {
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.innerHTML = ` <section class="basket">
                                    <div>
                                        <img src="${item.images[0].src}" alt="Product image">
                                    </div>
                                    <div>
                                        <h3>${item.name}</h3>
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

            totalPrice += parseFloat(item.price);
        });

        // Add event listener to trashcan icon
        const trashcanIcons = document.querySelectorAll(".trashcan");
        trashcanIcons.forEach((trashcan) => {
            trashcan.addEventListener("click", removeCartItem);
        });
    } else {
        cartContainer.innerHTML = "<p>Your shopping cart is empty.</p>";
    }

    // Display the total price
    totalPriceContainer.innerHTML = `<p>Total Price: ${totalPrice.toFixed(2)}</p>`;
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

displayCartItems();

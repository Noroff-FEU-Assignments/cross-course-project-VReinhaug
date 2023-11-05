const checkoutContainer = document.querySelector(".basket");

const url = "https://api.noroff.dev/api/v1/rainy-days/97e77845-a485-4301-827f-51b673d4230f";

async function getCheckoutJacket() {

    try{
        const response = await fetch(url);

        const checkoutJacket = await response.json();
        
        console.log(checkoutJacket);

        createHtml(checkoutJacket);

    }
    catch(error) {
        checkoutContainer.innerHTML = message ("error");
    }

        } 
        

getCheckoutJacket();

function createHtml(checkoutJacket) {
    const selectedSize = checkoutJacket.sizes[0];
    checkoutContainer.innerHTML =  `<h2 class="basket-headline">Your basket</h2>
                                        <div>
                                            <img src="${checkoutJacket.image}" alt="${checkoutJacket.title}">
                                        </div>
                                        <div>
                                            <h3>${checkoutJacket.title}</h3>
                                            <p>Colour: ${checkoutJacket.baseColor}</p>
                                            <p>Size: ${selectedSize}</p>
                                            <p>Items: 1</p>
                                        </div>
                                        <a href="../Clothing/Womens/jackets.html">
                                            <i class="fa-solid fa-trash-can fa-2xl trashcan"></i>
                                        </a>
                                        <div class="border"></div>
                                        <div class="price-text">
                                            <p>Price:</p>
                                            <p>Delivery price:</p>
                                            <p class="total">Total:</p>
                                        </div>
                                        <div class="prices">
                                            <p>${checkoutJacket.price}</p>
                                            <p class="free">Free</p>
                                            <p class="total">${checkoutJacket.price}</p>    
                                        </div>`;
    
}
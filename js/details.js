const detailsContainer = document.querySelector(".product-specific");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

async function getJacket() {

    try{
        const response = await fetch(url);

        const details = await response.json();
        
        createHtml(details);

    }
    catch(error) {
        detailsContainer.innerHTML = message ("error");
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
                                    <div class="product-ronja-size">
                                        <p>Sizes: ${details.sizes}</p>
                                    </div>
                                    <a href="../Clothing/checkout.html" class="cta-button product-ronja-button">Add to shopping bag</a>
                                    <p class="product-ronja-text">${details.description}</p>
                                </section>`;
    
}
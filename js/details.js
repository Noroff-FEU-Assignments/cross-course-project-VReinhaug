const detailsContainer = document.querySelector(".product-specific");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

console.log(url);

async function getJacket() {

    try{
        const response = await fetch(url);

        const details = await response.json();
        
        console.log(details);

        createHtml(details);

    }
    catch(error) {
        detailsContainer.innerHTML = message ("error", error);
        console.log(error);
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
                                    <p class="product-ronja-text"></p>
                                </section>`;
    
}
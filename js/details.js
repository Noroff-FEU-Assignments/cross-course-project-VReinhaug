const detailsContainer = document.querySelector(".product-ronja");

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
    detailsContainer.innerHTML =    `<img src=${details.image} alt="Product image"</img>
                                    <div class="product-ronja-price>
                                        <h1>${details.title}</h1>
                                        <div>
                                            <p>${details.price}</p>
                                        </div>
                                    </div>`;
    
}
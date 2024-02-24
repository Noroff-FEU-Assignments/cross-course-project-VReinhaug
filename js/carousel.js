const carouselContainer = document.querySelector(".carousel__info");

// URL to fetch products from
const baseUrl = "https://www.veronika-codes.one/wp-json/wc/v3/products/27";

// Authentication credentials
const consumerKey = "ck_6e4154ea477ad3e58d960758f2dac91660d0d8a9";
const consumerSecret = "cs_17d2c393632a0a320647a43a1195595d7f879bea";

// URL with authentication credentials
const urlWithCredentials = `${baseUrl}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

async function getSingleJacket() {

    try{
        const response = await fetch(urlWithCredentials);

        const jacket = await response.json();
        
        createHtml(jacket);

    }
    catch(error) {
        carouselContainer.innerHTML = message ("error");
    }

        } 
        

getSingleJacket();

function createHtml(jacket) {
    carouselContainer.innerHTML =  `<section class="carousel__info">
                                        <h2 class="carousel__h2">${jacket.name}</h2>
                                        <div class="carousel__product">
                                            <img src="${jacket.images[0].src}">
                                        </div>
                                        <a href="Clothing/product-details.html?id=${jacket.id}" class="cta-button carousel__button">Shop ${jacket.name}</a>
                                    </section>`;
    
}
// URL to fetch products from
const baseUrl = "https://www.veronika-codes.one/wp-json/wc/v3/products";

// Authentication credentials
const consumerKey = "ck_6e4154ea477ad3e58d960758f2dac91660d0d8a9";
const consumerSecret = "cs_17d2c393632a0a320647a43a1195595d7f879bea";

// URL with authentication credentials
const urlWithCredentials = `${baseUrl}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

const productContainer = document.querySelector(".product-list")

async function getJackets() {

    try{
        const response = await fetch(urlWithCredentials);

        const results = await response.json();
        
        productContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            if (results[i].categories[0].id === 22) {
                continue;
              
            }

            productContainer.innerHTML +=   `<a href="../product-details.html?id=${results[i].id}">
                                                <section class="products">
                                                    <img src="${results[i].images[0].src}" alt="${results[i].name}"/>
                                                    <div class="product-name">
                                                        <H2>${results[i].name}</H2>
                                                        <i class="fa-solid fa-heart fa-2xl favourite-heart"></i>    
                                                    </div>
                                                    <div class="product-info">
                                                        <div>
                                                            <p>$${results[i].price}</p>
                                                        </div>
                                                    </div>
                                                </section>
                                            </a>`;
            
        }

    }
    catch(error) {
        productContainer.innerHTML = message ("error");
    }

        }      

getJackets();
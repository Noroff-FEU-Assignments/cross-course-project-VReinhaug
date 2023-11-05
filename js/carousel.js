const carouselContainer = document.querySelector(".carousel__info");

const url = "https://api.noroff.dev/api/v1/rainy-days/97e77845-a485-4301-827f-51b673d4230f";

async function getSingleJacket() {

    try{
        const response = await fetch(url);

        const jacket = await response.json();
        
        console.log(jacket);

        createHtml(jacket);

    }
    catch(error) {
        carouselContainer.innerHTML = message ("error");
    }

        } 
        

getSingleJacket();

function createHtml(jacket) {
    carouselContainer.innerHTML =  `<section class="carousel__info">
                                        <h2 class="carousel__h2">${jacket.title}</h2>
                                        <div class="carousel__product">
                                            <img src="${jacket.image}" alt="${jacket.title}">
                                        </div>
                                        <a href="/Clothing/product-details.html?id=${jacket.id}" class="cta-button carousel__button">Shop ${jacket.title}</a>
                                    </section>`;
    
}
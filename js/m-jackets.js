const url = "https://api.noroff.dev/api/v1/rainy-days"

const productContainer = document.querySelector(".product-list")

async function getJackets() {

    try{
        const response = await fetch(url);

        const results = await response.json();
        
        console.log(results);

        productContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            if (results[i].gender === "Female") {
                continue;
                
            }


            productContainer.innerHTML +=   `<a href="../product-details.html?id=${results[i].id}">
                                                <section class="products">
                                                    <img src="${results[i].image}" alt="${results[i].title}"/>
                                                    <div class="product-name">
                                                        <H2>${results[i].title}</H2>
                                                        <i class="fa-solid fa-heart fa-2xl favourite-heart"></i>    
                                                    </div>
                                                    <div class="product-info">
                                                        <div>
                                                            <p>${results[i].baseColor}</p>
                                                        </div>
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
        console.log(error);
    }



        } 
        

getJackets();
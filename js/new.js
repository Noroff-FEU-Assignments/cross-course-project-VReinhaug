//URL to fetch products from
const baseUrl = "https://www.veronika-codes.one/wp-json/wc/v3/products";

//Authentication credentials
const consumerKey = "ck_6e4154ea477ad3e58d960758f2dac91660d0d8a9";
const consumerSecret = "cs_17d2c393632a0a320647a43a1195595d7f879bea";

// URL with authentication credentials
const urlWithCredentials = "${baseUrl}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}";


async function getProducts(url){
    const response = await fetch(url);
    const products = response.json();
    console.log(products);
}

getProducts(urlWithCredentials);
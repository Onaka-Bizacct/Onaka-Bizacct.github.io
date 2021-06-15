'use strict';
/*const url = new URL(window.location.href);
let params = url.searchParams;
*/
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const getItem = params.get('item');
console.log(getItem);

const jsonURL = "./Script/products.json";
const product_img = document.querySelector('.product-image');
const productDOM = document.querySelector('.product-info');

async function resJson() {
    const res = await fetch(jsonURL);
    const data = await res.json();
    return data;
}

async function displayProducts(products) {
    let img = '';
    let result = '';
    products.forEach(product => {
        if (product.title === getItem) {
            img += `<img src="${product.image}" alt="${product.type}">`
            result += `
            <!--アイテム-->
            <h3 class="product-title">${product.title}</h3>
            <p class="product-category">カテゴリー：${product.type}</p>
            <p class="product-price">¥${product.price}</p>
            <div class="cart-btn link-btn"><a href="#">カートに追加</a></div>
            <div class="favorite-btn link-btn"><a href="#">&#9825;お気に入り登録</a></div>
            <p class="definition">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, dignissimos
                        molestias. Natus inventore possimus in eum pariatur suscipit, cumque quam non iure laborum? Cum
                        tenetur expedita neque culpa sit iusto!</p>
        `;
        }
    });
    product_img.innerHTML = img;
    productDOM.innerHTML = result;
}

async function allProducts() {
    const products = await resJson();
    await displayProducts(products);
}
allProducts();
"use strict";
let container = document.createElement('div');
container.classList.add('container');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((data) => {
    const { carts } = data;
    for (let cart of carts) {
        const { id, products, total, discountedTotal, userId, totalProducts, totalQuantity } = cart;
        let cartDiv = document.createElement('div');
        cartDiv.classList.add('cart');
        let idDiv = document.createElement('div');
        idDiv.innerText = `Cart number : ${id}`;
        let productsDiv = document.createElement('ul');
        productsDiv.innerText = 'Products:';
        for (let product of products) {
            let title = document.createElement('li');
            title.innerText = product.title;
            productsDiv.appendChild(title);
        }
        let totalDiv = document.createElement('div');
        totalDiv.innerText = `Total sum: ${total}`;
        let discountedTotalDiv = document.createElement('div');
        discountedTotalDiv.innerText = `Total discount: ${discountedTotal}`;
        let userIdDiv = document.createElement('div');
        userIdDiv.innerText = `UserId: ${userId}`;
        let totalProductsDiv = document.createElement('div');
        totalProductsDiv.innerText = `Total products: ${totalProducts}`;
        let totalQuantityDiv = document.createElement('div');
        totalQuantityDiv.innerText = `Total quantity: ${totalQuantity}`;
        cartDiv.append(idDiv, productsDiv, totalDiv, discountedTotalDiv, userIdDiv, totalProductsDiv, totalQuantityDiv);
        container.appendChild(cartDiv);
    }
});
document.body.appendChild(container);

// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
interface ICart {
    id: number,
    products: [
        {title:string}
    ],
    total:number,
    discountedTotal:number,
    userId:number,
    totalProducts: number,
    totalQuantity:number
}


let container:HTMLDivElement = document.createElement('div');
container.classList.add('container');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((data:{carts:ICart[]}) => {
    const {carts} = data;
        console.log(carts);
        for (let cart of carts) {
           const {id, products, total, discountedTotal, userId, totalProducts, totalQuantity} = cart;
           let cartDiv:HTMLDivElement = document.createElement('div');
           cartDiv.classList.add('cart')
           let idDiv:HTMLDivElement = document.createElement('div');
           idDiv.innerText = `Cart number : ${id}`

           let productsDiv:HTMLUListElement = document.createElement('ul');
           productsDiv.innerText = 'Products:'
           for (let product of products){
               let title:HTMLLIElement = document.createElement('li');
               title.innerText = product.title
               productsDiv.appendChild(title)
           }

           let totalDiv:HTMLDivElement = document.createElement('div');
           totalDiv.innerText = `Total sum: ${total}`;

           let discountedTotalDiv:HTMLDivElement = document.createElement('div');
           discountedTotalDiv.innerText = `Total discount: ${discountedTotal}`;

           let userIdDiv:HTMLDivElement = document.createElement('div');
           userIdDiv.innerText = `UserId: ${userId}`;

           let totalProductsDiv:HTMLDivElement = document.createElement('div');
           totalProductsDiv.innerText = `Total products: ${totalProducts}`;

           let totalQuantityDiv:HTMLDivElement = document.createElement('div');
           totalQuantityDiv.innerText = `Total quantity: ${totalQuantity}`;
           cartDiv.append(idDiv, productsDiv, totalDiv, discountedTotalDiv, userIdDiv, totalProductsDiv, totalQuantityDiv)
            container.appendChild(cartDiv)
        }

    });
document.body.appendChild(container)

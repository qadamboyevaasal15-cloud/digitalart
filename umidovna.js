const products = [
    {
        id:1,
        name:"Golden Elixir",
        price:"$120",
        image:"images/p1.jpg",
        desc:"A luxurious blend of amber and vanilla."
    },
    {
        id:2,
        name:"Midnight Oud",
        price:"$150",
        image:"images/p2.jpg",
        desc:"Deep woody fragrance for bold personalities."
    },
    {
        id:3,
        name:"Royal Essence",
        price:"$135",
        image:"images/p3.jpg",
        desc:"Elegant floral notes with a musky base."
    }
];

let cart = 0;

function displayProducts(containerId){
    const container = document.getElementById(containerId);
    if(!container) return;

    container.innerHTML = products.map(p=>`
        <div class="product-card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button onclick="viewProduct(${p.id})">View</button>
        </div>
    `).join('');
}

function viewProduct(id){
    localStorage.setItem("selectedProduct", id);
    window.location.href="product.html";
}

function loadProductDetail(){
    const id = localStorage.getItem("selectedProduct");
    if(!id) return;

    const product = products.find(p=>p.id == id);

    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-desc").innerText = product.desc;
    document.getElementById("product-image").src = product.image;
}

function addToCart(){
    cart++;
    alert("Product added to cart!");
}

displayProducts("product-container");
displayProducts("shop-products");
loadProductDetail();
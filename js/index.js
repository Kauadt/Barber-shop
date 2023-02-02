const items = [
    { code: 0, name: 'Esponja Nudred', img: '../images/esponja-nudred.jpg', amount: 0 },
    { code: 1, name: 'Pomada Modeladora', img: '../images/pomada-modeladora.jpg', amount: 0 },
    { code: 2, name: 'Kit Barba', img: '../images/kit-barba.jpg', amount: 0 },
    { code: 3, name: 'Matizador', img: '../images/matizador.jpg', amount: 0 },
    { code: 4, name: 'Laque Cabelo', img: '../images/laque-cabelo.jpeg', amount: 0 }
];



initializeStore = () => {
    containerProducts = document.getElementById('slider');
    items.forEach((val) => {
        containerProducts.innerHTML += `

<div class="card-slider">
    <div class="card-slider-img">
        <img src="images/`+ val.img + `" alt="` + val.name + `"/>
    </div>
    <nav class="bar">
        <div class="name-product">
            <p>`+ val.name + `</p>    
        </div>
        <div class="price-product">
              
        </div>
        <div class="shopping-cart" id="cartArea">
            <img src="./images/market-car.png" alt="Imagem carrinho de compras" />
            <a key="`+ val.code + `" href="#cartArea">Adicionar ao carrinho</a>    
        </div>    
    </nav>
</div>

`;
    })
}

initializeStore();

updateCart = () => {
    containerCarrinho = document.getElementById('shop');
    containerCarrinho.innerHTML = "";
    items.map((val) => {
        if (val.amount > 0) {
            containerCarrinho.innerHTML += `            
    
<div class="card-lista">
    <div class="name-item">`+ val.name + `</div>
    <div class="price-item">QTD  #`+ val.amount + `</div>
<div class="button-item">
    <button class="remove">
            Remover
    </button>
</div>
</div>

`;
        }
    })
}

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        items[key].amount++;
        updateCart();
        return false;
    })
}

const mainImage = document.getElementById('main--image');
const allThumbnail = document.querySelectorAll(".all--images");
const borderStyle = document.querySelectorAll(".border");
const quantidity = document.getElementById('quantidity');
const iconMinus = document.getElementsByClassName('icon--minus');
const iconPlus = document.getElementsByClassName('icon--plus');
const cartIcon = document.getElementsByClassName('cart--notification');
const cartBadge = document.getElementsByClassName('badge');
const cartBox = document.getElementById('cart--box');
const addCartButton = document.getElementsByClassName('add--to--cart');
const cartValueandQuantidity = document.getElementsByClassName('value--and--multipler');
const cartTotal = document.getElementsByClassName("cart--total");
const clearCart = document.getElementsByClassName('delete');
const cartEmpty = document.getElementById("cart--empty");
const cartFull = document.getElementById("container");
const iconMenu = document.querySelectorAll(".icon--menu, .close--menu");
const acessMenu = document.getElementsByClassName("nav--list--mobile");

let selectedImage = "images/image-product-1.jpg" 
let value = 0;
let cartQuantidity = 0;

//add image in the principal box
function setImage () {
    mainImage.src = selectedImage;
}

setImage();

// id value is image link
for (let i = 0; i < allThumbnail.length; i++) {

    allThumbnail[i].addEventListener('click', () => {
        var id = allThumbnail[i].id;
        selectedImage = ("images/" + id + ".jpg");
        setImage();
        clearClassListThumbnail();
        allThumbnail[i].classList.add("all--images--active");
        borderStyle[i].classList.add("border--active");

    })

}

//remove filter and border thumbnail
function clearClassListThumbnail () {
    for (let i = 0; i < allThumbnail.length; i++) {
        
        allThumbnail[i].classList.remove("all--images--active");
        borderStyle[i].classList.remove("border--active");
                
    }
}

// add numer itens to add in the cart
function setCartItens () {
    quantidity.innerHTML = value;
}

setCartItens();

iconMinus[0].addEventListener('click', () => {
    
    if (value > 0 ) { 
        value--;
        quantidity.innerHTML = value;
    }
})

iconPlus[0].addEventListener('click', ()=> {
   
    if (value >= 0 ) { 
        value++;
        setCartItens();
    }
})

//open cart box on click
cartIcon[0].addEventListener('click', () => {
    cartBox.classList.toggle("cart--box--active");
})

//function add price, quantidity and total value in cart box
function totalValue () {
    cartValueandQuantidity[0].innerHTML = '$125.00 x ' + cartQuantidity + " ";
    cartTotal[0].innerHTML = " $" + (125.00 * cartQuantidity).toFixed(2);
}

//add quantidity to cart on click in add to cart button
addCartButton[0].addEventListener('click', () => {

        cartQuantidity = cartQuantidity + value;        

        cartBadge[0].innerHTML = cartQuantidity;
        totalValue();
        cartFull.classList.replace('container', 'container--active');
        cartEmpty.classList.replace('cart--empty--active','cart--empty');

})

//clear cart value on click
clearCart[0].addEventListener('click', () => {
    value = 0;
    cartQuantidity = 0;
    quantidity.innerHTML = value;
    cartBadge[0].innerHTML = ""
    totalValue();
    cartFull.classList.replace('container--active', 'container');
    cartEmpty.classList.replace('cart--empty','cart--empty--active');

})

//open and close menu on icon click
for (let i = 0; i < iconMenu.length; i++) {
    iconMenu[i].addEventListener('click', () => {

        acessMenu[0].classList.toggle("nav--list--mobile--active");
    })
    
}


//modify image in mobile on click in arrow
let cont = 1;

const previousArrow = document.getElementById("previous");
const nextArrow = document.getElementById ("next");

previousArrow.addEventListener('click', () => {

    if (cont > 1) {
        cont--;
        selectedImage = "images/image-product-" + cont + ".jpg";
        setImage(); 
    }
})

nextArrow.addEventListener('click', () => {

    if (cont < 4) {
        cont++;
        selectedImage = "images/image-product-" + cont + ".jpg";
        setImage(); 
    }
})
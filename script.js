const mainImage = document.getElementById('main--image');
const allThumbnail = document.querySelectorAll(".all--images");
const quantidity = document.getElementById('quantidity');
const iconMinus = document.getElementsByClassName('icon--minus');
const iconPlus = document.getElementsByClassName('icon--plus');
let selectedImage = "images/image-product-1.jpg" 
const cartBadge = document.getElementsByClassName('badge');
const addCartButton = document.getElementsByClassName('add--to--cart');
const cartValueandQuantidity = document.getElementsByClassName('value--and--multipler');
const clearCart = document.getElementsByClassName('delete');

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

    })

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

//function add price, quantidity and total value in cart box
function totalValue () {
    cartValueandQuantidity[0].innerHTML = '$125.00 x ' + cartQuantidity + " " + "$" + (125.00 * cartQuantidity).toFixed(2);

}

addCartButton[0].addEventListener('click', () => {

        cartQuantidity = cartQuantidity + value;        

        cartBadge[0].innerHTML = cartQuantidity;
        totalValue();

})

clearCart[0].addEventListener('click', () => {
    value = 0;
    cartQuantidity = 0;
    quantidity.innerHTML = value;
    cartBadge[0].innerHTML = ""
    totalValue();

})


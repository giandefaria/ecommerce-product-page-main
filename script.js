const mainImage = document.getElementById('main--image');
const allThumbnail = document.querySelectorAll(".all--images");
const quantidity = document.getElementById('quantidity');
const iconMinus = document.getElementsByClassName('icon--minus');
const iconPlus = document.getElementsByClassName('icon--plus');
let selectedImage = "images/image-product-1.jpg" 

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


let value = 0;

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
        quantidity.innerHTML = value;
    }
    
})


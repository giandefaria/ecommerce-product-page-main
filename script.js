const mainImage = document.getElementById('main--image');

let selectedImage = "images/image-product-1.jpg" 

function setImage () {
    mainImage.src = selectedImage;
}

setImage();
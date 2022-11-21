const mainImage = document.getElementById('main--image');
const allThumbnail = document.querySelectorAll(".all--images");

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
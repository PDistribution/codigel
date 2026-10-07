let images = [
"co-image1.jpg",
"co-image2.jpg",
"co-image3.jpg",
"co-image4.jpg",
"co-image5.jpg",
"co-image6.jpg",
"co-image7.jpg",
"co-image8.jpg",
"co-image9.jpg",
"co-image10.jpg",
"co-image11.jpg",
"co-image12.jpg",
"co-image13.jpg",
"co-image14.jpg",
"co-image15.jpg",
"co-image16.jpg",
"co-image17.jpg",
"co-image18.jpg",
"co-image19.jpg",
"co-image20.jpg",
"co-image21.jpg",
"co-image22.jpg",
"co-image23.jpg",
"co-image24.jpg",
"co-image25.jpg",
"co-image26.jpg",
"co-image27.jpg",
"fabe lava.jpg"
]

let e = 0

let produit = document.getElementById("produit");
function agrandirImage() {
    produit.style.position = "fixed";
    produit.style.top = "0";
    produit.style.left = "0";
    produit.style.width = "100vw";
    produit.style.height = "100vh",
    produit.style.zIndex = "9999",
    produit.style.backgroundSize ="contain";
    produit.style.backgroundRepeat = "no-repeat";
    produit.style.backgroundPosition = "center";
    produit.style.backgroundColor = "whitesmoke";
}
    produit.onclick = agrandirImage;

function changeBg(){
    produit.style.backgroundImage = "url("+images[e]+")"
      produit.style.backgroundSize = "900px";

      produit.style.backgroundRepeat = "no-repeat"

      produit.style.backgroundPosition = "center"

      
      
    e++

    if (e==images.length){
        e=0
    }
}
setInterval(changeBg,3000)


let show_pictures = document.querySelector(".show_pictures");
let forward = document.querySelector(".forward");
let backward = document.querySelector(".backward");


let images;

if(localStorage.getItem("images")) {
   images = JSON.parse(localStorage.getItem("images"));
} else {
   images = ["https://i.postimg.cc/nrR0M4S1/download-1.jpg", 
                "https://i.postimg.cc/zXp1S66d/download.jpg", 
                "https://i.postimg.cc/bNfvF76p/images.jpg",
            "https://i.postimg.cc/4yVcwBJs/images-2.jpg"];

}

// let n = document.getElementById("img");

// function slider(){
//     if(indigo < images.length){
//         indigo += 1;
//     }
//     else{
//         indigo=1;
//     }
//     console.log(n);
//     n.innerHTML = "<img src="+images[indigo-1]+">";
   
// }
// setInterval(images, 2000);


let indigo = 0;
show_pictures.src = images[indigo]

function next() {

    show_pictures.src = images[indigo]
    indigo++;
    if(indigo >= images.length) {
         indigo = 0;
    }
    
}

function prev() {

    show_pictures.src = images[indigo]
    indigo--;
    if(indigo < 0) {
        indigo = images.length - 1;
        indigo = 0;
    }

}

function add() {
    let imgs = document.getElementById("img").value;
    if(imgs == "" || imgs == null) {
        return alert("Image Link cannot be empty.");
    }
    
    for(y = 0; y < images.length; y++);

        if(imgs == images[y]) {

           return alert("This image is already exist.");
        }
    console.log(imgs)

    images.push(imgs);
    
    localStorage.setItem("images", JSON.stringify(imgs));
}   


function removeImage() {
    images.splice(indigo, 1)
    localStorage.setItem("images", JSON.stringify(images))
    window.location.reload()
}


    // window.location.reload()

    // localStorage.remove(session);
    // localStorage.setItem('session', JSON.stringify(images)); 
    // document.querySelector("images").innerHTML = "Images: " + images


// removeItem = () => {
//     local.removeItem(index, 1);
// }

// const n = JSON.parse(localStorage.getItem("images")) || [];
// const index = n.findIndex(item => item.imdbId === par.imbdId); // in your case imbdId is unique value

// if(index !== -1) {
//     n.splice(index, 1); // removes the item from watchList based on the index
//     localStorage.setItem("images", JSON.stringify(n)); // updateing new watchList
// }


// function deleteItem() {
//     localStorage.removeItem("images");
//   }
  
//   function displayItem() {
//     let x = localStorage.getItem("images");
//     document.getElementById("demo").innerHTML = x;
//   }
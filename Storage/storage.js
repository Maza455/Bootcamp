let images;

if(localStorage.getItem("images")) {
    images = JSON.parse(localStorage.getItem("images"));
} else {
    images = [
       "https://i.postimg.cc/jdKS5psx/5QpPfOY.webp",
       "https://i.postimg.cc/YCP71Zwm/A.jpg",
       "https://i.postimg.cc/3r1PXVXJ/istockphoto-1415186993-170667a.jpg"

]

}

let show = document.querySelector("#img")
let i = 0;
show.src = images[i]

function next() {
    i++;
    if(i >= images.length) {
        i=0;
    }
    show.src = images[i];
}

function prev() {
    i--;
    if(i < 0) {
        i= images.length - 1;
    }
    show.src = images[i];
}

function add() {
    let img = document.querySelector(".new-img").value;
    // let z = images.some(ele => ele)
    //     if()
    //         alert("Image is already exist")
    images.push(img);
    localStorage.setItem("images", JSON.stringify(images))
}
function cutCake() {
    document.getElementById("msg").style.display = "block";
}

function openBox() {
    document.getElementById("gallery").style.display = "flex";
    startSlideshow();
}

let index = 0;

function startSlideshow() {
    showSlide();
    setInterval(showSlide, 3000);
}

function showSlide() {
    let photos = document.querySelectorAll(".photo");
    let captions = document.querySelectorAll(".caption");

    photos.forEach((p, i) => {
        p.style.display = "none";
        captions[i].style.display = "none";
    });

    photos[index].style.display = "block";
    captions[index].style.display = "block";

    index = (index + 1) % photos.length;
}

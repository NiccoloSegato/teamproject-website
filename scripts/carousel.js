const images = ["services-1.jpg", "services-2.jpg"];
let currentImage = 0;

function nextCarousel() {
    const carousel = document.getElementById('ch-sub');
    const carouselTitle = document.getElementById('ch-sub-title');

    setInterval(() => {
        carousel.src = 'images/' + images[currentImage];
        carouselTitle.innerHTML = images[currentImage];
        if (currentImage === images.length - 1) {
            currentImage = 0;
        }
        else {
            currentImage++;
        }
    }, 2000);
}
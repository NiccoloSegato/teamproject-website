// From 1 to 33
let currentImage = 1;

function nextCarousel() {
    const carousel = document.getElementById('ch-sub');
    const carouselTitle = document.getElementById('ch-sub-title');
    const carouselSubtitle = document.getElementById('ch-sub-counter');

   if(currentImage === 33) {
       currentImage = 1;
   }
    else {
         currentImage++;
    }

    carousel.style.background = "linear-gradient(transparent, #1f1f1fd1), url(\"assets/images/case-history/" + currentImage + '.jpg") center/cover';
    carouselTitle.innerHTML = 'Case History ' + currentImage;
    carouselSubtitle.innerHTML = currentImage + ' di 33';
}

function previousCarousel() {
    const carousel = document.getElementById('ch-sub');
    const carouselTitle = document.getElementById('ch-sub-title');
    const carouselSubtitle = document.getElementById('ch-sub-counter');

    if(currentImage === 1) {
        currentImage = 33;
    }
    else {
        currentImage--;
    }

    carousel.style.background = "linear-gradient(transparent, #1f1f1fd1), url(\"assets/images/case-history/" + currentImage + '.jpg") center/cover';
    carouselTitle.innerHTML = 'Case History ' + currentImage;
    carouselSubtitle.innerHTML = currentImage + ' di 33';
}
// Struttura dati con all'interno un elenco di url di immagini, la loro categoria e la loro descrizione
let dictionary = [
    {
        url: 'assets/images/case-history/1.jpg',
        category: [2, 5],
        title: 'Casinò Municipale di Sanremo',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/2.jpg',
        category: [0, 1],
        title: 'Palazzo Buriani - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/3.jpg',
        category: [4],
        title: 'IFM Ferrara',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/4.jpg',
        category: [1],
        title: 'Villa Storica - Molinella (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/5.jpg',
        category: [4],
        title: 'Webasto Group - Molinella (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/6.jpg',
        category: [4],
        title: 'IFM Ferrara',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/7.jpg',
        category: [2, 5],
        title: 'Casinò Municipale di Sanremo',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/8.jpg',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/9.jpg',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/10.jpg',
        category: [4],
        title: 'Realizzazione di nuovi capannoni - Molinella (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/11.jpg',
        category: [4],
        title: 'Magneti Marelli S.p.A. - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/12.jpg',
        category: [4],
        title: 'Plastic Components and Modules Automotive - Chivasso (TO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/13.jpg',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/14.jpg',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/15.jpg',
        category: [3, 4],
        title: 'BRT S.p.A. - Pieve Emanuele (MI)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/16.jpg',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/17.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/18.jpg',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/19.jpg',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/20.jpg',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/21.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/22.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/23.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/24.jpg',
        category: [3, 4],
        title: 'BRT S.p.A. - Pieve Emanuele (MI)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/25.jpg',
        category: [1],
        title: 'Ex Stabilimento Gazzoni - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/26.jpg',
        category: [4],
        title: 'La Cicogna - San Lazzaro di Savena (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/27.jpg',
        category: [4, 5],
        title: 'Euros S.r.l. - Castel San Pietro Terme (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/28.jpg',
        category: [1, 2],
        title: 'Casinò Municipale di Sanremo',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/29.jpg',
        category: [0, 1],
        title: 'Palazzo Buriani - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/30.jpg',
        category: [0, 1],
        title: 'Nuovi edifici residenziali - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/31.jpg',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/32.jpg',
        category: [3],
        title: 'Dr. Max BDC s.r.o. - Telgate (BG)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/33.jpg',
        category: [1, 3],
        title: 'Pengo S.p.A. - Bassano del Grappa (VI)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/34.jpg',
        category: [6],
        title: 'Nuovo fabbricato residenziale - Medolla (MO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/35.jpg',
        category: [6],
        title: 'Nuovo fabbricato residenziale - Medolla (MO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/36.jpg',
        category: [6],
        title: 'Rinforzo di fabbricato storico - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/37.jpg',
        category: [6],
        title: 'Recupero di fabbricato industriale - San Lazzaro di Savena (BO)',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/38.jpg',
        category: [6],
        title: 'Ristrutturazione di fabbricato residenziale - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/39.jpg',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/40.jpg',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/41.jpg',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/42.jpg',
        category: [6],
        title: 'Magneti Marelli S.p.A. - Bologna',
        description: 'Da generarere descrizione'
    },
    {
        url: 'assets/images/case-history/43.jpg',
        category: [6],
        title: 'Euros S.r.l. - Castel San Pietro Terme (BO)',
        description: 'Da generarere descrizione'
    }
];

// From 1 to 33
let currentImage = 1;

function nextCarousel() {
    const carousel = document.getElementById('ch-right');
    const carouselTitle = document.getElementById('ch-left-title');
    const carouselSbtl = document.getElementById('ch-left-subtitle');
    const carouselSubtitle = document.getElementById('ch-left-counter');

   if(currentImage === 43) {
       currentImage = 1;
   }
    else {
         currentImage++;
    }

    // Iterate through dictionary to find the image with the current index
    let imageData = dictionary[currentImage - 1]; // -1 because array is zero-indexed
    
    carousel.style.background = "url(\"" + imageData.url + "\") center/cover";
    carouselTitle.innerHTML = imageData.title;
    carouselSbtl.innerHTML = imageData.description;
    carouselSubtitle.innerHTML = currentImage + ' di 43';
    if(currentImage === 37) {
        // Align bottom of image object
        carousel.style.backgroundPosition = "bottom";
    }
}

function previousCarousel() {
    const carousel = document.getElementById('ch-right');
    const carouselTitle = document.getElementById('ch-left-title');
    const carouselSbtl = document.getElementById('ch-left-subtitle');
    const carouselSubtitle = document.getElementById('ch-left-counter');

    if(currentImage === 1) {
        currentImage = 43;
    }
    else {
        currentImage--;
    }
    
    // Iterate through dictionary to find the image with the current index
    let imageData = dictionary[currentImage - 1]; // -1 because array is zero-indexed

    carousel.style.background = "url(\"" + imageData.url + "\") center/cover";
    carouselTitle.innerHTML = imageData.title;
    carouselSbtl.innerHTML = imageData.description;
    carouselSubtitle.innerHTML = currentImage + ' di 43';
    if(currentImage === 37) {
        // Align bottom of image object
        carousel.style.backgroundPosition = "bottom";
    }
}
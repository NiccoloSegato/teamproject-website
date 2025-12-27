// Struttura dati con all'interno un elenco di url di immagini, la loro categoria e la loro descrizione
let dictionary = [
    {
        url: 'assets/images/case-history/1.webp',
        category: [2, 5],
        title: 'Casinò Municipale di Sanremo',
        description: 'Calcolo di resistenza al fuoco per l’intera sala da gioco e intervento di ammodernamento della sala De Santis, con soluzioni integrate per sicurezza, comfort e aggiornamento degli spazi.'
    },
    {
        url: 'assets/images/case-history/2.webp',
        category: [0, 1],
        title: 'Palazzo Buriani - Bologna',
        description: 'Restauro della corte interna del Palazzo rinascimentale Buriani Genova (XV sec.)'
    },
    {
        url: 'assets/images/case-history/3.webp',
        category: [4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/4.webp',
        category: [1],
        title: 'Villa Storica - Molinella (BO)',
        description: 'Ristrutturazione edilizia della villa del direttore del Villaggio dello zuccherificio di Molinella (1923).'
    },
    {
        url: 'assets/images/case-history/5.webp',
        category: [4],
        title: 'Webasto Group - Molinella (BO)',
        description: 'Progettazione e direzione lavori strutturale, coordinamento della sicurezza per la nuova realizzazione della galleria climatica.'
    },
    {
        url: 'assets/images/case-history/6.webp',
        category: [4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/7.webp',
        category: [2, 5],
        title: 'Casinò Municipale di Sanremo',
        description: 'Calcolo di resistenza al fuoco per l’intera sala da gioco e intervento di ammodernamento della sala De Santis, con soluzioni integrate per sicurezza, comfort e aggiornamento degli spazi.'
    },
    {
        url: 'assets/images/case-history/8.webp',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Coordinamento della sicurezza per opere di restauro e consolidamento sismico della Chiesa di S. Croce a Selva Malvezzi (BO).'
    },
    {
        url: 'assets/images/case-history/9.webp',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Coordinamento della sicurezza per opere di restauro e consolidamento sismico della Chiesa di S. Croce a Selva Malvezzi (BO).'
    },
    {
        url: 'assets/images/case-history/10.webp',
        category: [4],
        title: 'Realizzazione di nuovi capannoni - Molinella (BO)',
        description: 'Coordinamento della sicurezza per la nuova costruzione di capannoni industriali.'
    },
    {
        url: 'assets/images/case-history/11.webp',
        category: [4],
        title: 'Magneti Marelli S.p.A. - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampiamento dell\'impianto idrico di protezione antincendio dell\'intero stabilimento.'
    },
    {
        url: 'assets/images/case-history/12.webp',
        category: [4],
        title: 'Plastic Components and Modules Automotive - Chivasso (TO)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampliamento dello stabilimento esistente.'
    },
    {
        url: 'assets/images/case-history/13.webp',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/14.webp',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/15.webp',
        category: [3, 4],
        title: 'BRT S.p.A. - Pieve Emanuele (MI)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampliamento di nuovo polo logistico.'
    },
    {
        url: 'assets/images/case-history/16.webp',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/17.webp',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/18.webp',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/19.webp',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/20.webp',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/21.webp',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/22.webp',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/23.webp',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/24.webp',
        category: [3, 4],
        title: 'BRT S.p.A. - Pieve Emanuele (MI)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampliamento di nuovo polo logistico.'
    },
    {
        url: 'assets/images/case-history/25.webp',
        category: [1],
        title: 'Ex Stabilimento Gazzoni - Bologna',
        description: 'Calcolo della vulnerabilità sismica dell\'intero aggregato edilizio.'
    },
    {
        url: 'assets/images/case-history/26.webp',
        category: [4],
        title: 'La Cicogna - San Lazzaro di Savena (BO)',
        description: 'Calcolo della vulnerabilità sismica dell\'intero comparto industriale.'
    },
    {
        url: 'assets/images/case-history/27.webp',
        category: [4, 5],
        title: 'Euros S.r.l. - Castel San Pietro Terme (BO)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzazione di nuovo fabbricato al servizio della vedita di veicoli industriali.'
    },
    {
        url: 'assets/images/case-history/28.webp',
        category: [1, 2],
        title: 'Casinò Municipale di Sanremo',
        description: 'Calcolo di resistenza al fuoco per l’intera sala da gioco e intervento di ammodernamento della sala De Santis, con soluzioni integrate per sicurezza, comfort e aggiornamento degli spazi.'
    },
    {
        url: 'assets/images/case-history/29.webp',
        category: [0, 1],
        title: 'Palazzo Buriani - Bologna',
        description: 'Restauro della corte interna del Palazzo rinascimentale Buriani Genova (XV sec.)'
    },
    {
        url: 'assets/images/case-history/30.webp',
        category: [0, 1],
        title: 'Nuovi edifici residenziali - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzazione di nuovi edifici residenziali in Bologna.'
    },
    {
        url: 'assets/images/case-history/31.webp',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Coordinamento della sicurezza per opere di restauro e consolidamento sismico della Chiesa di S. Croce a Selva Malvezzi (BO).'
    },
    {
        url: 'assets/images/case-history/32.webp',
        category: [3],
        title: 'Dr. Max BDC s.r.o. - Telgate (BG)',
        description: 'Coordinamento della sicurezza per le attività di apertura di nuovo magazzino.'
    },
    {
        url: 'assets/images/case-history/33.webp',
        category: [1, 3],
        title: 'Pengo S.p.A. - Bassano del Grappa (VI)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzazione di nuovo manufatti per l\'adeguamento antincendio magazzini esistenti.'
    },
    {
        url: 'assets/images/case-history/34.webp',
        category: [6],
        title: 'Nuovo fabbricato residenziale - Medolla (MO)',
        description: 'Progettazione, direzione lavori strutturale e coordinamento della sicurezza per la realizzazione di un nuovo fabbricato residenziale in Medolla (MO).'
    },
    {
        url: 'assets/images/case-history/35.webp',
        category: [6],
        title: 'Nuovo fabbricato residenziale - Medolla (MO)',
        description: 'Progettazione, direzione lavori strutturale e coordinamento della sicurezza per la realizzazione di un nuovo fabbricato residenziale in Medolla (MO).'
    },
    {
        url: 'assets/images/case-history/36.webp',
        category: [6],
        title: 'Rinforzo di fabbricato storico - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza con cambio di destinazione d\'uso per fabbricato sito in Bologna.'
    },
    {
        url: 'assets/images/case-history/37.webp',
        category: [6],
        title: 'Recupero di fabbricato industriale - San Lazzaro di Savena (BO)',
        description: 'Progettazione strutturale per il recupero di un fabbricato industriale con cambio di destinazione d\'uso in San Lazzaro di Savena (BO).'
    },
    {
        url: 'assets/images/case-history/38.webp',
        category: [6],
        title: 'Ristrutturazione di fabbricato residenziale - Bologna',
        description: 'Progettazione e direzione lavori strutturale per la ristrutturazione di un fabbricato residenziale sito in Bologna.'
    },
    {
        url: 'assets/images/case-history/39.webp',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/40.webp',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/41.webp',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/42.webp',
        category: [6],
        title: 'Magneti Marelli S.p.A. - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampiamento dell\'impianto idrico di protezione antincendio dell\'intero stabilimento.'
    },
    {
        url: 'assets/images/case-history/43.webp',
        category: [6],
        title: 'Euros S.r.l. - Castel San Pietro Terme (BO)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzazione di nuovo fabbricato al servizio della vedita di veicoli industriali.'
    },
    {
        url: 'assets/images/case-history/44.webp',
        category: [6],
        title: 'Coca-Cola HBC Italia S.r.l. - Rionero in Vulture (PZ)',
        description: 'Calcolo della vulnerabilità sismica del sito produttivo di Rionero in Vulture (PZ).'
    },
    {
        url: 'assets/images/case-history/45.webp',
        category: [6],
        title: 'IVECO Polo Tecnico - Torino',
        description: 'Calcolo della vulnerabilità sismica del sito produttivo di Torino.'
    },
    {
        url: 'assets/images/case-history/46.webp',
        category: [2, 6],
        title: 'Baglioni Hotel Luna - Venezia',
        description: 'Calcolo di resistenza al fuoco dell\'intera struttura ricettiva risalente al 1118 adiacente a Piazza San Marco.'
    },
    {
        url: 'assets/images/case-history/47.webp',
        category: [2],
        title: 'Silo S.p.A. - Firenze',
        description: 'Calcolo della capacità portante residua di fabbricato danneggiato da incendio generalizzato completo di stima dei danni e budget di ricostruzione.'
    },
    {
        url: 'assets/images/case-history/48.webp',
        category: [2],
        title: 'Silo S.p.A. - Firenze',
        description: 'Calcolo della capacità portante residua di fabbricato danneggiato da incendio generalizzato completo di stima dei danni e budget di ricostruzione.'
    },
    {
        url: 'assets/images/case-history/49.webp',
        category: [2],
        title: 'Salumificio Fratelli Coati S.p.A. - Negrar (VR)',
        description: 'Direzione lavori e coordinamento della sicurezza delle opere di demolizione e bonifica di sito produttivo danneggiato da incendio.'
    },
    {
        url: 'assets/images/case-history/50.webp',
        category: [2],
        title: 'Gruppo Unipol - Bologna',
        description: 'Calcolo di resistenza al fuoco delle strutture dell\'intero complesso nominato Porta d\'Europa a Bologna.'
    },
    {
        url: 'assets/images/case-history/51.webp',
        category: [2],
        title: 'Gruppo Unipol - Bologna',
        description: 'Calcolo di resistenza al fuoco delle strutture dell\'intero complesso nominato Porta d\'Europa a Bologna.'
    },
    {
        url: 'assets/images/case-history/52.webp',
        category: [2],
        title: 'Gruppo Unipol - Bologna',
        description: 'Calcolo di resistenza al fuoco delle strutture dell\'intero complesso nominato Porta d\'Europa a Bologna.'
    },
    {
        url: 'assets/images/case-history/53.webp',
        category: [2],
        title: 'Pack Center S.r.l. - Imola (BO)',
        description: 'Calcolo di resistenza al fuoco delle strutture del magazzino aziendale e progettazione delle opere di protezione antincendio.'
    },
    {
        url: 'assets/images/case-history/54.webp',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/55.webp',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/56.webp',
        category: [1],
        title: 'Progetto di nuovo fabbricato industriale - Castel San Pietro Terme (BO)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzaizione nuovo fabbricato industriale.'
    },
    {
        url: 'assets/images/case-history/57.webp',
        category: [1],
        title: 'Progetto di nuovo fabbricato industriale - Castel San Pietro Terme (BO)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzaizione nuovo fabbricato industriale.'
    },
    {
        url: 'assets/images/case-history/58.webp',
        category: [1],
        title: 'Progetto di nuovo fabbricato residenziale - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzaizione nuovo fabbricato residenziale.'
    }
];

// From 1 to 33
let currentImage = 1;
let popupCurrentImage = 1;

function nextCarousel() {
    const carousel = document.getElementById('ch-right');
    const carouselTitle = document.getElementById('ch-left-title');
    const carouselSbtl = document.getElementById('ch-left-subtitle');
    const carouselSubtitle = document.getElementById('ch-left-counter');

   if(currentImage === 58) {
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
    carouselSubtitle.innerHTML = currentImage + ' di 58';
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
        currentImage = 58;
    }
    else {
        currentImage--;
    }
    
    // Iterate through dictionary to find the image with the current index
    let imageData = dictionary[currentImage - 1]; // -1 because array is zero-indexed

    carousel.style.background = "url(\"" + imageData.url + "\") center/cover";
    carouselTitle.innerHTML = imageData.title;
    carouselSbtl.innerHTML = imageData.description;
    carouselSubtitle.innerHTML = currentImage + ' di 58';
    if(currentImage === 37) {
        // Align bottom of image object
        carousel.style.backgroundPosition = "bottom";
    }
}

function showPopup(carouselId) {
    const popup = document.getElementById('ch-popup');
    const rightImage = document.getElementById('ch-popup-right');
    const popupTitle = document.getElementById('ch-popup-left-title');
    const popupSbtl = document.getElementById('ch-popup-left-subtitle');
    const popupSubtitle = document.getElementById('ch-popup-left-counter');
    popup.style.display = 'flex';

    // Find all the items in the dictionary with the carouselId in the category
    const items = dictionary.filter(item => item.category.includes(carouselId));
    // Set currentImage to 1
    popupCurrentImage = 1;

    // Set the right image to the first item in the items array
    rightImage.style.background = "url(\"" + items[popupCurrentImage - 1].url + "\") center/cover";
    popupTitle.innerHTML = items[popupCurrentImage - 1].title;
    popupSbtl.innerHTML = items[popupCurrentImage - 1].description;
    popupSubtitle.innerHTML = popupCurrentImage + ' di ' + items.length;

    // Set listener for arrows
    const leftArrow = document.getElementById('ch-popup-sub-arrow-left');
    const rightArrow = document.getElementById('ch-popup-sub-arrow-right');

    leftArrow.onclick = function() {
        previousPopupCarousel(carouselId);
    }
    rightArrow.onclick = function() {
        popUpNextCarousel(carouselId);
    }
}

function popUpNextCarousel(category) {
    const rightImage = document.getElementById('ch-popup-right');
    const popupTitle = document.getElementById('ch-popup-left-title');
    const popupSbtl = document.getElementById('ch-popup-left-subtitle');
    const popupSubtitle = document.getElementById('ch-popup-left-counter');

    // Find all the items in the dictionary with the carouselId in the category
    const items = dictionary.filter(item => item.category.includes(category));

    if(popupCurrentImage === items.length) {
        popupCurrentImage = 1;
    }
    else {
        popupCurrentImage++;
    }

    rightImage.style.background = "url(\"" + items[popupCurrentImage - 1].url + "\") center/cover";
    popupTitle.innerHTML = items[popupCurrentImage - 1].title;
    popupSbtl.innerHTML = items[popupCurrentImage - 1].description;
    popupSubtitle.innerHTML = popupCurrentImage + ' di ' + items.length;
}

function previousPopupCarousel(category) {
    const rightImage = document.getElementById('ch-popup-right');
    const popupTitle = document.getElementById('ch-popup-left-title');
    const popupSbtl = document.getElementById('ch-popup-left-subtitle');
    const popupSubtitle = document.getElementById('ch-popup-left-counter');

    // Find all the items in the dictionary with the carouselId in the category
    const items = dictionary.filter(item => item.category.includes(category));

    if(popupCurrentImage === 1) {
        popupCurrentImage = items.length;
    }
    else {
        popupCurrentImage--;
    }

    rightImage.style.background = "url(\"" + items[popupCurrentImage - 1].url + "\") center/cover";
    popupTitle.innerHTML = items[popupCurrentImage - 1].title;
    popupSbtl.innerHTML = items[popupCurrentImage - 1].description;
    popupSubtitle.innerHTML = popupCurrentImage + ' di ' + items.length;
}

function closePopup() {
    const popup = document.getElementById('ch-popup');
    popup.style.display = 'none';
}
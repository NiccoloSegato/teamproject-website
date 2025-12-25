// Struttura dati con all'interno un elenco di url di immagini, la loro categoria e la loro descrizione
let dictionary = [
    {
        url: 'assets/images/case-history/1.jpg',
        category: [2, 5],
        title: 'Casinò Municipale di Sanremo',
        description: 'Calcolo di resistenza al fuoco per l’intera sala da gioco e intervento di ammodernamento della sala De Santis, con soluzioni integrate per sicurezza, comfort e aggiornamento degli spazi.'
    },
    {
        url: 'assets/images/case-history/2.jpg',
        category: [0, 1],
        title: 'Palazzo Buriani - Bologna',
        description: 'Restauro della corte interna del Palazzo rinascimentale Buriani Genova (XV sec.)'
    },
    {
        url: 'assets/images/case-history/3.jpg',
        category: [4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/4.jpg',
        category: [1],
        title: 'Villa Storica - Molinella (BO)',
        description: 'Ristrutturazione edilizia della villa del direttore del Villaggio dello zuccherificio di Molinella (1923).'
    },
    {
        url: 'assets/images/case-history/5.jpg',
        category: [4],
        title: 'Webasto Group - Molinella (BO)',
        description: 'Progettazione e direzione lavori strutturale, coordinamento della sicurezza per la nuova realizzazione della galleria climatica.'
    },
    {
        url: 'assets/images/case-history/6.jpg',
        category: [4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/7.jpg',
        category: [2, 5],
        title: 'Casinò Municipale di Sanremo',
        description: 'Calcolo di resistenza al fuoco per l’intera sala da gioco e intervento di ammodernamento della sala De Santis, con soluzioni integrate per sicurezza, comfort e aggiornamento degli spazi.'
    },
    {
        url: 'assets/images/case-history/8.jpg',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Coordinamento della sicurezza per opere di restauro e consolidamento sismico della Chiesa di S. Croce a Selva Malvezzi (BO).'
    },
    {
        url: 'assets/images/case-history/9.jpg',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Coordinamento della sicurezza per opere di restauro e consolidamento sismico della Chiesa di S. Croce a Selva Malvezzi (BO).'
    },
    {
        url: 'assets/images/case-history/10.jpg',
        category: [4],
        title: 'Realizzazione di nuovi capannoni - Molinella (BO)',
        description: 'Coordinamento della sicurezza per la nuova costruzione di capannoni industriali.'
    },
    {
        url: 'assets/images/case-history/11.jpg',
        category: [4],
        title: 'Magneti Marelli S.p.A. - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampiamento dell\'impianto idrico di protezione antincendio dell\'intero stabilimento.'
    },
    {
        url: 'assets/images/case-history/12.jpg',
        category: [4],
        title: 'Plastic Components and Modules Automotive - Chivasso (TO)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampliamento dello stabilimento esistente.'
    },
    {
        url: 'assets/images/case-history/13.jpg',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/14.jpg',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/15.jpg',
        category: [3, 4],
        title: 'BRT S.p.A. - Pieve Emanuele (MI)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampliamento di nuovo polo logistico.'
    },
    {
        url: 'assets/images/case-history/16.jpg',
        category: [3, 4],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/17.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/18.jpg',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/19.jpg',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/20.jpg',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/21.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/22.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/23.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/24.jpg',
        category: [3, 4],
        title: 'BRT S.p.A. - Pieve Emanuele (MI)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampliamento di nuovo polo logistico.'
    },
    {
        url: 'assets/images/case-history/25.jpg',
        category: [1],
        title: 'Ex Stabilimento Gazzoni - Bologna',
        description: 'Calcolo della vulnerabilità sismica dell\'intero aggregato edilizio.'
    },
    {
        url: 'assets/images/case-history/26.jpg',
        category: [4],
        title: 'La Cicogna - San Lazzaro di Savena (BO)',
        description: 'Calcolo della vulnerabilità sismica dell\'intero comparto industriale.'
    },
    {
        url: 'assets/images/case-history/27.jpg',
        category: [4, 5],
        title: 'Euros S.r.l. - Castel San Pietro Terme (BO)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzazione di nuovo fabbricato al servizio della vedita di veicoli industriali.'
    },
    {
        url: 'assets/images/case-history/28.jpg',
        category: [1, 2],
        title: 'Casinò Municipale di Sanremo',
        description: 'Calcolo di resistenza al fuoco per l’intera sala da gioco e intervento di ammodernamento della sala De Santis, con soluzioni integrate per sicurezza, comfort e aggiornamento degli spazi.'
    },
    {
        url: 'assets/images/case-history/29.jpg',
        category: [0, 1],
        title: 'Palazzo Buriani - Bologna',
        description: 'Restauro della corte interna del Palazzo rinascimentale Buriani Genova (XV sec.)'
    },
    {
        url: 'assets/images/case-history/30.jpg',
        category: [0, 1],
        title: 'Nuovi edifici residenziali - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzazione di nuovi edifici residenziali in Bologna.'
    },
    {
        url: 'assets/images/case-history/31.jpg',
        category: [1, 3],
        title: 'Chiesa di S. Croce - Selva Malvezzi (BO)',
        description: 'Coordinamento della sicurezza per opere di restauro e consolidamento sismico della Chiesa di S. Croce a Selva Malvezzi (BO).'
    },
    {
        url: 'assets/images/case-history/32.jpg',
        category: [3],
        title: 'Dr. Max BDC s.r.o. - Telgate (BG)',
        description: 'Coordinamento della sicurezza per le attività di apertura di nuovo magazzino.'
    },
    {
        url: 'assets/images/case-history/33.jpg',
        category: [1, 3],
        title: 'Pengo S.p.A. - Bassano del Grappa (VI)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzazione di nuovo manufatti per l\'adeguamento antincendio magazzini esistenti.'
    },
    {
        url: 'assets/images/case-history/34.jpg',
        category: [6],
        title: 'Nuovo fabbricato residenziale - Medolla (MO)',
        description: 'Progettazione, direzione lavori strutturale e coordinamento della sicurezza per la realizzazione di un nuovo fabbricato residenziale in Medolla (MO).'
    },
    {
        url: 'assets/images/case-history/35.jpg',
        category: [6],
        title: 'Nuovo fabbricato residenziale - Medolla (MO)',
        description: 'Progettazione, direzione lavori strutturale e coordinamento della sicurezza per la realizzazione di un nuovo fabbricato residenziale in Medolla (MO).'
    },
    {
        url: 'assets/images/case-history/36.jpg',
        category: [6],
        title: 'Rinforzo di fabbricato storico - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza con cambio di destinazione d\'uso per fabbricato sito in Bologna.'
    },
    {
        url: 'assets/images/case-history/37.jpg',
        category: [6],
        title: 'Recupero di fabbricato industriale - San Lazzaro di Savena (BO)',
        description: 'Progettazione strutturale per il recupero di un fabbricato industriale con cambio di destinazione d\'uso in San Lazzaro di Savena (BO).'
    },
    {
        url: 'assets/images/case-history/38.jpg',
        category: [6],
        title: 'Ristrutturazione di fabbricato residenziale - Bologna',
        description: 'Progettazione e direzione lavori strutturale per la ristrutturazione di un fabbricato residenziale sito in Bologna.'
    },
    {
        url: 'assets/images/case-history/39.jpg',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/40.jpg',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/41.jpg',
        category: [6],
        title: 'IFM Ferrara',
        description: 'Progettazione e direzione lavori di nuove riserve idriche e stazioni di pompaggio a servizio del polo chimico di Ferrara. Strutture calcolate per resistere ai terremoti di progetto senza subire danni garantendo la totale efficienza dell\'impianto anche a seguito di eventi sismici.'
    },
    {
        url: 'assets/images/case-history/42.jpg',
        category: [6],
        title: 'Magneti Marelli S.p.A. - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'ampiamento dell\'impianto idrico di protezione antincendio dell\'intero stabilimento.'
    },
    {
        url: 'assets/images/case-history/43.jpg',
        category: [6],
        title: 'Euros S.r.l. - Castel San Pietro Terme (BO)',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per la realizzazione di nuovo fabbricato al servizio della vedita di veicoli industriali.'
    },
    {
        url: 'assets/images/case-history/44.jpg',
        category: [6],
        title: 'Coca-Cola HBC Italia S.r.l. - Rionero in Vulture (PZ)',
        description: 'Calcolo della vulnerabilità sismica del sito produttivo di Rionero in Vulture (PZ).'
    },
    {
        url: 'assets/images/case-history/45.jpg',
        category: [6],
        title: 'IVECO Polo Tecnico - Torino',
        description: 'Calcolo della vulnerabilità sismica del sito produttivo di Torino.'
    },
    {
        url: 'assets/images/case-history/46.jpg',
        category: [2, 6],
        title: 'Baglioni Hotel Luna - Venezia',
        description: 'Calcolo di resistenza al fuoco dell\'intera struttura ricettiva risalente al 1118 adiacente a Piazza San Marco.'
    },
    {
        url: 'assets/images/case-history/47.jpg',
        category: [2],
        title: 'Silo S.p.A. - Firenze',
        description: 'Calcolo della capacità portante residua di fabbricato danneggiato da incendio generalizzato completo di stima dei danni e budget di ricostruzione.'
    },
    {
        url: 'assets/images/case-history/48.jpg',
        category: [2],
        title: 'Silo S.p.A. - Firenze',
        description: 'Calcolo della capacità portante residua di fabbricato danneggiato da incendio generalizzato completo di stima dei danni e budget di ricostruzione.'
    },
    {
        url: 'assets/images/case-history/49.jpg',
        category: [2],
        title: 'Salumificio Fratelli Coati S.p.A. - Negrar (VR)',
        description: 'Direzione lavori e coordinamento della sicurezza delle opere di demolizione e bonifica di sito produttivo danneggiato da incendio.'
    },
    {
        url: 'assets/images/case-history/50.jpg',
        category: [2],
        title: 'Gruppo Unipol - Bologna',
        description: 'Calcolo di resistenza al fuoco delle strutture dell\'intero complesso nominato Porta d\'Europa a Bologna.'
    },
    {
        url: 'assets/images/case-history/51.jpg',
        category: [2],
        title: 'Gruppo Unipol - Bologna',
        description: 'Calcolo di resistenza al fuoco delle strutture dell\'intero complesso nominato Porta d\'Europa a Bologna.'
    },
    {
        url: 'assets/images/case-history/52.jpg',
        category: [2],
        title: 'Gruppo Unipol - Bologna',
        description: 'Calcolo di resistenza al fuoco delle strutture dell\'intero complesso nominato Porta d\'Europa a Bologna.'
    },
    {
        url: 'assets/images/case-history/53.jpg',
        category: [2],
        title: 'Pack Center S.r.l. - Imola (BO)',
        description: 'Calcolo di resistenza al fuoco delle strutture del magazzino aziendale e progettazione delle opere di protezione antincendio.'
    },
    {
        url: 'assets/images/case-history/54.jpg',
        category: [5],
        title: 'Terranova (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    },
    {
        url: 'assets/images/case-history/55.jpg',
        category: [5],
        title: 'Calliope (Teddy S.p.A.) - Bologna',
        description: 'Progettazione integrata, architettonica e strutturale, direzione lavori e coordinamento della sicurezza per l\'insediamento di nuovo locale commerciale.'
    }
];

// From 1 to 33
let currentImage = 1;

function nextCarousel() {
    const carousel = document.getElementById('ch-right');
    const carouselTitle = document.getElementById('ch-left-title');
    const carouselSbtl = document.getElementById('ch-left-subtitle');
    const carouselSubtitle = document.getElementById('ch-left-counter');

   if(currentImage === 55) {
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
    carouselSubtitle.innerHTML = currentImage + ' di 55';
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
        currentImage = 55;
    }
    else {
        currentImage--;
    }
    
    // Iterate through dictionary to find the image with the current index
    let imageData = dictionary[currentImage - 1]; // -1 because array is zero-indexed

    carousel.style.background = "url(\"" + imageData.url + "\") center/cover";
    carouselTitle.innerHTML = imageData.title;
    carouselSbtl.innerHTML = imageData.description;
    carouselSubtitle.innerHTML = currentImage + ' di 55';
    if(currentImage === 37) {
        // Align bottom of image object
        carousel.style.backgroundPosition = "bottom";
    }
}
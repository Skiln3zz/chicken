var clicks = 0;
var count = 0;
var pince = 1;
var prixpince = 100;
var boucher = 0;
var prixboucher = 1000;
var bbq = 0;
var prixbbq = 10000;

function getpoulets(nombre){
    clicks = clicks + nombre;
    afficher_count();
}

function increment(){
    if (pince == 0){
        clicks = clicks + 1;
        afficher_count();
    }
    else {
        clicks = clicks + 1 * pince;
        afficher_count();
    }
}

setInterval("incrementauto()",1000);

function incrementauto(){
    afficher_count();
    var generationpersec = 0;
    if (boucher >=1){ generationpersec = boucher * 1; }
    if (bbq >=1){ generationpersec = generationpersec + bbq * 5;}
    clicks = clicks + generationpersec;
    afficher_count();
    counterpersec.innerHTML = generationpersec;
}

function afficher_count(){
    count = parseInt(clicks);

    var millions = 0;
    millions = count/1000000;
    if(millions >= 1){
      counter.innerHTML = millions + " Millions";
        var milliards = 0;
        milliards = count/1000000000;
        if(milliards >= 1){
            counter.innerHTML = milliards + " Milliards";
            return;
        }
    }

    else {
        counter.innerHTML = count;
    }
}

function buyupgrade(upgrade){
    if (upgrade == "pince"){
        if(clicks >= prixpince){
            clicks = clicks - prixpince;
            afficher_count();
            pince++;
            prixpince = prixpince * 1.5;
            txtprixpince.innerHTML = parseInt(prixpince);
            txtnbpince.innerHTML = parseInt(pince);
            return;
        }
    }
    if (upgrade == "boucher"){
        if(clicks >= prixboucher){
            clicks = clicks - prixboucher;
            afficher_count();
            boucher++;
            prixboucher = prixboucher * 1.5;
            txtprixboucher.innerHTML = parseInt(prixboucher);
            txtnbboucher.innerHTML = parseInt(boucher);
            return;
        }
    }
    if (upgrade == "bbq"){
        if(clicks >= prixbbq){
            clicks = clicks - prixbbq;
            afficher_count();
            bbq++;
            prixbbq = prixbbq * 1.5;
            txtprixbbq.innerHTML = parseInt(prixbbq);
            txtnbbbq.innerHTML = parseInt(bbq);
            return;
        }
    }
}

function togglePopup(){
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
}

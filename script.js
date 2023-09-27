var clicks = 0;
var pince = 0;
var prixpince = 100;

function increment(){
    if (pince == 0){
        clicks = clicks + 1;
        counter.innerHTML = clicks;
    }
    else {
        clicks = clicks + 1 * pince;
        counter.innerHTML = clicks;
    }
}

function buyupgrade(upgrade){
    if (upgrade == "pince"){
        if(clicks >= prixpince){
            clicks = clicks - prixpince;
            pince++;
            prixpince = prixpince * 1,5;
            txtprixpince.innerHTML = prixpince;
        }
    }
}

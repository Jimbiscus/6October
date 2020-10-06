var depense = prompt("Combien d'argent dépensez vous : ");
var x = 0
function discountedPrice(x) {
    return depense - (depense / 100 * x);
}
function discount(x) {
    return (depense / 100 * x);
}

function discountMachine() {
    
}

if (depense < 20) {
    console.log("Pas de réduction.");
   
}
else if (depense >= 20 && depense <= 30) {
    x = 10;
    console.log("10% de réduction.");
    console.log("Le prix de votre article : " + depense + "€");
    console.log("Votre réduction : " + discount(x) + "€");
    console.log("Votre prix final :" + discountedPrice(x) + "€");
}
else if (depense > 30 && depense <= 50) {
    x = 20;
    console.log("20% de réduction.");
    console.log("Le prix de votre article : " + depense + "€");
    console.log("Votre réduction : " + discount(x) + "€");
    console.log("Votre prix final :" + discountedPrice(x) + "€");
}
else {
    x = 30;
    console.log("30% de réduction.");
    console.log("Le prix de votre article : " + depense + "€");
    console.log("Votre réduction : " + discount(x) + "€");
    console.log("Votre prix final :" + discountedPrice(x) + "€");
}
var depense = prompt("Combien d'argent dépensez vous : ");
var x = 0
function discountedPrice(x) {
    return depense - (depense / 100 * x);
}
function discount(x) {
    return (depense / 100 * x);
}

function discountMachine() {
    console.log(x + "% de réduction.");
    console.log("Le prix de votre article : " + depense + "€");
    console.log("Votre réduction : " + discount(x) + "€");
    console.log("Votre prix final :" + discountedPrice(x) + "€");
}

if (depense < 20) {
    console.log("Pas de réduction.");

}
else if (depense >= 20 && depense <= 30) {
    x = 10;
    discountMachine();

}
else if (depense > 30 && depense <= 50) {
    x = 20;
    discountMachine();
}
else {
    x = 30;
    discountMachine();
}
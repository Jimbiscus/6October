function discountMachine() {
    console.log((x * 100) + "% de réduction.");
    console.log("Le prix de votre article : " + depense + "€");
    console.log("Votre réduction : " + (depense * x) + "€");
    console.log("Votre prix final :" + (depense - (depense * x)) + "€");
}

var depense = prompt("Combien d'argent dépensez vous : ");
if (depense < 20) {
    console.log("Pas de réduction.");
    console.log("Votre prix final : " + depense + "€");

}
else if (depense >= 20 && depense <= 30) {
    x = 0.1;
    discountMachine();

}
else if (depense > 30 && depense <= 50) {
    x = 0.2;
    discountMachine();
}
else {
    x = 0.3;
    discountMachine();
}
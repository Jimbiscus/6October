

function discountedPrice(x) {
    return depense - (depense * x);
}
function discount(x) {
    return (depense * x);
}

function discountMachine() {
    document.write((x * 100) + "% de réduction.<br>");
    document.write("Le prix de votre article : " + depense + "€<br>");
    document.write("Votre réduction : " + (discount(x)) + "€<br>");
    document.write("Votre prix final : " + discountedPrice(x) + "€<br>");
}

var depense = prompt("Combien d'argent dépensez vous : ");
if (depense < 20) {
    document.write("Pas de réduction.<br>");
    document.write("Votre prix final : " + depense + "€<br>");

}
else if (depense >= 20 && depense <= 30) {
    x = 0.1;
    document.write(discountMachine());

}
else if (depense > 30 && depense <= 50) {
    x = 0.2;
    document.write(discountMachine());
}
else {
    x = 0.3;
    document.write(discountMachine());
}


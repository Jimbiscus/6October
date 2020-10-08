var n = prompt("Quel est l'objectif pizza ?");

for (var pizza = 1; pizza <= n; pizza++) {

    if (pizza === Math.round(n / 2)) {

        document.write("🍕 PIZZA VENDUES : " + pizza + "<br>");
        document.write("🍕 DEJA LA MOITIE !<br> ");
    }
    else {
        document.write("🍕 PIZZA VENDUES : " + pizza + "<br>");
    }


}




document.write("🍕 BRAVO !<br>");

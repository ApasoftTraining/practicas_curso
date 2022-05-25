//Devolver iniciales
function iniciales(n, a1, a2) {

    return `${n.charAt(0)}.${a1.charAt(0)}.${a2.charAt(0)}.`.toUpperCase();

}

const vocales = ((str) => {
    var contador = 0;
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" ||
            str.charAt(i) == "o" || str.charAt(i) == "u") {
            contador++;
        }
    }
    return contador;
}
);

//Otra forma



const vocales1 = ((str) => {
    var contador = 0;
    str = str.toLowerCase();
    datos = str.split('');

    datos.forEach((i) => {
        {
            if (i == "a" || i == "e" || i == "i" ||
                i == "o" || i == "u")
                contador++;
        }
    });
    return contador;
}
);

/*
if (["a","e","i","o","u"].indexOf(i)!=-1)                   
*/

/* Punto 1 */

let frasesita = "Me_Gusta_Viajar_Por_El_Mundo";

function camelcaseminuscula(frasesita) {
    return frasesita.charAt(0).toLowerCase() + frasesita.slice(1).replaceAll("_", "");
}

console.log(camelcaseminuscula(frasesita));
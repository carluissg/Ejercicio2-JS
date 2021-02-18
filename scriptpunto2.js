/* Punto 2 */

let camelCase = "losGatosBonitos";

function snakecase(camelCase) {
    return camelCase.slice(0, 3) + "_" + camelCase.slice(3, 8) + "_" + camelCase.slice(8);
}

console.log(snakecase(camelCase));
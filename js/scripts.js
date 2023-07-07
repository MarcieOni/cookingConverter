function ozToGrams(input) {
    const gram = 28.34952;
    return (input * gram);
}

function lbToOz(input) {
    return input * 16;
}

function lbToGrams(input) {
    return ozToGrams(lbToOz(input));
}


function tspToMl(input) {
    const milliliter = 4.93;
    return (input * milliliter);
}

function tbspToTsp(input) {
    return input * 3;
}

function cupToTbsp(input) {
    return input * 16.2307
}

function cupToMl(input) {
    return tspToMl(tbspToTsp(cupToTbsp(input))).toFixed(4);
}


//interface
const weight = window.prompt("how many pounds do u have?")

window.alert("ur " + weight + " pound(s) is " + lbToOz(weight) + " ounces which is equal to " + lbToGrams(weight).toFixed(2) + " grams.");

const measure = window.prompt("How many cups do u have o.o")

window.alert("ur " + measure + "cup(s) is " + cupToTbsp(measure) + "tablespoons which is also " + tbspToTsp(cupToTbsp(measure)) + "teaspoons n that is also " + cupToMl(measure) + "milliliters.");
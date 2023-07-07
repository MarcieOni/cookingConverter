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


const weight = window.prompt("how many pounds do u have?")

window.alert("ur " + weight + " pound(s) is " + lbToOz(weight) + " ounces which is equal to " + lbToGrams(weight).toFixed(2) + " grams.")
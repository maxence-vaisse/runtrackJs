// script année bisextile

function bisextile(annee) {
    if (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(2016)); // true
console.log(bisextile(2020)); // true
console.log(bisextile(2021)); // false
console.log(bisextile(2025)); // false
// Tableau qui va trier des nombres

function tri( numbers = [ 1, 2, 3, 4, 5 ], order = "desc" ) {
    if ( order === "asc" ) {
        numbers.sort( ( a, b ) => a - b );
    } else if ( order === "desc" ) {
        numbers.sort( ( a, b ) => b - a );
    }
    return numbers;
}

console.log( tri() );
export function sum(...ns) {
    let sum = 0;

    for(const n in ns)
    {
        sum += n;
    }

    return(sum);
}

export function average(...ns) {
    let sum = 0;
    let average;

    for(const n of ns)
    {
        //console.log("n: " + n);

        sum += n;
    }

    average = sum/ns.length;

    return(average);
}

export function getDoubles(...ns) {
    let doubles = ns.map(n => n * 2);

    return(doubles);
}

export function getSquares(...ns) {
    let squares = [];

    squares = ns.map(n => Math.pow(n, 2)); //Math.pow(n, 2) = n * n = n**2;

    //console.log(squares);

    return(squares);
}

//console.log(import.meta.url);
function getEvenNumbers(...ns)
{
    //3, 4, 1, 1, 2

    //2.
    const evenNumbers = ns.filter(n => n % 2 == 0);

    //1.
    // let evenNumbers = [];
    // for(const n of ns)
    // {
    //     if(n % 2 == 0)
    //     {
    //         evenNumbers.push(n)
    //     }
    // }

    return evenNumbers;
}

function enterCinema(...anni)
{
    //ns = [13, 44, 17, 19, 21]
    const cinema = anni.filter(n => n >= 18);
    //cinema = [44, 19, 21];

    return cinema;
}

function getOddNumbers(...ns)
{
    const oddNumbers = ns.filter(n => n % 2 != 0);

    return oddNumbers;
}

//console.log(formatterObject.getWordsByInitialLetter("s", false, "stefano", "luca", "marco", "💶"));
function getWordsByInitialLetter(initialLetter, noCase, ...words)
{
    //let wordsByinitialLetter = words;

    //S == s
    if(!noCase)
    {
        initialLetter = initialLetter.toLowerCase();
        words = words.map(word => word.toLowerCase());
    }

    //console.log("initialLetter: " + initialLetter);
    words = words.filter(word => word.startsWith(initialLetter));
    //words = ["stefano", "sara"]

    return(words);
}

export { getEvenNumbers, getOddNumbers, getWordsByInitialLetter };
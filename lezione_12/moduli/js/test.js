//1.
export default function getFirstN(...ns)
{
    //ns = [1, 2, 18, 1]
    //1.
    const N = ns.find(n => n > 17);

    /*//2.
    let N = undefined;
    for(const n of ns)
    {
        if(n > 17)
        {
            N = n;
            break;
        }
    }*/

    return N;
}
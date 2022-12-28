function aime(arr)
{
    if (arr.length == 0)
        return "personne n'aime ça"
    else if (arr.length == 1)
        return `${arr[0]} aime ça`
    else if (arr.length == 2)
        return `${arr[0]} et ${arr[1]} aiment ça`
    else if (arr.length == 3)
        return `${arr[0]},${arr[1]} et ${arr[2]} aiment ça`
    else
        return `${arr[0]}, ${arr[1]} et ${arr.length - 2}  autres comme ça`
}

// console.log(aime([]))

function shiftZero(arr)
{
    
}
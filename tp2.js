// //Soit le tableau suivant : let tab = [1, 3, 0, -1, 2, 0, 4, 0, 1, 0, 4].
// // Ecrivez une fonction de 2 différentes manières qui permet d’avoir le même tableau avec des
// // zéros à la fin du tableau sans changer l’ordre des autres éléments

// function shiftZero(arr)
// {
//     let count = 0
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] != 0)
//         {
//             arr[count] = arr[i]
//             count++
//         }
//     }
//     while (count < arr.length)
//     {
//         arr[count] = 0
//         count++
//     }
//     return arr

//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] == 0)
//         {
//             arr.splice(i, 1)
//             arr.push(0)
//         }
//     }
//     return arr
// }

// console.log(shiftZero([1, 3, 0, -1, 2, 0, 4, 0, 1, 0, 4]))

let arr = [1,2,2,3,3,4,4,5,5]

function rem(arr)
{
    return arr.forEach(element => {
        
    });
}

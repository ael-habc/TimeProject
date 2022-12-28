// // You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// // You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// function addTwoNumbers(l1,l2) {
//     // l1 = parseInt(l1.reverse().join(""))
//     // console.log(l1.reverse())
//     // l2 = parseInt(l2.reverse().join(""))
//     // console.log(l2)
//     // return ((l1 + l2).toString().split("").reverse()).map(element => parseInt(element))
//     let result = []
//     let rest = 0
//     let i = 0
//     let sum = 0
//     while (i < l1.length || i < l2.length) {
//         sum = rest
//         if (i < l1.length)
//             sum += l1[i]
//         if (i < l2.length)
//             sum += l2[i]
//         result.push(sum % 10)
//         rest = Math.floor(sum / 10)
//         i++
//     }
//     if (rest > 0)
//         result.push(rest)
//     return result
// }
// console.log(addTwoNumbers([7,7,7],[7,7,7]))
// console.log(Math.floor(2.444))


var isPalindrome = function(x) {
    return (x.toString().split("").reverse().join("") == x)
};

// console.log(isPalindrome(313))     
// var removeDuplicates = function(nums) {
//     for (let i = 0; i < nums.length;i++)
//     {
//         for(let j = i + 1; j < nums.length;j++)
//         {
//             if (nums[i] == nums[j])
//             {
//                 console.log(j)
//                 nums.splice(j,1)
//                 j--
//             }
//         }
//     }
//     return nums
// };
// console.log(removeDuplicates([1,1,2]))

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs) {
    let prefix = ""
    for (let i = 0; i < strs[0].length; i++)
    {
        for (let j = 1; j < strs.length; j++)
        {
            if (strs[j][i] != strs[0][i])
                return prefix
        }
        prefix += strs[0][i]
    }
    return prefix
}
// longestCommonPrefix(["flower","flow","yflight"])

function deleteReapte(arr)
{
    return
}



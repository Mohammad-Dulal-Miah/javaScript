let nums = [5,7,9,56,89,00];

//splice

/*
    (index , delete count , add value)
*/

nums.splice(3,4,56,8,9);

console.log(nums);


/*
 
    slice(start , end)  ==> but end not include

*/

let newArray = nums.slice(1,4);

console.log(newArray)
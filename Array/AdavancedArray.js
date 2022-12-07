let nums = [5,7,9,56,89,00];

delete nums[3]

console.log(nums);   //but don't change the array length


let v = [5,6,7,56];

let d = nums.concat(v); //This concat method add two array...Not change existing array

const compare = (a,b)=>{
    return a-b;
}

console.log(d.sort(compare)) //alphabet change and orginal change 


console.log(nums.reverse())
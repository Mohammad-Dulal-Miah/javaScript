let numbers = [56,78,97];

let square_numbers = numbers.map((value , index , array) =>{

    console.log(index , array);
    return value*value;
});

console.log(square_numbers);
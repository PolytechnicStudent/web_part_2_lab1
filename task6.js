function quicksort(arr) { 
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr[0];
    
    var left = []; 
    var right = [];

    for (var i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

let arr_num = [-5,7,5,3,0,9,1,2,-7,-4,3];
console.log(quicksort(arr_num));
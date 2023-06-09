function detElMaxCount(arr){
    if(arr.length == 0)
        return null;
    let countObj = {};
    let el_max = arr[0], maxCount = 1;
    for(let i = 0; i < arr.length; i++)
    {
        let el = arr[i];
        if(countObj[el] == null)
            countObj[el] = 1;
        else
            countObj[el]++;  
        if(countObj[el] > maxCount)
        {
            el_max = el;
            maxCount = countObj[el];
        }
    }
    return el_max;
}
let arr = ['frog', 'foggy', 'frog', 'host', 'frog', 'rain'];
console.log(detElMaxCount(arr));
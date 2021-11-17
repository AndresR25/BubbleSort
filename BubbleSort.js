function bubbleSort(arr){
    for (var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-i;j++){
            var currentNum = arr[j];
            var nextNum = arr[j+1];
            if (currentNum>nextNum){
                arr.splice(j,2, nextNum, currentNum);
            }
        }
    }
    return arr;
}
console.log(bubbleSort([0,1,4,3,6,9,3,10,11,2]));
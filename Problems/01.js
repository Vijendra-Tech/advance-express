function getSubArray(arr, sum){
    let currSum = arr[0]
    let range= {
        st:0,
        end:0
    }
    let start =0;
      //iterate over array
      for(let end= 1; end<arr.length; end++){
             // index range
           while(currSum > sum  && start < end-1){
                  currSum -= arr[start]
                  start++
           }
           if(currSum === sum){
                range.st = start
                range.end = end -1
                return range
           }
            currSum += arr[end];
      }
       // Check if the last element of the array matches the target sum
    if (currSum === sum) {
           range.st = start
            range.end = arr.length - 1
            return range
    }

    return null;
}
const arr = [1, 2, 3, 4, 5];
const targetSum = 9;
const result = getSubArray(arr, targetSum);
console.log(result)
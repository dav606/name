let arr = [4,7,1,9,6,2,5,3,8];
let sum = 0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            sum=arr[i]
            arr[i]=arr[j]
            arr[j]=sum
        }
    }
}

console.log(arr);


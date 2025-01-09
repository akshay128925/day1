var a=[1,5,2,3,10,9,8,7,6];
let arr=[];
for(let i=a.length-1;i>=0;i--){
    arr.push(arr[i]);
}
console.log(arr);
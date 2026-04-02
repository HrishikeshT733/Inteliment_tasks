let even:number[]=[];
let odd:number[]=[];

for(let i:number=1;i<101;i++){

     if(i%2!=0){
       odd.push(i);
     }else{
        even.push(i);
     }


}
console.log("even numbers array are: "+even);
console.log("odd numbers array are: "+odd);
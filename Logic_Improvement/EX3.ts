
let prime:number[]=[];

function isPrimeNum(num:number){

    if(num===1){
        return false;
    } 
    if(num===2){return true;}

     let count:number=0;
    for(let i:number=2;i<=num/2;i++ ){

        if(num%i==0){
            count++;
        }
    }
    if(count==0){
        return true;
    }else{
        return false;
    }
}

for(let i:number=1;i<=25;i++){
       if(isPrimeNum(i)){
        prime.push(i);
       }

}
console.log("Prime numbers from range 0 to 25: "+prime);
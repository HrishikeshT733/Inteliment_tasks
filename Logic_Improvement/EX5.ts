function calcFactorial(num:number){
    let prod=1;

    for(let i:number=2;i<=num;i++){
        prod=prod*i;
    }

    console.log("Factorial of "+num+" is "+prod);
}



calcFactorial(4);
calcFactorial(5);
function calcAsciiValue(char:string){
      if (char.length !== 1) throw new Error("Only one character allowed");

     const asciiValue: number = char.charCodeAt(0); 

     console.log("Asci value of "+char+" is "+asciiValue);

}

calcAsciiValue("a");
calcAsciiValue("b");
calcAsciiValue("A");
calcAsciiValue("0");
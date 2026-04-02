function ispalindrome(input:string){
    input=input.toLocaleLowerCase();
    let reverseInput:String="";

    for(let i:number=input.length-1;i>=0;i--){
        reverseInput=reverseInput+input.charAt(i);
    }
    if(reverseInput==input){
        return true;
    }else{
        return false;
    }

}
   console.log("Check Whether Nitin and Shailesh Which is Palindrome: ")
     if(ispalindrome("Nitin")){
        console.log("Nitin is Palindrome");
     }
     if(ispalindrome("Shailesh")){
        console.log("Shailesh is Palindrome")
     }

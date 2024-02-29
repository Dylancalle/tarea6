function generarFizzBuzz(n) {
    const FIZZ =3;
    const BUZZ =5;
    if(n%FIZZ===0 && n%BUZZ===0)
    {
        return "FizzBuzz"
    }
    if(n%FIZZ === 0)
    {
        return "Fizz";
    }
    if(n%BUZZ === 0)
    {
        return "Buzz";
    }
    return n + "";
  }
  
  function mostrar(n) {
    let resul="";
    while(n!=0)
    {
        resul=resul+generarFizzBuzz(n);
        n--;
    }
    return resul;
  }

  export {mostrar, generarFizzBuzz};
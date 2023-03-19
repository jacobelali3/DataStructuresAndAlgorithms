const isPrime = (n) => {
    if(n == 0 || n == 1) return false;

    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i === 0){
        return false;
      }
    }
   return true;
  };

  //time = o sqrt(n) because we're only checking between range of 2 <-> sqrt(n),
  //we do this in order to avoid checking for duplicate values, which speeds up the code abit better than linear time
  //space = o(1) because were only storing one variable i, its constant.
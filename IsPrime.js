const isPrime = (n) => {
    if(n <2 ) return false;

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
  //we check for special cases 0 & 1 and negative numbers (n < 2) because they can't be prime
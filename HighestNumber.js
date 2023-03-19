const maxValue = (nums) => {
  let x = -2999
  for(let i = 0; i < nums.length; i++){
    if (nums[i] > x){
      x = nums[i]
    }
  }
  return x
};


//time = o(n) because there is one for loop, its linear
//space = o(1) because we arent doing anything costly in the foor loop, and we only store one variable, its constant
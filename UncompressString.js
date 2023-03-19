const uncompress = (s) => {
    let string = [];
    for (let i = 0; i < s.length; i++) {
      let num = "0";
      if (!isNaN(s[i])) { //if we run into a number
        for (let j = i; j < s.length; j++) {
          if (isNaN(s[j])) { //grab the entire number with a seperate pointer then update i when we arrive at a letter
            i = j;
            break;
          }
          num += s[j];
        }
        //once we have the entire number and the letter (num & s[i]), we multiply the letter by that number
        for (let k = 0; k < parseInt(num); k++) string.push(s[i]);
      }
    }
    return string.join('');
  };

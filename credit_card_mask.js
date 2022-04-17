function maskify(cc) {
    if (cc.length - 1 < 4) {
      return cc; //returns a value of cc if there are less than 4 characters
    } else {
    
    let length2 = cc.length - 5; //gets the length of the #
    
    let ccnew = ""; //initiates the new cc that is masked
    
    let last = cc[cc.length -1]; //these 4 lines get the last 4 numbers of the cc
    let seclast = cc[cc.length -2];
    let thirdlast = cc[cc.length -3];
    let fourlast = cc[cc.length -4];
    
    for (let i = 0; i <= length2; i++) { //makes the string of #
      ccnew = ccnew + "#";
    }
    
    ccnew = ccnew + fourlast + thirdlast + seclast + last; //makes the new masked cc
    console.log(ccnew)
    return ccnew;
  }
  }

  maskify('4556364607935616')
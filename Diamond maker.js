function diamond(n){
  
    if (n < 0) {
      return null;
    } else if (n % 2 == 0) {
      return null;
    } else {
      let diamond = "*";
      let space = "\n";
      let diam = "";
      let spacer = " ".repeat(Math.floor(n/2));
      let counter = 1;
      for (let i = 1; i <= Math.ceil(n/2); i++) {
        diam = diam + spacer + (diamond.repeat(counter)) + spacer + space;
        spacer = spacer.slice(1);
        counter = counter + 2;
      }
      counter = counter - 2;
      spacer = " ";
      for (let j = (Math.ceil(n/2 - 1)); j >0; j--){
        counter = counter - 2;
        diam = diam + spacer + (diamond.repeat(counter)) + spacer + space;
        spacer = spacer.concat(" ");
      }

      console.log(diam);
      return diam
    }
  }

  diamond(5);
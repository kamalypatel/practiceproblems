function xMarksTheSpot(input) {
    
    let counter = 0; //iniitalizing all the variables
    let Ycor = 0;
    let Xcor = 0;
    let coor = [];


    for (let i = 0; i <= input.length-1; i++) { //this for loop checks for arrays vertically
      for (let j = 0; j <= (input[0].length -1); j++) { //this for loop checks for arrays horizontally
        if (input[i][j] == 'x') {
          counter = counter + 1; //counter to determine correct answer later
          Xcor = i;
          Ycor = j;
          coor = [Xcor, Ycor]; //sets up the answer array
        }
      }
    }

    if (counter == 0) { //this if statement returns the correct response depending on the number of X's in the array
        return [];
    } else if (counter > 1) {
        return [];
    }  else if (counter == 1) {
        return coor;
    }
    
  }
input = [['o', 'x'],['o', 'o']];

  xMarksTheSpot(input);
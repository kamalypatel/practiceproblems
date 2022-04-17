function barista(coffees){
    coffees.sort(function(a, b) {return a-b}); //sort the numbers from least to greatest

    let time = 0; //sets the time value to 0 initially

    for (let i = 0; i <= coffees.length - 1; i) { //for loop to run through the time for each coffee
        time = time + coffees[0] * coffees.length; //adds the waiting time for each customer for each coffee
        time = time + 2 * coffees.length - 2; //adds the cleaning time for each coffee
        coffees.shift(); //removes the first value of the coffee array because that time would have been added
    }
    console.log(time);
    return time;
  }

barista([5,4,7,12,9]);
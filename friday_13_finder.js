function fridayTheThirteenths(start, end) {
    
    let startdate = new Date(start, 0, 1); //initializes the start date in correct format
   
    if (end) { // end the start date in correct format and takes an empty end variable into account
      var enddate = new Date(end, 11, 31);
    } else if (!end) {
        var enddate = new Date(start, 11, 31);
    }

    let ans = ''; //initializes the empty string

    for (let i = startdate; i <= enddate; i = new Date(i.getTime()+(1*24*60*60*1000))){ //loops through each day by adding a day worth of time on each iteration

      if (i.getDay() == 5 && i.getDate() == 13) { //checks if the date is a Friday the 13th

            ans = ans + ` ${parseInt(i.getMonth()) + 1}` + '/' + `${i.getDate()}` + "/" + `${i.getFullYear()}`; //adds the date in the desired format onto the answer string
      }
    
    }; 
      ans = ans.split(''); //these 3 lines get rid of the space at the beginning of the answer string
      ans[0] = '';
      ans = ans.join('');
      console.log(ans);
      return ans; //returns answer
  }

  fridayTheThirteenths(2010, 2015);
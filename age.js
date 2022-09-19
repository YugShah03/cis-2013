var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatAge = parseFloat(floatAge);
     floatDays = parseFloat(floatAge*365.25);
     floatMonths = parseFloat(floatAge*12);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
     alert("Your age is " + floatAge + " years, " + floatMonths + " months, " + intFortnights + " fortnights, " + intWeeks + " weeks, or " + floatDays + " days." );
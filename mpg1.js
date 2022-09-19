var floatMiles, floatGallons, floatMpg;
     floatMiles = parseFloat(prompt("Enter miles driven"));
     floatGallons = prompt("Enter gallons of gas used");
     floatGallons = parseFloat(floatGallons);
     floatMpg = parseFloat(floatMiles/floatGallons);//This line calculates mpg
     alert("Miles per gallon = " + floatMpg);
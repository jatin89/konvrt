function convertTemp(quan, fromU, toU) {
	var standard = 0.00; // Degrees Celsius
	var result = 0.00;
	
	switch (fromU) {
		case "4-0":
			standard = ((parseFloat(quan) - 32.0) * (5.0/9.0));// Degrees Fahrenheit
			break;
		case "4-1":
			standard = (parseFloat(quan)* 1.00);//Degrees Celsius
			break;
		case "4-2":
			standard = (parseFloat(quan) - 273.15);//Kelvins
			break;
		case "4-3":
			standard = ((parseFloat(quan) - 491.67)*(5.0/9.0));//Degrees Rankine
			break;
		case "4-4":
			standard = (100 - parseFloat(quan) * (2.0/3.0));//Degrees Delisle
			break;
		case "4-5":
			standard = (parseFloat(quan) * (100.0/33.0));//Degrees Newton
			break;
		case "4-6":
			standard = (parseFloat(quan) * (5.0/4.0));//Degrees Reaumur
			break;
		case "4-7":
			standard = ((parseFloat(quan) - 7.5) * (40.0/21.0));//Degrees Romer
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "4-0":
			result = ((standard *(9.0/5.0)) + 32);//Fehrenheit
			break;
		case "4-1":
			result = ((standard )/1.00);//Degrees Celsius
			break;
		case "4-2":
			result = (standard + 273.15);//Degrees Kelvin
			break;
		case "4-3":
			result = ((standard + 273.15)*(9.0/5.0));//Degrees Rankine
			break;
		case "4-4":
			result = (100-standard * (3.0/2.0));//Degrees Delisle
			break;
		case "4-5":
			result = (standard * (33.0/100.0));//Degrees Newton
			break;
		case "4-6":
			result = (standard *(4.0/5.0));//Degrees Reaumur
			break;
		case "4-7":
			result = ((standard * (21.0/40.0)) + 7.5);//Degree Romer
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

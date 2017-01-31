function convertDensity(quan, fromU, toU) {
	var standard = 0.00; // Kilograms per Cubic Metre
	var result = 0.00;
	
	switch (fromU) {
		case "5-0":
			standard = (parseFloat(quan) * 1.00);//Kilograms per Cubic Metre
			break;
		case "5-1":
			standard = (parseFloat(quan) * 1000);//Kilograms per Litre
			break;
		case "5-2":
			standard = (parseFloat(quan) * 1000);//Grams Per Millilitre
			break;
		case "5-3":
			standard = (parseFloat(quan) * 1000);//Tons Per Cubic Metre 
			break;
		case "5-4":
			standard = (parseFloat(quan) * 1730);//Ounces Per Cubic Inch
			break;
		case "5-5":
			standard = (parseFloat(quan) * 27680);//Pounds Per Cubic Inch
			break;
		case "5-6":
			standard = (parseFloat(quan) * 16.02);//Pounds Per Cubic Foot
			break;
		case "5-7":
			standard = (parseFloat(quan) * 0.5933);//Pounds Per Cubic Yard
			break;
		case "5-8":
			standard = (parseFloat(quan) * 119.8);//Pounds Per Gallon
			break;
		case "5-9":
			standard = (parseFloat(quan) * 12.87);//Pounds Per Bushel
			break;
		case "5-10":
			standard = (parseFloat(quan) * 1.0);//Grams per Litre
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "5-0":
			result = (standard / 1.00);//Kilograms per Cubic Metre
			break;
		case "5-1":
			result = (standard / 1000);//Kilograms per Litre
			break;
		case "5-2":
			result = (standard / 1000);//Grams Per Millilitre
			break;
		case "5-3":
			result = (standard / 1000);//Tons Per Cubic Metre 
			break;
		case "5-4":
			result = (standard / 1730);//Ounces Per Cubic Inch
			break;
		case "5-5":
			result = (standard / 27680);//Pounds Per Cubic Inch
			break;
		case "5-6":
			result = (standard / 16.02);//Pounds Per Cubic Foot
			break;
		case "5-7":
			result = (standard / 0.5933);//Pounds Per Cubic Yard
			break;
		case "5-8":
			result = (standard / 119.8);//Pounds Per Gallon
			break;
		case "5-9":
			result = (standard / 12.87);//Pounds Per Bushel
			break;
		case "5-10":
			result = (standard / 1.0);//Grams per Litre
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

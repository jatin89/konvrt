function convertPlanarSize(quan, fromU, toU) {
	var standard = 0.00; // Square Centimetres
	var result = 0.00;
	
	switch (fromU) {
		case "1-0":
			standard = (parseFloat(quan) * 929.0304);//Square Feet
			break;
		case "1-1":
			standard = (parseFloat(quan) * 1.0);//Square Centimetres
			break;
		case "1-2":
			standard = (parseFloat(quan) * 10000.0);//Square metres
			break;
		case "1-3":
			standard = (parseFloat(quan) * 10000000000.0);//Square Kilometres
			break;
		case "1-4":
			standard = (parseFloat(quan) * 6.4516);//Square Inch
			break;
		case "1-5":
			standard = (parseFloat(quan) * 8361.2736);//Square Yard
			break;	
		case "1-6":
			standard = (parseFloat(quan) * 25899881103.0);//Square Miles
			break;
		case "1-7":
			standard = (parseFloat(quan) * 1000000.0);//Ares
			break;
		case "1-8":
			standard = (parseFloat(quan) * 100000000.0);//Hectares
			break;
		case "1-9":
			standard = (parseFloat(quan) * 40468564.224);//Acres
			break;
		case "1-10":
			standard = (parseFloat(quan) * 0.000000000000000000000001);//Barns
			break;
		case "1-11":
			standard = (parseFloat(quan) * 40468564.224 / 32.0 / 20.0 / 20.0 / 20.0);//Dhurkis
			break;
		case "1-12":
			standard = (parseFloat(quan) * 40468564.224 / 32.0 / 20.0 / 20.0);//Dhurs
			break;
		case "1-13":
			standard = (parseFloat(quan) * 40468564.224 / 32.0);//Khatas
			break;
		case "1-14":
			standard = (parseFloat(quan) * 40468564.224 / 32.0 / 20.0);//Bighas
			break;
		case "1-15":
			standard = (parseFloat(quan) * 7168000000.0);//Labor
			break;
		
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "1-0":
			result = (standard / 929.0304);//Square Feet
			break;
		case "1-1":
			result = (standard / 1.0);//Square Centimetres
			break;
		case "1-2":
			result = (standard / 10000.0);//Square metres
			break;
		case "1-3":
			result = (standard / 10000000000.0);//Square kilometres
			break;	
		case "1-4":
			result = (standard / 6.4516);//Square Inch
			break;	
		case "1-5":
			result = (standard / 8361.2736);//Square YArd
			break;
		case "1-6":
			result = (standard / 25899881103.0);//Square Miles
			break;	
		case "1-7":
			result = (standard / 1000000.0);//Ares
			break;
		case "1-8":
			result = (standard / 100000000.0);//Hectares
			break;
		case "1-9":
			result = (standard / 40468564.224);//Acres
			break;
		case "1-10":
			result = (standard / 0.000000000000000000000001);//Barns
			break;
		case "1-11":
			result = (standard / 40468564.224 * 32.0 * 20.0 * 20.0 * 20.0);//Dhurkis
			break;
		case "1-12":
			result = (standard / 40468564.224 * 32.0 * 20.0 * 20.0);//Dhurs
			break;
		case "1-13":
			result = (standard / 40468564.224 * 32.0);//Khatas
			break;
		case "1-14":
			result = (standard / 40468564.224 * 32.0 * 20.0);//Bighas
			break;
		case "1-15":
			result = (standard / 7168000000.0);//Labor
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

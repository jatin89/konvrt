function convertEnergy(quan, fromU, toU) {
	var standard = 0.00; // Joules
	var result = 0.00;
	
	switch (fromU) {
		case "8-0":
			standard = (parseFloat(quan) * 1.00);//Joules
			break;
		case "8-1":
			standard = (parseFloat(quan) * 1000);//Kilojoules
			break;
		case "8-2":
			standard = (parseFloat(quan) * 0.0000001);//Ergs
			break;
		case "8-3":
			standard = (parseFloat(quan) * 1.356);//Foot-Pound Forces
			break;
		case "8-4":
			standard = (parseFloat(quan) * 1055);//British Thermal Units
			break;
		case "8-5":
			standard = (parseFloat(quan) * 1000000);//MegaJoules
			break;
		case "8-6":
			standard = (parseFloat(quan) * 3600000);//Kilowatt-hours
			break;
		case "8-7":
			standard = (parseFloat(quan) * 105500000);//Therms
			break;
		case "8-8":
			standard = (parseFloat(quan) * 4.187);//Calories
			break;
		case "8-9":
			standard = (parseFloat(quan) * 4187);//Kilo-Calories
			break;
		case "8-10":
			standard = (parseFloat(quan) * 1.602e-19);//Electron Volts
			break;
		case "8-11":
			standard = (parseFloat(quan) * 4184000000);//Tonnes of TNT
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "8-0":
			result = (standard / 1.00);//Joules
			break;
		case "8-1":
			result = (standard / 1000);//Kilojoules
			break;
		case "8-2":
			result = (standard / 0.0000001);//Ergs
			break;
		case "8-3":
			result = (standard / 1.356);//Foot-Pound Forces
			break;
		case "8-4":
			result = (standard / 1055);//British Thermal Units
			break;
		case "8-5":
			result = (standard / 1000000);//MegaJoules
			break;
		case "8-6":
			result = (standard / 3600000);//Kilowatt-hours
			break;
		case "8-7":
			result = (standard / 105500000);//Therms
			break;
		case "8-8":
			result = (standard / 4.187);//Calories
			break;
		case "8-9":
			result = (standard / 4187);//Kilo-Calories
			break;
		case "8-10":
			result = (standard / 1.602e-19);//Electron Volts
			break;
		case "8-11":
			result = (standard / 4184000000);//Tonnes of TNT
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

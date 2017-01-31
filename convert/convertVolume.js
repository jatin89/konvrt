function convertVolume(quan, fromU, toU) {
	var standard = 0.00; // Cubic Centimetres
	var result = 0.00;
	
	switch (fromU) {
		case "2-0":
			standard = (parseFloat(quan) * 1000);//Litres
			break;	
		case "2-1":
			standard = (parseFloat(quan) * 1000000);//Cubic Metres
			break;
		case "2-2":
			standard = (parseFloat(quan) * 1.00);//Cubic CentiMetres
			break;
		case "2-3":
			standard = (parseFloat(quan) * 1.00);//Millilitres
			break;
		case "2-4":
			standard = (parseFloat(quan) * 3785.4117888);//Galon
			break;
		case "2-5":
			standard = (parseFloat(quan) * 16.387064);//Cubic Inch
			break;		
		case "2-6":
			standard = (parseFloat(quan) * 28316.846592);//Cubic Feet
			break;
		case "2-7":
			standard = (parseFloat(quan) * 0.001);//Cubic Decimetres
			break;
		case "2-8":
			standard = (parseFloat(quan) * 29.5735296);//Fluid Ounce
			break;
		case "2-9":
			standard = (parseFloat(quan) * 3.6966912);//Fluid Drams
			break;		
		case "2-10":
			standard = (parseFloat(quan) * 473.1764736);//Pints US Liq
			break;
		case "2-11":
			standard = (parseFloat(quan) * 946.3529472);//Quart US liq
			break;
		case "2-12":
			standard = (parseFloat(quan) * 158987.29513);//Barrel US Oil
			break;
		case "2-13":
			standard = (parseFloat(quan) * 35238.742426);//Bushels
			break;		
		case "2-14":
			standard = (parseFloat(quan) * 8809.6856064);//Pecks
			break;
		case "2-15":
			standard = (parseFloat(quan) * 3624556.3638);//Cords
			break;
		case "2-16":
			standard = (parseFloat(quan) * 0.0001377);//Gill
			break;
		case "2-17":
			standard = (parseFloat(quan) * 0.06161152);//Minims Us Liq
			break;
		case "2-18":
			standard = (parseFloat(quan) * 0.341);//Beers
			break;		
		case "2-19":
			standard = (parseFloat(quan) * 5);//Teaspoons
			break;
		case "2-20":
			standard = (parseFloat(quan) * 15);//Tablespoons
			break;
		case "2-21":
			standard = (parseFloat(quan) * 240);//Cups
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "2-0":
			result = (standard / 1000);//Litres
			break;
		case "2-1":
			result = (standard / 1000000);//Cubic Metres
			break;
		case "2-2":
			result = (standard / 1.00);//Cubic Centimetres
			break;
		case "2-3":
			result = (standard / 1.00);//Millilitres
			break;
		case "2-4":
			result = (standard / 3785.4117888);//Galon
			break;
		case "2-5":
			result = (standard / 16.387064);//Cubic Inch
			break;
		case "2-6":
			result = (standard / 28316.846592);//Cubic Feet
			break;
		case "2-7":
			result = (standard / 0.001);//Cubic Decimetres
			break;
		case "2-8":
			result = (standard / 29.5735296);//Fluid Ounce
			break;
		case "2-9":
			result = (standard / 3.6966912);//Fluid Drams
			break;
		case "2-10":
			result = (standard / 473.1764736);//Pints US Liq
			break;
		case "2-11":
			result = (standard / 946.3529472);//Quart US liq
			break;
		case "2-12":
			result = (standard / 158987.29513);//Barrel US Oil
			break;
		case "2-13":
			result = (standard / 35238.742426);//Bushels
			break;
		case "2-14":
			result = (standard / 8809.6856064);//Pecks
			break;
		case "2-15":
			result = (standard / 3624556.3638);//Cords
			break;
		case "2-16":
			result = (standard / 0.0001377);//Gill
			break;
		case "2-17":
			result = (standard / 0.06161152);//Minims Us Liq
			break;
		case "2-18":
			result = (standard / 0.341);//Beers
			break;
		case "2-19":
			result = (standard /  5);//Teaspoons
			break;
		case "2-20":
			result = (standard / 15);//Tablespoons
			break;
		case "2-21":
			result = (standard / 240);//Cups
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

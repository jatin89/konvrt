function convertMass(quan, fromU, toU) {
	var standard = 0.00; // Kilograms
	var result = 0.00;
	
	switch (fromU) {
		case "6-0":
			standard = (parseFloat(quan) * 1.00);//Kilograms
			break;
		case "6-1":
			standard = (parseFloat(quan) * 0.001);//Grams
			break;
		case "6-2":
			standard = (parseFloat(quan) * 0.4536);//Pounds
			break;
		case "6-3":
			standard = (parseFloat(quan) * 0.02835);//Ounces
			break;
		case "6-4":
			standard = (parseFloat(quan) * 1000.0);//Tonnes
			break;
		case "6-5":
			standard = (parseFloat(quan) * 1.783e-36);//Electron Volts
			break;
		case "6-6":
			standard = (parseFloat(quan) * 1.66053892e-27);//Atomic Mass Units 
			break;
		case "6-7":
			standard = (parseFloat(quan) * 14.593903);//Slugs
			break;
		case "6-8":
			standard = (parseFloat(quan) * 2.17651e-8);//Plank Masses
			break;
		case "6-9":
			standard = (parseFloat(quan) * 1.9891e30);//Solar Masses
			break;
		case "6-10":
			standard = (parseFloat(quan) * 200.0);//Yo Mammas
			break;
		case "6-11":
			standard = (parseFloat(quan) / 9.81);//Earth Newton
			break;
		case "6-12":
			standard = (parseFloat(quan) / 1.62);//Moon Newton
			break;
		case "6-13":
			standard = (parseFloat(quan) / 274.0 );//Sun (Sol) Newton
			break;
		case "6-14":
			standard = (parseFloat(quan) / 3.61);//Mercury Newton
			break;
		case "6-15":
			standard = (parseFloat(quan) / 8.83);//Venus Newton
			break;
		case "6-16":
			standard = (parseFloat(quan) / 3.75);//Mars Newton
			break;
		case "6-17":
			standard = (parseFloat(quan) / 26.0);//Jupiter Newton
			break;
		case "6-18":
			standard = (parseFloat(quan) / 11.20);//Saturn Newton
			break;
		case "6-19":
			standard = (parseFloat(quan) / 10.5);//Uranus Newton
			break;
		case "6-20":
			standard = (parseFloat(quan) / 13.3);//Neptune Newton
			break;
		case "6-21":
			standard = (parseFloat(quan) / 0.61);//Pluto Newton
			break;			
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "6-0":
			result = (standard / 1.00);//Kilograms
			break;
		case "6-1":
			result = (standard / 0.001);//Grams
			break;
		case "6-2":
			result = (standard / 0.4536);//Pounds
			break;
		case "6-3":
			result = (standard / 0.02835);//Ounces
			break;
		case "6-4":
			result = (standard / 1000.0);//Tonnes
			break;
		case "6-5":
			result = (standard / 1.783e-36);//Electron Volts
			break;
		case "6-6":
			result = (standard / 1.66053892e-27);//Atomic Mass Units 
			break;
		case "6-7":
			result = (standard / 14.593903);//Slugs
			break;
		case "6-8":
			result = (standard / 2.17651e-8);//Plank Masses
			break;
		case "6-9":
			result = (standard / 1.9891e30);//Solar Masses
			break;
		case "6-10":
			result = (standard / 200.0);//Yo Mammas
			break;
		case "6-11":
			result = (standard * 9.81);//Earth Newton
			break;
		case "6-12":
			result = (standard * 1.62);//Moon Newton
			break;
		case "6-13":
			result = (standard * 274.0 );//Sun (Sol) Newton
			break;
		case "6-14":
			result = (standard * 3.61);//Mercury Newton
			break;
		case "6-15":
			result = (standard * 8.83);//Venus Newton
			break;
		case "6-16":
			result = (standard * 3.75);//Mars Newton
			break;
		case "6-17":
			result = (standard * 26.0);//Jupiter Newton
			break;
		case "6-18":
			result = (standard * 11.20);//Saturn Newton
			break;
		case "6-19":
			result = (standard * 10.5);//Uranus Newton
			break;
		case "6-20":
			result = (standard * 13.3);//Neptune Newton
			break;
		case "6-21":
			result = (standard * 0.61);//Pluto Newton
			break;			
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

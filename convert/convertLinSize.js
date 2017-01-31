function convertLinSize(quan, fromU, toU) {
	var standard = 0.00; // centimetres
	var result = 0.00;
	
	switch (fromU) {
		case "0-0":
			standard = (parseFloat(quan) * 2.54);//inches
			break;
		case "0-1":
			standard = (parseFloat(quan) * 1.00);//centimeters
			break;
		case "0-2":
			standard = (parseFloat(quan) * 100.0);//meters
			break;
		case "0-3":
           standard = (parseFloat(quan) * 100000.0);//kilometers
           break;
		case "0-4":
           standard = (parseFloat(quan) * 91.44);//yards
           break;
		case "0-5":
           standard = (parseFloat(quan) * 160934.0);//miles
           break;
		case "0-6":
           standard = (parseFloat(quan) * 555600.0);//leagues
           break;
		case "0-7":
           standard = (parseFloat(quan) * 182.88);//fathoms
           break;
		case "0-8":
           standard = (parseFloat(quan) * 185200.0);//nautical miles
           break;
		case "0-9":
           standard = (parseFloat(quan) * 0.00000001);//angstroms
           break;
		case "0-10":
           standard = (parseFloat(quan) * 14959787069100.0);//astronomical units
           break;
		case "0-11":
           standard = (parseFloat(quan) * 946073047258080000.0);//light years
           break;
		case "0-12":
           standard = (parseFloat(quan) * 290061119578000000.0 );//parsecs
           break;
		case "0-13":
           standard = (parseFloat(quan) * 30.48);//feet
           break;
		case "0-14":
           standard = (parseFloat(quan) * 637100000);//Earth Radius
           break;
		case "0-15":
           standard = (parseFloat(quan) * 0.00000000529 );//Bohr Radius
           break;
		case "0-16":
           standard = (parseFloat(quan) * 386.16e-7 );//Natural Units
           break;
		case "0-17":
           standard = (parseFloat(quan) * 0.00000000000000000000000000000000162);//Planck Length
           break;
		case "0-18":
           standard = (parseFloat(quan) * 46.2788);//Cubits
           break;
		case "0-19":
           standard = (parseFloat(quan) * 9144.0);//Football Fields
           break;
		case "0-20":
           standard = (parseFloat(quan) * 0.0000005);//Beard Secons
           break;
		case "0-21":
           standard = (parseFloat(quan) * 20116.8);//Furlongs
           break;
		case "0-22":
           standard = (parseFloat(quan) * 243.84);//Horse Lengths
           break;
		case "0-23":
           standard = (parseFloat(quan) * 148);//Pace
           break;
	 	case "0-24":
           standard = (parseFloat(quan) * 2011.68);//Chains
           break;
		case "0-25":
           standard = (parseFloat(quan) * 20.1168);//Links
           break;
		case "0-26":
           standard = (parseFloat(quan) * 0.8466666666667);//Barleycorn
           break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "0-0":
			result = (standard / 2.54);//inches
			break;
		case "0-1":
			result = (standard * 1.00);//centimeters
			break;
		case "0-2":
			result = (standard / 100.0);//meters
			break;
		case "0-3":
           result = (standard / 100000.0);//kilometers
           break;
		case "0-4":
           result = (standard / 91.44);//yards
           break;
		case "0-5":
           result = (standard / 160934.0);//miles
           break;
		case "0-6":
           result = (standard / 555600.0);//leagues
           break;
		case "0-7":
           result = (standard / 182.88);//fathoms
           break;
		case "0-8":
           result = (standard / 185200.0);//nautical miles
           break;
		case "0-9":
           result = (standard / 0.00000001);//angstroms
           break;
		case "0-10":
           result = (standard / 14959787069100.0);//astronomical units
           break;
		case "0-11":
           result = (standard / 946073047258080000.0);//light years
           break;
		case "0-12":
           result = (standard / 290061119578000000.0 );//parsecs
           break;
		case "0-13":
           result = (standard / 30.48);//feet
           break;
		case "0-14":
           result = (standard / 637100000);//Earth Radius
           break;
		case "0-15":
           result = (standard / 0.00000000529);//Bohr Radius
           break;
		case "0-16":
           result = (standard / 386.16e-15);//Natural Unit
           break; 
		case "0-17":
		   result = (standard / 0.00000000000000000000000000000000162)//Planck Length 
		   break;
		case "0-18":
		   result = (standard / 46.2788)//Cubits 
		   break;
		case "0-19":
		   result = (standard / 9144.0)//FootBall Fields 
		   break;
		case "0-20":
		   result = (standard / 0.0000005)//Beard Second
		   break;
		case "0-21":
		   result = (standard / 20116.8)//Furlongs
		   break;
		case "0-22":
		   result = (standard / 243.84)//Horse Lengths
		   break;
		case "0-23":
		   result = (standard / 148)//Pace
		   break;
		case "0-24":
		   result = (standard / 2011.68)//Chain
		   break;
		case "0-25":
		   result = (standard / 20.1168)//Links
		   break;   
		case "0-26":
		   result = (standard / 0.8466666666667)//Barleycorns
		   break;  
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

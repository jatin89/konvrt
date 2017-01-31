function convertTime(quan, fromU, toU) {
	var standard = 0.00; // seconds
	var result = 0.00;
	
	switch (fromU) {
		case "3-0":
			standard = (parseFloat(quan) * 60.00);//Minute
			break;
		case "3-1":
			standard = (parseFloat(quan) * 3600);//hour
			break;
		case "3-2":
			standard = (parseFloat(quan) * 1.00);//seconds
			break;
		case "3-3":
			standard = (parseFloat(quan) * 1e-3);//Milliseconds
			break;
		case "3-4":
			standard = (parseFloat(quan) * 86400);//Days
			break;
		case "3-5":
			standard = (parseFloat(quan) * 604800);//Weeks
			break;
		case "3-6":
			standard = (parseFloat(quan) * 31556908.8);//Years
			break;
		case "3-7":
			standard = (parseFloat(quan) * 315569088);//Decades
			break;
		case "3-8":
			standard = (parseFloat(quan) * 3155690880);//Centuries
			break;
		case "3-9":
			standard = (parseFloat(quan) * 5.39106e-44);//Plank Time Unit
			break;
		case "3-10":
			standard = (parseFloat(quan) * 1.0e-24);//Yoctoseconds
			break;
		case "3-11":
			standard = (parseFloat(quan) * 0.0167);//Jiffies
			break;
		case "3-12":
			standard = (parseFloat(quan) * 1e-9);//Nanoseconds
			break;
		case "3-13":
			standard = (parseFloat(quan) * 90);//Moments
			break;
		case "3-14":
			standard = (parseFloat(quan) * 1002240);//Megaseconds
			break;
		case "3-15":
			standard = (parseFloat(quan) * 1209600);//Fortnight
			break;
		case "3-16":
			standard = (parseFloat(quan) * 2551442.976);//Lunar Months
			break;
		case "3-17":
			standard = (parseFloat(quan) * 7889231.4941);//Seasons/Quarters
			break;
		case "3-18":
			standard = (parseFloat(quan) * 2635200);//Month
			break;
		case "3-19":
			standard = (parseFloat(quan) * 157784544);//Lustrums
			break;
		case "3-20":
			standard = (parseFloat(quan) * 31556908800);//Millenium
			break;
		
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "3-0":
			result = (standard / 60.00);//Minute
			break;
		case "3-1":
			result = (standard / 3600);//hours
			break;
		case "3-2":
			result = (standard / 1.00);//seconds
			break;
		case "3-3":
			result = (standard / 1e-3);//Milliseconds
			break;
		case "3-4":
			result = (standard / 86400);//Days
			break;
		case "3-5":
			result = (standard / 604800);//Weeks
			break;
		case "3-6":
			result = (standard / 31556908.8);//Years
			break;
		case "3-7":
			result = (standard / 315569088);//Decades
			break;
		case "3-8":
			result = (standard / 3155690880);//Centuries
			break;
		case "3-9":
			result = (standard / 5.39106e-44);//Plank Time Unit
			break;
		case "3-10":
			result = (standard / 1.0e-24);//Yoctoseconds
			break;
		case "3-11":
			result = (standard / 0.0167);//Jiffies
			break;
		case "3-12":
			result = (standard /  1e-9);//Nanoseconds
			break;
		case "3-13":
			result = (standard / 90);//Moments
			break;
		case "3-14":
			result = (standard / 1002240);//Megaseconds
			break;
		case "3-15":
			result = (standard / 1209600);//Fortnight
			break;
		case "3-16":
			result = (standard /  2551442.976);//Lunar Months
			break;
		case "3-17":
			result = (standard / 7889231.4941);//Seasons/Quarters
			break;
		case "3-18":
			result = (standard / 2635200);//Month
			break;
		case "3-19":
			result = (standard / 157784544);//Lustrums
			break;
		case "3-20":
			result = (standard / 31556908800);//Millenium
			break;	
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

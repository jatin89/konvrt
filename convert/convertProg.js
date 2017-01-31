function convertProg(quan, fromU, toU) {
	var standard = 0.00; // Bit
	var result = 0.00;
	
	switch (fromU) {
		case "7-0":
			standard = (parseFloat(quan) * 1.153e+18);//Exabit
			break;
		case "7-1":
			standard = (parseFloat(quan) * 1126000000000000);//Petabit
			break;
		case "7-2":
			standard = (parseFloat(quan) * 1100000000000);//Terabit
			break;
		case "7-3":
			standard = (parseFloat(quan) * 1074000000);//Gigabit
			break;
		case "7-4":
			standard = (parseFloat(quan) * 1049000);//Megabit
			break;
		case "7-5":
			standard = (parseFloat(quan) * 1024);//Kilobit
			break;
		case "7-6":
			standard = (parseFloat(quan) * 1);//Bit
			break;
		case "7-7":
			standard = (parseFloat(quan) * 9.223e+18);//Exbi-Byte
			break;
		case "7-8":
			standard = (parseFloat(quan) * 9007000000000000);//Peta-Byte
			break;
		case "7-9":
			standard = (parseFloat(quan) * 8796000000000);//Tera-Byte
			break;
		case "7-10":
			standard = (parseFloat(quan) * 8590000000);//Giga-Byte
			break;
		case "7-11":
			standard = (parseFloat(quan) * 8389000);//Mega-Byte
			break;
		case "7-12":
			standard = (parseFloat(quan) * 8192);//Kilo-Byte
			break;
		case "7-13":
			standard = (parseFloat(quan) * 8);//Byte
			break;
		
			
			
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "7-0":
			result = (standard / 1.153e+18);//Exabit
			break;
		case "7-1":
			result = (standard / 1126000000000000);//Petabit
			break;
		case "7-2":
			result = (standard / 1100000000000);//Terabit
			break;
		case "7-3":
			result = (standard / 1074000000);//Gigabit
			break;
		case "7-4":
			result = (standard / 1049000);//Megabit
			break;
		case "7-5":
			result = (standard / 1024);//Kilobit
			break;
		case "7-6":
			result = (standard / 1);//Bit
			break;
		case "7-7":
			result = (standard /  9.223e+18);//Exbi-Byte
			break;
		case "7-8":
			result = (standard / 9007000000000000);//Peta-Byte
			break;
		case "7-9":
			result = (standard / 8796000000000);//Tera-Byte
			break;
		case "7-10":
			result = (standard / 8590000000);//Giga-Byte
			break;
		case "7-11":
			result = (standard / 8389000);//Mega-Byte
			break;
		case "7-12":
			result = (standard / 8192);//Kilo-Byte
			break;
		case "7-13":
			result = (standard / 8);//Byte
			break;
	
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

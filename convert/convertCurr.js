function convertCurr(quan, fromU, toU, rates) {
	var standard = 0.00; // US Dollars
	var result = 0.00;
	
	switch (fromU) {
		case "9-0":
			standard = (parseFloat(quan) / 1.00);//US Dollars
			break;
		case "9-1":
			standard = (parseFloat(quan) / getRate(rates, "JPY"));//Japanese yen
			break;
		case "9-2":
			standard = (parseFloat(quan) / getRate(rates, "GBP"));//British pound sterling
			break;
		case "9-3":
			standard = (parseFloat(quan) / getRate(rates, "RUB"));//Russian rubles
			break;
		case "9-4":
			standard = (parseFloat(quan) / getRate(rates, "INR"));//Indian rupees
			break;
		case "9-5":
			standard = (parseFloat(quan) / getRate(rates, "CNY"));//Chinese yuans
			break;
		case "9-6":
			standard = (parseFloat(quan) / getRate(rates, "NOK"));//norwiegen krones
			break;
		case "9-7":
			standard = (parseFloat(quan) / getRate(rates, "HKD"));//hong kong dollars
			break;
		case "9-8":
			standard = (parseFloat(quan) / getRate(rates, "SEK"));//swedish krona
			break;
		case "9-9":
			standard = (parseFloat(quan) / getRate(rates, "CAD"));//canadian dollars
			break;
		case "9-10":
			standard = (parseFloat(quan) / getRate(rates, "AUD"));//autralian dollars
			break;
		case "9-11":
			standard = (parseFloat(quan) / getRate(rates, "CHF"));//swiss francs
			break;
		case "9-12":
			standard = (parseFloat(quan) / getRate(rates, "EUR"));//euros
			break;
		case "9-13":
			standard = (parseFloat(quan) / getRate(rates, "BTC"));//bitcoins
			break;
		case "9-14":
			standard = (parseFloat(quan) * 10.07);//wizarding galleons
			break;
		case "9-15":
			standard = (parseFloat(quan) * 0.59);//wizarding sickles
			break;
		case "9-16":
			standard = (parseFloat(quan) * 0.02);//wizarding knuts
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	console.log("standard is: " + standard.toString());
	switch (toU) {
		case "9-0":
			result = (standard * 1.00);//US Dollars
			break;
		case "9-1":
			result = (standard * getRate(rates, "JPY"));//Japanese yen
			break;
		case "9-2":
			result = (standard * getRate(rates, "GBP"));//British pound sterling
			break;
		case "9-3":
			result = (standard * getRate(rates, "RUB"));//Russian rubles
			break;
		case "9-4":
			result = (standard * getRate(rates, "INR"));//indian rupees
			break;
		case "9-5":
			result = (standard * getRate(rates, "CNY"));//chinese yuans
			break;
		case "9-6":
			result = (standard * getRate(rates, "NOK"));//norwiegen krones
			break;
		case "9-7":
			result = (standard * getRate(rates, "HKD"));//hong kong dollars
			break;
		case "9-8":
			result = (standard * getRate(rates, "SEK"));//swedish krona
			break;
		case "9-9":
			result = (standard * getRate(rates, "CAD"));//canadian dollars
			break;
		case "9-10":
			result = (standard * getRate(rates, "AUD"));//autralian dollars
			break;
		case "9-11":
			result = (standard * getRate(rates, "CHF"));//swiss francs
			break;
		case "9-12":
			result = (standard * getRate(rates, "EUR"));//euros
			break;
		case "9-13":
			result = (standard * getRate(rates, "BTC"));//bitcoins
			break;
		case "9-14":
			result = (standard / 10.07);//wizarding galleons
			break;
		case "9-15":
			result = (standard / 0.59);//wizarding sickles
			break;
		case "9-16":
			result = (standard / 0.02);//wizarding knuts
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	if (!quan) { 
		return " ";
	}
	return result;
}

function getRate(rates, code) {
	for (var i=1; i<rates.length; i++) {
		if (code == rates[i].substring(0,3)) {
			console.log(rates[i].substring(4,rates[i].length));
			return parseFloat(rates[i].substring(4,rates[i].length));
		}
	}
	return 1.00;
}

function isNum(e){
	var charCode = (e.which) ? e.which : event.keyCode;
	if (((charCode < 58 && charCode > 47 ) || (charCode < 106 && charCode > 95) || (charCode == 8) || (charCode == 190) || (charCode==189) || (charCode == 109) || (charCode == 173) ) && (!event.shiftKey)) {
		return true;
	} else {
        return false;
	}
}

function copyToClipboard() {
	var text = document.getElementById('resQuan').innerHTML + " " + document.getElementById('resUnit').innerHTML;
	window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
}

function genAPI() {
	var url = window.location.protocol + "//" + window.location.hostname + window.location.pathname.substring(0,window.location.pathname.length - 13) + "/api.html?";
	url += "q=" + document.getElementById("fromQuan").value;
	url += "&from=" + document.getElementById("fromUnit").options[document.getElementById("fromUnit").selectedIndex].id;
	url += "&to=" + document.getElementById("toUnit").options[document.getElementById("toUnit").selectedIndex].id;
	window.prompt ("konvrt API URL:", url);
}

function runConv() {
    if(document.getElementById('fromQuan').value.length === 0) {
		document.getElementById('ctcbb').disabled = true;
	} else {
		document.getElementById('ctcbb').disabled = false;
	}
	var quan = parseFloat(document.getElementById("fromQuan").value);
	var result="";
	var fromU = document.getElementById("fromUnit").options[document.getElementById("fromUnit").selectedIndex].id;
	var toU = document.getElementById("toUnit").options[document.getElementById("toUnit").selectedIndex].id;
	result = calcDirector(quan, fromU, toU);
	
	document.getElementById("resQuan").innerHTML = result.toString();
	document.getElementById("resUnit").innerHTML = getUnit(toU,quan);
}

function calcDirector(quan, fromU, toU) {
	var result = "";
	switch (fromU.charAt(0)) {
		case "0":
			result = convertLinSize(quan, fromU, toU);
			break;
		case "1":
			result = convertPlanarSize(quan, fromU, toU);
			break;
		case "2":
			result = convertVolume(quan, fromU, toU);
			break;
		case "3":
			result = convertTime(quan, fromU, toU);
			break;
		case "4":
			result = convertTemp(quan, fromU, toU);
			break;
		case "5":
			result = convertDensity(quan, fromU, toU);
			break;
		case "6":
			result = convertMass(quan, fromU, toU);
			break;
		case "7":
			result = convertProg(quan, fromU, toU);
			break;
		case "8":
			result = convertEnergy(quan, fromU, toU);
			break;
		case "9":
			result = convertCurr(quan, fromU, toU, cRates);
			break;
		default:
			alert("Error in parsing variables. Ensure that all variables are present.");
	}
	return result;
}
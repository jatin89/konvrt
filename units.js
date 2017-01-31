var cRates = ["Rates"];

function loadCat() {
	var unitCat = document.getElementById("unitCat");
	var fromUnit = document.getElementById("fromUnit");
	var toUnit = document.getElementById("toUnit");
	
	unitCat.innerHTML = "";
	for (var i=0; i < categories.length; i++) {
		var opt = document.createElement("option");
		opt.innerHTML = categories[i].substring(categories[i].indexOf(":")+1, categories[i].length-categories[i].indexOf(":")+1);
		opt.id = categories[i].substring(0,categories[i].indexOf(":")).toString();
		unitCat.appendChild(opt);
	}
	unitCat.selectedIndex = 0;
	
	loadUnits();
	
	populateExchangeRates(cRates);
}

function populateExchangeRates(arr) {
	$.ajax({
		url: "http://openexchangerates.org/api/latest.json?app_id=80a0f454036643358bbe97e45ad5cca3",
	    dataType: "text",
		async: false,
	    success: function(data) {
			var json = $.parseJSON(data);
			$.each(json.rates, function(value, key) {
				arr.push(value+":"+key);
			});
		}
	});
}

function loadUnits() {
	var unitCat = document.getElementById("unitCat");
	var fromUnit = document.getElementById("fromUnit");
	var toUnit = document.getElementById("toUnit");
	
	fromUnit.innerHTML = "";
	toUnit.innerHTML = "";
	var num = catind[unitCat.options[unitCat.selectedIndex].id.substring(0,1)].length;
	for (var i=0; i < num; i++) {
		updateSelect(fromUnit, i);
		updateSelect(toUnit, i);
	}
	
	runConv();
}

function updateSelect(sel, i) {
	var opt = document.createElement("option");
	var cat = catind[unitCat.options[unitCat.selectedIndex].id.substring(0,1)];
	var ind = cat[i].indexOf(":") + 1;
	opt.innerHTML = cat[i].substring(ind,cat[i].length);
	opt.id=cat[i].substring(0,ind-1);
	sel.appendChild(opt);
	sel.disabled = false;	
}

function getUnit(u, q) {
	if (!q) {
		return " ";
	}
	var cat = catind[u.substring(0,1)];
	var un = u.substring((u.indexOf("-") + 1), u.length)
	var ind = cat[un].indexOf(":") + 1;
	var result = cat[un].substring(ind,cat[un].length);
	return result;
}

var categories = [
"0:Length",
"1:Area",
"2:Volume",
"3:Time",
"4:Temperature",
"5:Density",
"6:Mass",
"7:Programming",
"8:Energy",
"9:Currency"
];

var length = [
"0-0:Inches",
"0-1:Centimetres",
"0-2:Metres",
"0-3:Kilometres",
"0-4:Yards",
"0-5:Miles",
"0-6:Leagues",
"0-7:Fathoms",
"0-8:Nautical Miles",
"0-9:Angstroms",
"0-10:Astronomical Units",
"0-11:Light Years",
"0-12:Parsecs",
"0-13:Feet",
"0-14:Earth Radius",
"0-15:Bohr Radius",
"0-16:Natural Units",
"0-17:Planck Lengths",
"0-18:Cubits",
"0-19:Football Fields",
"0-20:Beard-seconds",
"0-21:Furlongs",
"0-22:Horse lengths",
"0-23:Paces",
"0-24:Chains",
"0-25:Links",
"0-26:Barleycorns"
];

var area = [
"1-0:Square Feet",
"1-1:Square Centimetres",
"1-2:Square metres",
"1-3:Square Kilometres",
"1-4:Square Inches",
"1-5:Square Yards",
"1-6:Square Miles",
"1-7:Ares",
"1-8:Hectares",
"1-9:Acres",
"1-10:Barns",
"1-11:Dhurkis",
"1-12:Dhurs",
"1-13:Kathas",
"1-14:Bighas",
"1-15:Labor"
];

var vol = [
"2-0:Litres",
"2-1:Cubic Metres",
"2-2:Cubic Centimetres",
"2-3:Millilitres",
"2-4:Gallons",
"2-5:Cubic Inches",
"2-6:Cubic Feet",
"2-7:Cubic Decimetres",
"2-8:Fluid Ounces",
"2-9:Fluid Drams",
"2-10:Pints",
"2-11:Quarts",
"2-12:Barrels",
"2-13:Bushels",
"2-14:Pecks",
"2-15:Cords",
"2-16:Gill",
"2-17:Minims",
"2-18:Beers",
"2-19:Teaspoons",
"2-20:Tablespoons",
"2-21:Cups"
];

var time = [
"3-0:Minutes",
"3-1:Hours",
"3-2:Seconds",
"3-3:Milliseconds",
"3-4:Days",
"3-5:Weeks",
"3-6:Years",
"3-7:Decades",
"3-8:Centuries",
"3-9:Planck Time Units",
"3-10:Yoctoseconds",
"3-11:Jiffies (Physics)",
"3-12:Nanoseconds",
"3-13:Moments",
"3-14:Megaseconds",
"3-15:Fortnight",
"3-16:Lunar months",
"3-17:Seasons/Quarters",
"3-18:Months (average)",
"3-19:Lustrums",
"3-20:Millenium"
];

var temp = [
"4-0:Degrees Fahrenheit",
"4-1:Degrees Celsius",
"4-2:Kelvins",
"4-3:Degrees Rankine",
"4-4:Desgrees Delisle",
"4-5:Degrees Newton",
"4-6:Degrees Reaumur",
"4-7:Degrees Romer"
];

var density = [
"5-0:Kilograms per Cubic Metre",
"5-1:Kilograms per Litre",
"5-2:Grams per Millilitre",
"5-3:Tons per Cubic Metre",
"5-4:Ounces per Cubic Inch",
"5-5:Pounds per Cubic Inch",
"5-6:Pounds per Cubic Foot",
"5-7:Pounds per Cubic Yard",
"5-8:Pounds per Gallon",
"5-9:Pounds per Bushel",
"5-10:Grams Per Litre"
];

var mass = [
"6-0:Kilograms",	
"6-1:Grams",	
"6-2:Pounds",	
"6-3:Ounces",	
"6-4:Tonnes",	
"6-5:Electron Volts",	
"6-6:Atomic Mass Units",	
"6-7:Slugs",	
"6-8:Planck Masses",	 
"6-9:Solar Masses",	
"6-10:Yo Mammas",	
"6-11:Earth Newtons",		 
"6-12:Moon (Luna) Newtons",	
"6-13:Sun (Sol) Newtons",	
"6-14:Mercury Newtons",	
"6-15:Venus Newtons",	
"6-16:Mars Newtons",	
"6-17:Jupiter Newtons",	
"6-18:Saturn Newtons",	
"6-19:Uranus Newtons",	
"6-20:Neptune Newtons",	
"6-21:Pluto Newtons",	
];

var prog = [
"7-0:Exabit",
"7-1:Petabit",
"7-2:Terabit",
"7-3:Gigabit",
"7-4:Megabit",
"7-5:Kilobit",
"7-6:Bit",
"7-7:Exabyte",
"7-8:Petabyte",
"7-9:Terabyte",
"7-10:Gigabyte",
"7-11:Megabyte",
"7-12:Kilobyte",
"7-13:Byte"
];

var energy = [
"8-0:Joules",
"8-1:Kilojoules",
"8-2:Ergs",
"8-3:Foot-Pound Forces",
"8-4:British Thermal Units",
"8-5:Megajoules",
"8-6:Kilowatt-Hours",
"8-7:Therms",
"8-8:Calories",
"8-9:Kilo-calories",
"8-10:Electron Volts",
"8-11:Tonnes of TNT"
];

var curr = [
"9-0:US Dollars",
"9-1:Japanese Yen",
"9-2:British Pounds Sterling",
"9-3:Russian Rubles",
"9-4:Indian Rupees",
"9-5:Chinese Yuans",
"9-6:Norwegian Krones",
"9-7:Hong Kong Dollars",
"9-8:Swedish Krona",
"9-9:Canadian Dollars",
"9-10:Australian Dollars",
"9-11:Swiss Francs",
"9-12:Euros",
"9-13:Bitcoins",
"9-14:Wizarding Galleons",
"9-15:Wizarding Sickles",
"9-16:Wizarding Knuts"
];

var catind = [
	length,
	area,
	vol,
	time,
	temp,
	density,
	mass,
	prog,
	energy,
	curr
]
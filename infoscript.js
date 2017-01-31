function onLoadInf() {
	createBoxes();
	loadCatInf();
}

function loadCatInf() {
	var unitCat = document.getElementById("unitCat");
	var fromUnit = document.getElementById("fromUnit");
	
	unitCat.innerHTML = "";
	for (var i=0; i < categories.length; i++) {
		var opt = document.createElement("option");
		opt.innerHTML = categories[i].substring(categories[i].indexOf(":")+1, categories[i].length-categories[i].indexOf(":")+1);
		opt.id = categories[i].substring(0,categories[i].indexOf(":")).toString();
		unitCat.appendChild(opt);
	}
	unitCat.selectedIndex = 0;
	
	loadUnitsInf();
}

function loadUnitsInf() {
	var unitCat = document.getElementById("unitCat");
	var fromUnit = document.getElementById("fromUnit");
	
	fromUnit.innerHTML = "";
	var num = catind[unitCat.options[unitCat.selectedIndex].id.substring(0,1)].length;
	for (var i=0; i < num; i++) {
		updateSelect(fromUnit, i);
	}
}

function getInfo() {
	var id = document.getElementById("fromUnit").options[document.getElementById("fromUnit").selectedIndex].id;
	document.getElementById("i:" + id).style.display = "block";
	return false;
}

function closeInfo(id) {
	document.getElementById(id).style.display = "none";
}

function createBoxes() {
	var id="";
	var name="";
	var info="";
	for (var i = 0; i < 10; i++) {
		for (var n=0; n < catind[i].length; n++) {
			
			var cat = catind[i];
			var un = cat[n];
			var ind = un.indexOf(":");
			name = un.substring((ind+1),un.length);
			id = un.substring(0,ind);
			info = (getUnitInfo(id));
			
			document.getElementById("icontainer").innerHTML += '<div class="infobox" id="i:'+ id +'" onclick="closeInfo(this.id);"><div><h2>'+name+'</h2>' + info + '</div><button>x</button></div>';
		}
	}
}


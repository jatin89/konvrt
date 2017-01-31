function getUnitInfo(query) {
	var cat = ci[parseInt(query.substring(0, query.indexOf("-")))];
	var un = parseInt(query.substring(query.indexOf("-")+1,query.length));
	return cat[un];
}

//LENGTH
var c0 = [
"An inch is a unit of length in the imperial and United States customary systems of measurement. Historically an inch was also used in a number of other systems of units. Traditional standards for the exact length of an inch have varied in the past, but now the imperial or US customary inch is defined to be exactly 25.4 mm. There are 12 inches in a foot and therefore 36 inches in a yard.",

"A centimetre (International spelling as used by the International Bureau of Weights and Measures; symbol cm) or centimeter (American spelling) is a unit of length inthe metric system, equal to one hundredth of a metre, which is the SI base unit of length. Centi is the SI prefix for a factor of 10<sup>−2</sup>. Hence, a centimetre can be written as 1&times;10<sup>−2</sup> m, 10&times;10<sup>−3</sup> m (engineering notation) or 1E−2 m (scientific E notation) — meaning 10 mm or 1 m/100 respectively.",

"The metre (International spelling as used by the International Bureau of Weights and Measures), or meter (American spelling), (SI unit symbol: m), is the fundamental unit of length (SI dimension symbol: L) in the International System of Units (SI). Originally intended to be one ten-millionth of the distance from the Earth's equator to the North Pole (at sea level), its definition has been periodically refined to reflect growing knowledge of metrology.",

"The kilometre (International spelling as used by the International Bureau of Weights and Measures; SI symbol: km) or kilometer (American spelling) is a unit of length in the metric system, equal to one thousand metres (kilo- being the SI prefix for 1000). It is now the measurement unit used officially for expressing distances between geographical places on land in most of the world; notable exceptions are the United States and the United Kingdom where the statute mile is the official unit used.",

"A yard (abbreviation: yd) is a unit of length in the imperial and United States customary systems of measurement. Historically a yard was also used in other systems of units. The yard is equal to 3 feet or 36 inches.Under an agreement in 1959 between Australia, Canada, New Zealand, South Africa, the United Kingdom and the United States, the yard (known as the 'international yard' in the United States) was legally defined to be exactly 0.9144 metres.",

"A mile is a unit of length most commonly equivalent to 5280 feet or 1760 yards (about 1609 metres). The mile of 5280 feet is also known as the statute mile or land mile to distinguish it from the nautical mile which is about 6076 feet (1852 metres). There have also been many historical miles and similar units in other systems that may be translated into English as miles; they have varied in length from 1 to 15 kilometres.",

"A league is a unit of length (or, rarely, area). It was long common in Europe and Latin America, but it is no longer an official unit in any nation. The league originally referred to the distance a person could walk in an hour Since the Middle Ages, many values have been specified in several countries.",

"A fathom (abbreviation: ftm) = 6 feet or 1.8288 metres, is a unit of length in the old imperial and the U.S. customary systems, used especially for measuring the depth of water.",

"The nautical mile is a unit of length that is approximately one minute of arc measured along any meridian. By international agreement it has been set at 1852 metres exactly (about 6076 feet). It is a non-SI unit used especially by navigators in the shipping and aviation industries, and also in polar exploration. It is commonly used in international law and treaties, especially regarding the limits of territorial waters. It developed from the sea mile and the related geographical mile.",

"The angstrom or ångström ([ˈɔŋstrøm]) is a unit of length equal to 10<sup>−10</sup> m (one ten-billionth of a meter) or 0.1 nm. Its symbol is the Swedish letter Å. The ångström is often used in the natural sciences and technology to express the sizes of atoms, molecules, and microscopic biological structures, the lengths of chemical bonds, the arrangement of atoms in crystals, the wavelengths of electromagnetic radiation, and the dimensions of integrated circuit parts. Atoms of phosphorus, sulfur, and chlorine are 1 Å in covalent radius, while a hydrogen atom is 0.25 Å. The unit was named after the Swedish physicist Anders Jonas Ångström (1814–1874).",

"An astronomical unit (abbreviated as au; other abbreviations that are sometimes used include AU, a.u. and ua) is a unit of length now defined as exactly 149 597 870 700 m (92 955 807.3 mi), or roughly the average Earth–Sun distance.",

"A light-year (symbol: ly), sometimes written light year, lightyear, or Light-year is an astronomical unit of length equal to just under 9.5 trillion kilometres (or about 6 trillion miles). As defined by the International Astronomical Union (IAU), a light-year is the distance that light travels in vacuum in one Julian year.<br /><br />The light-year is most often used when expressing distances to stars and other distances on a galactic scale, especially in non-specialist and popular science publications. The preferred unit in professional astrometry is the parsec (symbol: pc, approximately 3.26 light-years), because it can be more easily derived from, and compared with, observational data.<br /><br />The light-year is a measure of distance, not of time.",

"A parsec (symbol: pc) is an astronomical unit of distance derived by the theoretical annual parallax (or heliocentric parallax) of one arc second, and is simply found as the inverse of that measured parallax. In astronomical terms, parallaxes are simply the apparent measured difference in the position of a star as seen from Earth and another hypothetical observer at the Sun. As the parsec is the inverse of the parallax, the smaller the measured parallax the larger the celestial object's distance.<br /><br /><i>Yes, this is the unit in which the Millenium Falcon's Kessel Run was measured at less than 12.<br /><br /><sup style='font-size:12px'>The Kessel Run is 18 parsecs long, so that means that Han bent the space-time continuum and travelled a distance in less than it's actual distance, probably by breaking light speed.<br /><br />Yes, that makes him even more awesome.</sup>",

"A foot (plural: feet; abbreviation or symbol: ft or &prime; (the prime symbol) is a unit of length. Since 1960 the term has usually referred to the international foot, defined as being one third of a yard, making it 0.3048 meters exactly. It is an integral part of both the imperial and United States customary systems of units. It is subdivided into 12 inches.",

"Earth radius is the distance from Earth's center to its surface, about 6371 kilometers (3959 mi). This length is also used as a unit of distance, especially in astronomy and geology.",

"The Bohr radius is a physical constant, approximately equal to the most probable distance between the proton and electron in a hydrogen atom in its ground state. It is named after Niels Bohr, due to its role in the Bohr model of an atom.<br /><br /><sup style='font-size:12px'>It's a very bohring unit lolol.</sup>",

"In physics, natural units are physical units of measurement based only on universal physical constants. For example the elementary charge e is a natural unit of electric charge, and the speed of light c is a natural unit of speed. A purely natural system of units is defined in such a way that some set of selected universal physical constants are each normalized to unity; that is, their numerical values in terms of these units are exactly 1. While this has the advantage of simplicity, there is a potential disadvantage in terms of loss of clarity and understanding, as these constants are then omitted from mathematical expressions of physical laws.",

"In physics, the Planck length, denoted <big>ℓ</big><sub>P</sub>, is a unit of length, equal to 1.616199(97)&times;10<sup>−35</sup> metres. It is a base unit in the system of Planck units, developed by physicist Max Planck. The Planck length can be defined from three fundamental physical constants: the speed of light in a vacuum, Planck's constant, and the gravitational constant.",

"The cubit is an archaic unit of length based on the length of the forearm from the elbow to the tip of the middle finger. Cubits of various lengths were employed in many parts of the world in antiquity, during the Middle Ages and as recently as Early Modern Times. The term is still used in hedge laying, the length of the forearm being frequently used to determine the interval between stakes placed within the hedge.",

"Football field or football pitch may refer to the playing areas of several codes of football.",

"The beard-second is a unit of length inspired by the light-year, but used for extremely short distances such as those in integrated circuits. The beard-second is defined as the length an average beard grows in one second.",

"A furlong is a measure of distance in imperial units and U.S. customary units equal to one-eighth of a mile, equivalent to 220 yards, 660 feet, 40 rods, or 10 chains. Using the internationally accepted conversion ratio that one inch equals exactly 25.4 millimetres, one furlong is 201.168 metres.",

"A horse length, or simply length, is a unit of measurement for the length of a horse from nose to tail, approximately 8 feet.",

"A pace (or double-pace or passus) was a measure of distance used in Ancient Rome. It was nominally the measure of a full stride from the position of the heel when it is raised from the ground to the point the same heel is set down again at the end of the step. Thus, a distance can be 'paced off' by counting each time the same heel touches ground, or, in other words, every other step. In Rome, this unit was standardized as two gradūs or five Roman feet (about 1.48 metres or 58.1 English inches). There were 1000 passus in one mille, and a mille was sometimes referred to as a mille passuum.",

"A chain is a unit of length. It measures 66 feet, or 22 yards, or 100 links, or 4 rods (20.1168 m). There are 10 chains in a furlong, and 80 chains in one statute mile. An acre is the area of 10 square chains (that is, an area of one chain by one furlong). The chain has been used for several centuries in Britain and in some other countries influenced by British practice.",

"The link (usually abbreviated as 'l.', 'li.' or 'lnk.'), also called a Gunter’s link, is a unit of length in the United States customary system of measurements. A link is exactly 33/50 of a survey foot, or exactly 7.92 survey inches.",

"The barleycorn is the smallest Anglo-Saxon unit of length. Notionally the length of a corn of barley, its actual length was determined in relation to a particular rod of metal, typically a yard-bar, and thus <sup>1</sup>/<sub>108</sub><sup>th</sup> of a yard, 1/36 of foot, or 1/3 of an inch. The unit was nominally the base unit from which the inch was defined.",

]

//AREA
var c1 = [
"The square foot (plural square feet; abbreviated ft<sup>2</sup> or sq ft) is an imperial unit and U.S. customary unit (non-SI, non-metric) of area, used mainly in the United States, Canada, United Kingdom, Bangladesh, India and Pakistan. It is defined as the area of a square with sides of 1 foot.",

"The area equal to a square that is 1 centimeter on each side. Used for measuring small areas such as on drawings. The symbol is cm<sup>2</sup>",

"The square metre (International spelling as used by the International Bureau of Weights and Measures) or square meter (American spelling) is the SI derived unit of area, with symbol m<sup>2</sup>. It is defined as the area of a square whose sides measure exactly one metre. The square metre is derived from the SI base unit of the metre, which itself is defined as the length of the path travelled by light in absolute vacuum during a time interval of <sup>1</sup>/<sub>299 792 458</sub><sup>th</sub> of a second.",

"Square kilometre (International spelling as used by the International Bureau of Weights and Measures) or square kilometer (American spelling), symbol km<sup>2</sup>, is a decimal multiple of the SI unit of surface area, the square metre, one of the SI derived units.",

"A square inch (plural: square inches) is a unit of area, equal to the area of a square with sides of one inch.",

"The square yard is an imperial/US customary unit of area, formerly used in most of the English-speaking world but now generally replaced by the square metre outside of the U.S., Canada and the U.K. It is defined as the area of a square with sides of one yard in length.",

"The square mile (abbreviated as sq mi and sometimes as mi<sup>2</sup>) is an imperial and US unit of measure for an area equal to the area of a square of one statute mile.It should not be confused with miles square, which refers to the number of miles on each side squared.",

"<b>Are</b>, basic unit of area in the metric system, equal to 100 square metres and the equivalent of 0.0247 acres.",

"The hectare (/ˈhɛktɛər/ or /ˈhɛktɑr/; symbol ha) is a metric unit of area defined as 10000 square metres (100 m by 100 m), and primarily used in the measurement of land. In 1795, when the metric system was introduced, the 'are' was defined as 100 square metres and the hectare ('hecto-' + 'are') was thus 100 'ares' or <sup>1</sup>/<sub>100</sub> km<sup>2</sup>. An acre is about 0.4047 hectare and one hectare contains about 2.47 acres.",

"The acre is a unit of area used in the imperial and U.S. customary systems. It is equivalent to 43560 square feet. An acre is about 40% of a hectare – slightly smaller than an American football field.",

"A barn (symbol b) is a unit of area. Originally used in nuclear physics for expressing the cross sectional area of nuclei and nuclear reactions, today it is used in all fields of high energy physics to express the cross sections of any scattering process, and is best understood as a measure of the probability of interaction between small particles. ",

"A dhurki (dhoor-kee) is simply a twentieth of a Dhur. It's only used in rural parts of India, Bangladesh, and Nepal.",

"A dhur (dhoor) is simply a twentieth of a Khata. It's only used in rural parts of India, Bangladesh, and Nepal.",

"A katha (also spelled kattha or cottah, pronounced kah-tha) is a unit of area in Bangladesh and India approximately equal to a twentieth of a bigha. This unit is still in use in much of Bangladesh, India, and Nepal. 32 khata make up an acre.",

"The bigha (Hindi: बीघा, Assamese: বিঘা, Bengali: বিঘা) is a unit of measurement of area of a land, commonly used in Nepal, Bangladesh and in a few states of India including Uttarakhand, Maharashtra, Himachal Pradesh, Uttar Pradesh, Bihar, West Bengal, Assam, Gujarat, Rajasthan etc. It is the size of 20 kathas.",

"A labor is a unit of area, used to express the area of land, that is equal to 1 million square varas. A labor is equivalent to about 177.1 acres (71.67 ha).",

]

//VOLUME
var c2 = [
"The litre (International spelling as used by the International Bureau of Weights and Measures) or liter (American spelling) (SI symbols l or L) is a non-SI metric system unit of volume equal to 1 cubic decimetre (dm<sup>3</sup>), ,000 cubic centimetres (cm<sup>3</sup>) or 1/1000 cubic metre. A cubic decimetre (or litre) occupies a volume of 10&times;10&times;10 centimetres and is thus equal to one-thousandth of a cubic metre.",

"The cubic metre (International spelling as used by the International Bureau of Weights and Measures; SI symbol: m<sup>3</sup>) or cubic meter (American spelling) is the SI derived unit of volume. It is the volume of a cube with edges one metre in length.",

"The cubic centimetre is the volume of a cube with edges one centimetre in length.",

"One thousandth of a litre. Symbol <b>ml</b>.",

"The gallon (abbreviation 'gal') is a measure of liquid capacity in both the US customary units and the British imperial systems of measurement. Three significantly different sizes are in current use: the imperial gallon (≈ 4.546 L) which is used in the United Kingdom, Canada, and some Caribbean countries; the US gallon (≈ 3.79 L), which is used in the US and some Latin American and Caribbean countries",

"The cubic inch is a unit of measurement for volume in the Imperial units and United States customary units systems. It is the volume of a cube with each of its three dimensions (length, width, and depth) being one inch long.",

"The term cubic foot is an Imperial and US customary (non-metric) unit of volume, used in the United States and the United Kingdom. It is defined as the volume of a cube with sides of one foot (0.3048 m) in length.",

"A cubic mile (abbreviation: mi<sup>3</sup>) is an imperial / U.S. customary (non-SI non-metric) unit of volume, used in the United States, Canada, and the United Kingdom. It is defined as the volume of a cube with sides of 1 mile (5280 feet, 1760 yards, ≈1.609 kilometre) in length.",

"A fluid ounce (abbreviated fl oz, fl. oz. or oz. fl.) is a unit of liquid capacity equal to 1/20 of a pint or 1/160 of an Imperial gallon in the imperial system or 1/16 of a US liquid pint or 1/128 of a US gallon in the US system.",

"A unit of volume or capacity in the apothecary system, equal to <sup>1</sup>/<sub>8</sub> of a fluid ounce (3.70 milliliters).",

"The pint (abbreviated as 'pt' or 'p') is a unit of volume or capacity in both the United States customary and imperial measurement systems. The imperial pint (≈ 568 mL) is used in the United Kingdom and Ireland and to some extent in other Commonwealth nations. There are two customary pints used in the United States: a liquid pint (≈ 473 mL) and a less-common dry pint (≈ 551 mL). Each of these pints is one-eighth of the respective gallon.",

"The quart is a unit of volume (for either the imperial or United States customary units) equal to a quarter of a gallon (hence the name quart), two pints, or four cups. Since gallons of various sizes have historically been in use, quarts of various sizes have also existed; see gallon for further discussion. Three of these kinds of quarts remain in current use, all approximately equal to one litre. Its proper abbreviation is <b>qt</b>.",

"A barrel is one of several units of volume. There are dry barrels, fluid barrels (UK beer barrel, US beer barrel), oil barrels, etc.",

"A bushel is an imperial and U.S. customary unit of dry volume, equivalent in each of these systems to 4 pecks or 8 gallons (9.31 U.S. liquid gallons). It is used for volumes of dry commodities (not liquids), most often in agriculture. It is abbreviated as <b>bsh</b>. or <b>bu</b>. In modern usage, the dry volume is usually only nominal, with bushels referring to standard weights instead.",

"A peck is an imperial and United States customary unit of dry volume, equivalent to 2 gallons or 8 dry quarts or 16 dry pints. Two pecks make a kenning (obsolete), and four pecks make a bushel. Although it is not frequently used in the present day, produce such as apples are still commonly sold by the peck.",

"The cord is a unit of measure of dry volume used in Canada and the United States to measure firewood and pulpwood. A cord is the amount of wood that, when 'ranked and well stowed' (arranged so pieces are aligned, parallel, touching and compact), occupies a volume of 128 cubic feet (3.62 m<sup>3</sup>).This corresponds to a well stacked woodpile 4 feet (122 cm) high, 8 feet (244 cm) long, and 4 feet (122 cm) deep; or any other arrangement of linear measurements that yields the same volume.",

"A hogshead is a large cask of liquid (or, less often, of a food commodity). More specifically, it refers to a specified volume, measured in either imperial or US customary, primarily applied to alcoholic beverages such as wine, ale, or cider.",

"The minim is a unit of volume in both the imperial and US customary systems of measurement. Specifically it is <sup>1</sup>/<sub>60</sub> of a fluidram or <sup>1</sup>/<sub>480</sub> of a fluid ounce.",

"The volume of a bottle of beer. A standard bottle of beer in North America is 341 mL.",

"The US standard teaspoon is 1/3 tablespoon, that is, approximately 4.93 mL. The original teaspoon was used by england to measure tea servings. From the mid 1600s to the early 1700s it was smaller than a modern teaspoon at 1/4 of a table spoon. As tea became more available, the size of a portion of tea increased. ",

"The traditional US tabelspoon is approximately 14.8 mL and 1/3 of a teaspoon. It originated as an eating spoon in the 1700s and eventually became a standard unit of measurement in cooking.",

"A metric cup is equal to 250 mL. This is the cup we use on konvrt, but there is also a US customary cup (equal to 236.5882365 mL), a US legal cup(equal to half a US pint, or 240 mL), an imperial cup (equal to half an imperial pint, or 284 mL) and a Japanese cup(equal to 200 mL).<br /><br /><sup style='font-size:12px'>The Japanese don't drink as much.</sup>",

]

//TIME
c3 = [
"The minute is a unit of time or of angle. As a unit of time, the minute is equal to <sup>1</sup>⁄<sub>60</sub> of an hour or 60 seconds. ",

"The hour (common symbol: h or hr) is a unit of measurement of time. In modern usage, an hour comprises 60 minutes, or 3,600 seconds. It is approximately <sup>1</sup>/<sub>24</sub> of a mean solar day. ",

"The second (symbol: s) is the base unit of time in the International System of Units (SI) and is also a unit of time in other systems of measurement (abbreviated s or sec); it is the second division of the hour by sixty, the first division by 60 being the minute. ",

"A millisecond (from milli- and second; abbreviation: ms) is a thousandth (<sup>1</sup>/<sub>1,000</sub>) of a second. Its symbol is ms. One millisecond is to one second as one second is to 16.67 minutes.<br/>10 milliseconds (a hundredth of a second) are called a centisecond, commonly seen on many stopwatches but often mistaken for milliseconds.<br/>100 milliseconds (one tenth of a second) are called a decisecond. ",

"A day is a unit of time. In common usage, it is an interval equal to 24 hours.It also can mean the consecutive period of time during which the Sun is above the horizon of a location, also known as daytime. The period of time measured from local noon to the following local noon is called a solar day. ",

"A week is a time unit equal to seven days. It is the standard time period used for cycles of work days and rest days in most parts of the world. ",

"A year (Old English gēar, Gothic jēr, Runic Jēran) is the orbital period of the Earth moving around the Sun. For an observer on the Earth, this corresponds to the period it takes the Sun to complete one course throughout the zodiac along the ecliptic.",

"A decade is a period of 10 years. The word is derived (via French and Latin) from the Ancient Greek dekas which means ten. Other words for spans of years also come from Latin: biennium, triennium, quadrennium, quinquennium (5 years), lustrum (5 years), century (100 years), millennium (1000 years).",

"A century (from the Latin centum, meaning one hundred; abbreviated c.) is one hundred years. Centuries are numbered ordinally in English and many other languages (e.g. the 7th century AD/CE).",

"In physics, the Planck time (tP) is the unit of time in the system of natural units known as Planck units. It is the time required for light to travel, in a vacuum, a distance of 1 Planck length",

"The smallest MEASURABLE time unit known today, 1 X 10<sup>-24</sup> seconds.",

"Jiffy is an informal term for any unspecified short period of time. From this it has acquired a number of more precise applications for short, very short, or extremely short periods of time. First attested in 1785, the word's origin is unclear, though one suggestion is that it was thieves' cant for lightning.",

"A nanosecond (ns) is an SI unit of time equal to one billionth of a second (10<sup>−9</sup> or <sup>1</sup>/<sub>1,000,000,000</sub> s). One nanosecond is to one second as one second is to 31.7 years.",

"A moment is a medieval unit of time equal to 1.5 minutes or <sup>1</sup>/<sub>40</sub> of an hour.",

"A megasecond (symbol: Ms) is 1 million seconds, or roughly 11.6 days. There are roughly 31.5 megaseconds in a year. This page lists times between 1 and 1000 megaseconds (106 seconds and 109 seconds), or 11.6 days and 31.7 years.",

"A fortnight is a unit of time equal to 14 days (2 weeks). The word derives from the Old English: fēowertyne niht, meaning 'fourteen nights'. Fortnight and fortnightly are commonly used words in the English-speaking world, where many wages and salaries and most social security benefits are paid on a fortnightly basis, except North America, where it is rare outside of some Canadian regions and insular traditional communities (e.g. Amish) in the United States. ",

"A lunar month is the time between two identical syzygies (new moons or full moons). The use of the lunar month varies by which culture has utilized the method, the main difference being when the 'new' month begins.",

"A season is a subdivision of the year, marked by changes in weather, ecology, and hours of daylight. Seasons result from the yearly revolution of the Earth around the Sun and the tilt of the Earth's axis relative to the plane of revolution. In temperate and polar regions, the seasons are marked by changes in the intensity of sunlight that reaches the Earth's surface, variations of which may cause animals to go into hibernation or to migrate, and plants to be dormant. A season is defined as a quarter of the year, or approximately 91 days.",

"A month is a unit of time, used with calendars, which was first used and invented in Mesopotamia, as a natural period related to the motion of the Moon; month and Moon are cognates.",

"A lustrum (plural lustra) was a term for a five-year period in Ancient Rome.",

"A millennium (plural millennia) is a period of time equal to 1000 years. It derives from the Latin mille, thousand, and annus, year. It is often, but not necessarily, related to a particular dating system.",

]

//TEMPERATURE
c4 = [
"Fahrenheit (symbol °F) is a temperature scale based on one proposed in 1724 by the physicist Daniel Gabriel Fahrenheit (1686–1736), after whom the scale is named.The scale is defined by two fixed points: the temperature at which water freezes into ice is defined as 32 degrees, and the boiling point of water is defined to be 212 degrees. On Fahrenheit's original scale the lower defining point was the freezing point of brine, defined as zero degrees.",

"Celsius, also known as centigrade, is a scale and unit of measurement for temperature. It is named after the Swedish astronomer Anders Celsius (1701–1744), who developed a similar temperature scale. The degree Celsius (°C) can refer to a specific temperature on the Celsius scale as well as a unit to indicate a temperature interval, a difference between two temperatures or an uncertainty.",

"The kelvin is a unit of measurement for temperature. It is one of the seven base units in the International System of Units (SI) and is assigned the unit symbol K. The Kelvin scale is an absolute, thermodynamic temperature scale using as its null point absolute zero, the temperature at which all thermal motion ceases in the classical description of thermodynamics. The kelvin is defined as the fraction <sup>1</sup>⁄<sub>273.16</sub> of the thermodynamic temperature of the triple point of water (exactly 0.01 °C or 32.018 °F).",

"Rankine is a thermodynamic (absolute) temperature scale named after the Glasgow University engineer and physicist William John Macquorn Rankine, who proposed it in 1859. (The Kelvin scale was first proposed in 1848.)The symbol for degrees Rankine is °R (or °Ra if necessary to distinguish it from the Rømer and Réaumur scales).",

"The Delisle scale (°D) is a temperature scale invented in 1732 by the French astronomer Joseph-Nicolas Delisle (1688–1768). Delisle was the author of Mémoires pour servir à l'histoire et aux progrès de l'Astronomie, de la Géographie et de la Physique (1738).",

"The Newton scale is a temperature scale devised by Isaac Newton around 1700. Applying his mind to the problem of heat, he elaborated a first qualitative temperature scale, comprising about twenty reference points ranging from 'cold air in winter' to 'glowing coals in the kitchen fire'. This approach was rather crude and problematic, so Newton quickly became dissatisfied with it. He knew that most substances expand when heated, so he took a container of linseed oil and measured its change of volume against his reference points. He found that the volume of linseed oil grew by 7.25% when heated from the temperature of melting snow to that of boiling water.",

"The Réaumur scale (°Ré, °Re, °R), also known as the 'octogesimal division', is a temperature scale in which the freezing and boiling points of water are set to 0 and 80 degrees respectively. The scale is named after René Antoine Ferchault de Réaumur, who first proposed something similar in 1730.",

"Rømer (also Roemer) is a temperature scale named after the Danish astronomer Ole Christensen Rømer, who proposed it in 1701.",

]

//DENSITY
c5 = [
"Kilogram per cubic metre is an SI derived unit of density, defined by mass in kilograms divided by volume in cubic metres. The official SI symbolic abbreviation is kg·m<sup>−3</sup>, or equivalently either <sup>kg</sup>/<sub>m3</sub>.",

"A kilogram per liter (<sup>kg</sup>/<sub>l</sub>) is a derived metric SI (System International) measurement unit of density used to measure volume in liters in order to estimate weight or mass in kilograms.",

"A gram per milliliter (<sup>g</sup>/<sub>ml</sub>) is a derived metric SI (System International) measurement unit of density used to measure volume in milliliters in order to estimate weight or mass in grams.",

"A tonne per cubic meter (<sup>t</sup>/<sub>m<sup>³</sup></sub>) is a derived metric SI (System International) measurement unit of density, that used to measure volume in cubic meters in order to estimate weight or mass in tonnes.",

"The ounce per cubic inch density measurement unit is used to measure volume in cubic inches in order to estimate weight or mass in ounces.",

"The pound per cubic inch density measurement unit is used to measure volume in cubic inches in order to estimate weight or mass in pounds.",

"The pound per cubic foot density measurement unit is used to measure volume in cubic feet in order to estimate weight or mass in pounds.",

"The pound per cubic yard density measurement unit is used to measure volume in cubic yards in order to estimate weight or mass in pounds.",

"The pound per US gallon density measurement unit is used to measure volume in US gallons in order to estimate weight or mass in pounds.",

"The pound per bushel density measurement unit is used to measure volume in bushels in order to estimate weight or mass in pounds.",

"A gram per liter (<sup>g</sup>/<sub>l</sub>) is a derived metric SI (System International) measurement unit of density used to measure volume in liters in order to estimate weight or mass in grams.",

]

//MASS
c6 = [
"The kilogram or kilogramme (SI unit symbol: kg; SI dimension symbol: M), is the base unit of mass in the International System of Units (SI) and is defined as being equal to the mass of the International Prototype of the Kilogram (IPK).The avoirdupois (or international) pound, used in both the Imperial system and U.S. customary units, is defined as exactly 0.45359237 kg, making one kilogram approximately equal to 2.2046 avoirdupois pounds.",

"The gram (alternative British English spelling: gramme;SI unit symbol: g) (Greek/Latin root grámma) is a metric system unit of mass.",

"The pound or pound-mass (abbreviations: lb, lbm, lbm, ℔) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces.",

"An ounce (abbreviated oz, from the former Italian word onza, now spelled oncia) is usually the international avoirdupois ounce as used in the United States customary and British imperial systems, which is equal to one sixteenth of a pound or approximately 28 grams. There are also other ounces which are used in a number of different systems and are of different sizes. The most commonly used other ounce is the international troy ounce.",

"The tonne (SI symbol: t) is a metric system unit of mass equal to 1,000 kilograms (2,204.6 pounds) or 1 megagram (1 Mg). It is a non-SI unit accepted for use with SI.To avoid confusion with the much smaller short ton and the slightly larger long ton, it is also known as a metric ton in the United States.",

"In physics, the electron volt (symbol eV; also written electronvolt) is a unit of energy equal to approximately 1.6×10−19 joule (symbol J). By definition, it is the amount of energy gained (or lost) by the charge of a single electron moved across an electric potential difference of one volt. Thus it is 1 volt (1 joule per coulomb, 1 <sup>J</sup>/<sub>C</sub>) multiplied by the elementary charge (e, or 1.602176565(35)×10<sup>−19</sup> C). Therefore, one electron volt is equal to 1.602176565(35)×10<sup>−19</sup> J. Historically, the electron volt was devised as a standard unit of measure through its usefulness in electrostatic particle accelerator sciences because a particle with charge q has an energy E = qV after passing through the potential V; if q is quoted in integer units of the elementary charge and the terminal bias in volts, one gets an energy in eV.",

"The unified atomic mass unit (symbol: u) or dalton (symbol: Da) is the standard unit that is used for indicating mass on an atomic or molecular scale (atomic mass). One unified atomic mass unit is approximately the mass of a nucleon and is equivalent to 1 g/mol.It is defined as one twelfth of the mass of an unbound neutral atom of carbon-12 in its nuclear and electronic ground state,and has a value of 1.660538921(73)×10<sup>−27</sup> kg.The CIPM has categorised it as a non-SI unit accepted for use with the SI, and whose value in SI units must be obtained experimentally.",

"A slug (sl) is an Imperial unit of mass that accelerates by one foot (per second) (per second) (1 ft/sec²) upon force of one pound-force (1 lbf).",

"The Planck mass, denoted by mP, is the unit of mass in the system of natural units known as Planck units.",

"The solar mass is a standard unit of mass in astronomy that is used to indicate the masses of other stars, as well as clusters, nebulae and galaxies. It is equal to the mass of the Sun, about two nonillion kilograms.",

"Cuz yo mamma's got health problems!",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. An Earth Newton is the force due to gravity on a mass on the surface of the planet Earth.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Moon Newton or Luna Newton is the force due to gravity on a mass on the surface of Earth's moon Luna.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Sun Newton or Sol Newton is the force due to gravity on a mass on the surface of Sol, the star (sun) at the center of the Solar System.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Mercury Newton is the force due to gravity on a mass on the surface of the planet Mercury.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Venus Newton is the force due to gravity on a mass on the surface of the planet Venus.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Mars Newton is the force due to gravity on a mass on the surface of the planet Mars.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Jupiter Newton is the force due to gravity on a mass on the surface of the planet Jupiter.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Saturn Newton is the force due to gravity on a mass on the surface of the planet Saturn.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Uranus Newton is the force due to gravity on a mass on the surface of the planet Uranus.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Neptune Newton is the force due to gravity on a mass on the surface of the planet Neptune.",

"The newton (symbol: N) is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. A Pluto Newton is the force due to gravity on a mass on the surface of the planet Pluto.",

]

//PROGRAMMING
c7 = [
"The exabit is a multiple of the unit bit for digital information or computer storage. The prefix exa (symbol E) is defined in the International System of Units (SI) as a multiplier of <sub>10</sub><sup>18</sup> (1 quintillion, short scale), and therefore 1 exabit = <sub>10</sub><sup>18</sup>bits = 1000000000000000000bits = 1000 petabits. The exabit has the unit symbol Ebit or Eb.",

"The petabit is a multiple of the unit bit for digital information or computer storage. The prefix peta (symbol P) is defined in the International System of Units (SI) as a multiplier of <sub>10</sub><sup>15</sup> (1 quadrillion, short scale), and therefore 1 petabit = <sub>10</sub><sup>15</sup>bits = 1000000000000000bits = 1000 terabits. The petabit has the unit symbol Pbit or Pb.",

"A terabit is a multiple of the unit bit for digital information or computer storage. The prefix tera (symbol T) is defined in the International System of Units (SI) as a multiplier of <sub>10</sub><sup>12</sup> (1 trillion, short scale), and therefore 1 terabit = <sub>10</sub><sup>12bits</sub> = 1000000000000bits = 1000 gigabits. The terabit has the unit symbol Tbit or Tb.",

"A Gigabit (Gb) is a SI-multiple (see prefix Giga) of the unit bit and is equal to 1 073 741 824 bits, 1 048 576 Kilobits (Kb) or 1024 Megabits (Mb). 1024<sup>2</sup> = 1 048 576 and 1024<sup>3</sup> = 1 073 741 824.",

"A Megabit (Mb) is a SI-multiple (see prefix Mega) of the unit bit and is equal to 1 048 576 bits or 1024 Kilobits (Kb). 1024<sup>2</sup> = 1 048 576.",

"A Kilobit (Kb) is a SI-multiple (see prefix Kilo) of the unit bit and is equal to 1024 bits",

"A bit is a unit of capacity that necessary to store one binary digit. The name binary comes from the fact that the digit can contain two values only, one (1) or zero (0)",

"The exabyte is a multiple of the unit byte for digital information. The prefix exa indicates the sixth power of 1000 and means 1018 in the International System of Units (SI), and therefore 1 exabyte is one quintillion bytes (short scale). The unit symbol for the exabyte is EB.",

"A petabyte (symbol: PB) is <sub>10</sub><sup>15</sup> bytes of digital information. The prefix peta indicates the fifth power of 1000 and means <sub>10</sub><sup>15</sup> in the International System of Units (SI), and therefore 1 petabyte is one quadrillion (short scale) bytes, or 1 billiard (long scale) bytes. 1 PB = 1000000000000000B = <sub>10</sub><sup>15</sup>bytes = 1000terabytes.",

"The terabyte is a multiple of the unit byte for digital information. The prefix tera represents the fourth power of 1000, and means <sub>10</sub><sup>12</sup> in the International System of Units (SI), and therefore one terabyte is one trillion (short scale) bytes. The unit symbol for the terabyte is TB.",

"The gigabyte is a multiple of the unit byte for digital information storage. The prefix giga means <sub>10</sub><sup>9</sup> in the International System of Units (SI), therefore in this context 1 gigabyte is 1000000000bytes. The unit symbol for the gigabyte is GB.",

"The megabyte (symbol MB, sometimes abbreviated as Mbyte) is a multiple of the unit byte for digital information storage or transmission equal to 1 000 000 bytes.",

"A Kilobyte (KB) is a SI-multiple (see prefix Kilo) of the data or digital unit byte and equal to 1024 bytes.",

"A Byte is a unit of capacity that necessary to store eight binary digits.",

]

//ENERGY
c8 = [
"A joule (J) is a derived metric SI (System International) measurement unit of energy or heat. The joule is named after English physicist James Prescott Joule (24 December 1818 — 11 October 1889). One joule (1J) is defined as amount of energy expanded, or work done, while applying force of one newton (1N) to move an object for distance of one meter (1M)",

"Kilojoule (kJ) is multiple (see prefix kilo) of the derived metric measurement unit of energy joule.",

"An erg (short for ergon, a Greek word meaning 'work') is a unit of energy and mechanical work equal to 10<sup>−7</sup> joules. It originated in the centimetre–gram–second (CGS) system of units, symbol 'erg'. It is not an SI unit.An erg is the amount of work done by a force of one dyne exerted for a distance of one centimeter. In the CGS base units, it is equal to one gram centimeter-squared per second-squared (g·cm2/s2). It is thus equal to 10<sup>−7</sup> joules or 100 nanojoules (nJ) in SI units.",

"A foot-pound (ft-lb) is a non-SI (non-System International) measurement unit of energy or heat. One foot-pound (1 ft-lb) is defined as amount of energy expanded, or work done, while applying force of one pound-force (1 lbf) to move an object for distance of one foot (1 ft). The corresponding SI-unit of energy or heat is joule.",

"A british thermal unit (BTU) is a non-SI (non-System International) measurement unit of energy or heat. The one British Thermal Unit (1BTU) is defined as amount of energy or heat required to raise temperature of one pound (1lb) of water by one degree fahrenheit (1°F)",

"Megajoule (MJ) is multiple (see prefix mega) of the derived metric measurement unit of energy joule.",

"The kilowatt hour, or kilowatt-hour, (symbol kW·h, kW h or kWh) is a unit of energy equal to 1000 watt-hours or 3.6 megajoules. For constant power, energy in watt-hours is the product of power in watts and time in hours. The kilowatt-hour is most commonly known as a billing unit for energy delivered to consumers by electric utilities.",

"One British therm (symbol thm) is a non-SI unit of heat energy equal to 100 000 British thermal units (BTU). It is approximately the energy equivalent of burning 100 cubic feet (often referred to as 1 CCF) of natural gas.",

"A calorie (cal) is a pre-SI (pre-System International) measurement unit of energy or heat. The one calorie (1cal) is defined as amount of energy or heat required to raise temperature of one gram (1g) of water by one degree centigrade or one degree celsius (1°C)",

"Kilocalorie (kCal) is multiple (see prefix kilo) of the pre-metric measurement unit of energy calorie.",

"In physics, the electron volt (symbol eV; also written electronvolt) is a unit of energy equal to approximately 1.6×10<sup>−19</sup> joule (symbol J). By definition, it is the amount of energy gained (or lost) by the charge of a single electron moved across an electric potential difference of one volt. Thus it is 1 volt (1 joule per coulomb, 1 J/C) multiplied by the elementary charge (e, or 1.602176565(35)×10<sup>−19<sup> C). Therefore, one electron volt is equal to 1.602176565(35)×10<sup>−19</sup> J. Historically, the electron volt was devised as a standard unit of measure through its usefulness in electrostatic particle accelerator sciences because a particle with charge q has an energy E = qV after passing through the potential V; if q is quoted in integer units of the elementary charge and the terminal bias in volts, one gets an energy in eV.",

"The 'ton of TNT' is a unit of energy equal to 4.184 gigajoules, which is approximately the amount of energy released in the detonation of one metric ton of TNT. The 'megaton of TNT' is a unit of energy equal to 4.184 petajoules.",

]

//CURRENCY
c9 = [
"The United States dollar (sign: $; code: USD; also abbreviated US$), is referred to as the U.S. dollar or American dollar. It is the official currency of the United States and its overseas territories. It is divided into 100 smaller units called cents.",

"The Japanese yen (sign: ¥; code: JPY) is the official currency of Japan. It is the third most traded currency in the foreign exchange market after the United States dollar and the euro. It is also widely used as a reserve currency after the U.S. dollar, the euro, and the pound sterling.",

"The pound sterling (symbol: £; ISO code: GBP), commonly known simply as the pound, is the official currency of the United Kingdom, Jersey, Guernsey, the Isle of Man, South Georgia and the South Sandwich Islands,the British Antarctic Territory and Tristan da Cunha. It is subdivided into 100 pence (singular: penny). A number of nations that do not use sterling also have currencies called the pound.",

"The ruble or rouble (Russian: рубль rublʹ, plural рубли rubli; see note on English spelling and Russian plurals with numbers) (code: RUB) is the currency of the Russian Federation and the two partially recognized republics of Abkhazia and South Ossetia. Formerly, the ruble was also the currency of the Russian Empire and the Soviet Union before their dissolution. Belarus and Transnistria use currencies with the same name. The ruble is subdivided into 100 kopeks (sometimes transliterated kopecks, or copecks; Russian: копейка, kopéyka; plural: копейки, kopéyki). The ISO 4217 code is RUB or 643; the former code, RUR or 810, refers to the Russian ruble before the 1998 redenomination (1 RUB = 1000 RUR).",

"The Indian rupee (symbol: ₹; ISO code: INR) is the official currency of the Republic of India. The issuance of the currency is controlled by the Reserve Bank of India.<br/>The modern rupee is subdivided into 100 paise (singular paisa), though as of 2011 only 50-paise coins are legal tender. Banknotes in circulation come in denominations of ₹5, ₹10, ₹20, ₹50, ₹100, ₹500 and ₹1000. Rupee coins are available in denominations of ₹1, ₹2, ₹5, ₹10, ₹20, ₹50, ₹75, ₹100, ₹150 and ₹1000; the coins above ₹20 are for commemorative purposes only; the only other rupee coin has a nominal value of 50 paise, since lower denominations have been officially withdrawn.<br /><br />The Indian rupee symbol '₹' (officially adopted in 2010) is derived from the Devanagari consonant 'र' (Ra) and the Latin letter 'R'. The first series of coins with the rupee symbol was launched on 8 July 2011.",

"The yuan (sign: ¥; (Chinese: 元; pinyin: yuán); [ɥɛ̌n]) is the base unit of a number of modern Chinese currencies; usually refers to the primary unit of account of the renminbi, the currency of the People's Republic of China.",

"The krone [ˈkɾuːnə] (sign: kr; code: NOK) is the currency of Norway and its dependent territories. The plural form is kroner. It is subdivided into 100 øre. The ISO 4217 code is NOK, although the common local abbreviation is kr. The name translates into English as 'crown'. The Norwegian krone was the thirteenth most traded currency in the world by value in April 2010, down three positions from 2007.",

"The Hong Kong dollar (sign: $; code: HKD; also abbreviated HK$) is the currency of Hong Kong. It is the eighth most traded currency in the world. The Hong Kong dollar is subdivided into 100 cents.",

"The Swedish Krona (plural: kronor; sign: kr or simply :- ; code: SEK) has been the currency of Sweden since 1873. Both the ISO code 'SEK' and currency sign 'kr' are in common use.",

"The Canadian dollar (sign: $; code: CAD) is the currency of Canada. As of 2011, the Canadian dollar is the 7th most traded currency in the world, accounting for 5.3% of the world's daily share.It is abbreviated with the dollar sign $, or C$ to distinguish it from other dollar-denominated currencies.It is divided into 100 cents.",

"The Australian dollar (sign: $; code: AUD) is the currency of the Commonwealth of Australia, including Christmas Island, Cocos (Keeling) Islands, and Norfolk Island, as well as the independent Pacific Island states of Kiribati, Nauru and Tuvalu. Within Australia it is almost always abbreviated with the dollar sign ($), with A$ sometimes used to distinguish it from other dollar-denominated currencies. It is subdivided into 100 cents.",

"The franc (sign: Fr. or SFr. or FS; German: Franken, French and Romansh: franc, Italian: franco; code: CHF) is the currency and legal tender of Switzerland and Liechtenstein; it is also legal tender in the Italian exclave Campione d'Italia. Although not formally legal tender in the German exclave Büsingen (the sole legal currency is the euro), it is in wide daily use there. The Swiss National Bank (SNB) issues banknotes and the federal mint Swissmint issues coins.The Swiss franc is the only version of the franc still issued in Europe.",

"The euro (sign: €; code: EUR) is the currency used by the Institutions of the European Union and is the official currency of the eurozone, which consists of 17 of the 28 member states of the European Union: Austria, Belgium, Cyprus, Estonia, Finland, France, Germany, Greece, Ireland, Italy, Luxembourg, Malta, the Netherlands, Portugal, Slovakia, Slovenia, and Spain.The currency is also used in a further five European countries and consequently used daily by some 334 million Europeans as of 2013.Additionally, 210 million people worldwide as of 2013 — including 182 million people in Africa — use currencies pegged to the euro.The euro is the second largest reserve currency as well as the second most traded currency in the world after the United States dollar",

"Bitcoin is an open source peer-to-peer electronic money and payment network introduced in 2009 by pseudonymous developer 'Satoshi Nakamoto'. Bitcoin has been called a cryptocurrency because it uses cryptography to secure transactions. Digitally signed payment messages are broadcast to and verified by a decentralized network of computers all over the world. Specialized computers use a proof-of-work system to prevent people from copying and spending the same bitcoin multiple times, a problem for digital currencies known as double-spending. The operators of these computers, known as 'miners', are rewarded with transaction fees and newly minted bitcoins.",

"Galleon or Gold-Galleon (ʛ) is the most valued coin of the wizarding currency. One Galleon is equal to 17 Sickles or 493 Knuts. Galleons are made of gold. A Muggle once described them as being the size of hubcaps, though he may have been exaggerating.",

"A Sickle or Silver-Sickle is a form of currency in the wizarding world that is made out of silver. One Sickle is equal to 29 Knuts, and 17 Sickles make up a Galleon.",

"The Knut (pronounced K'noot or just 'nut' if you aren't insane) or Bronze-Knut is the least valued coin in wizarding currency. There are 29 Knuts in one silver Sickle, and there are 493 Knuts in one golden Galleon. A Knut is also approximately equal to one British Penny.",

]

var ci = [
	c0, c1, c2, c3, c4, c5, c6, c7, c8, c9
]
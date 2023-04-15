// handleSubmit je funkcia, ktorá sa spustí keď sa bude mať odoslať náš formulár
function handleSubmit(e) {
	e.preventDefault(); // zabrániť vstavenému odosielaniu v prehliadači

	// this reprezentuje ten formular, ktory odosielame
	const ves = this.querySelector("textarea").value; // Načítame text z textarea
	const width = document.querySelector("section:nth-child(2)").clientWidth; // Načítame aktuálnu šírku výstupného okna

	const formular = new URLSearchParams(); // Vytvoríme štruktúru, ktorá bude reprezentovať formulár
	formular.append('ves', ves); // Pridáme tam naše hodnoty
	formular.append('width', width);

	const url = this.action; // Nacitame povodnu URL zadanu vo formulari
	const method = this.method; // NAcitame povodnu metodu zadanu vo formulari
	fetch(url, {method: method, body: formular}) // Urobíme HTTP požiadavku na náš server POST /render a formularom v tele požiadavky 
		.then((res) => res.blob()) // Dostali sme binárne dáta (blob)
		.then((image) => {
			document.querySelector("#output").src = URL.createObjectURL(image); // Nastavíme src našeho <img> na načítaný obrázok
		})
}
document.querySelector("form").addEventListener("submit", handleSubmit); // Nastavíme formulár, aby pri submit udalosti spustil našu handleSubmit funkciu

function random() {
	document.getElementById("textarea").innerHTML = "VES v1.0 700 700\nCLEAR #d7d7f7\nFILL_CIRCLE 0 0 100 #fafa61\nLINE 0 0 25 175 5 #fafa61\nLINE 0 0 75 150 5 #fafa61\nLINE 0 0 125 125 5 #fafa61\nLINE 0 0 150 95 5 #fafa61\nLINE 0 0 175 50 5 #fafa61\nFILL_RECT 200 300 300 299 #bd743c\nRECT 200 300 300 299 3 #000000\nFILL_TRIANGLE 175 300 525 300 350 100 #ff0000\nTRIANGLE 175 300 525 300 350 100 3 #000000\nFILL_RECT 350 500 75 99 #542f13\nRECT 350 500 75 99 3 #000000\nFILL_CIRCLE 400 550 5 #000000\nFILL_RECT 250 350 75 50 #0000ff\nRECT 250 350 75 50 3 #542f13\nLINE 250 375 325 375 5 #542f13\nLINE 285 350 285 400 5 #542f13"
}
function fun(){
	document.getElementById("form").reset() 
	document.getElementById("output").style.opacity = "0"
	mfdel()
  } 
function mfsee(){
	document.getElementById("output").style.opacity = "1"
}
function mfdel(){
	document.getElementById("textarea").innerHTML =""
}

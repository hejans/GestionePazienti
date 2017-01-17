var medici = [
{
     nome: "Alessio",
     cognome: "Verdi",
     ID: "AS21",
     PASSWORD: "qwerty"

},
{
	nome: "Andrea",
	cognome: "Rossi",
	ID: "DR32",
	PASSWORD: "qazxc"
},


];

var pazienti = [
{
	nome: "Tiziano",
	cognome: "Violi",
	id: "12qw34",
	cmed: "AS21",
	patologia: "asma",
	prescrizioni : [{
		nomef: "Ventolin",
		causa: "Il paziente ha avuto un attacco di asma e quindi ho prescritto questo"

	},],
},
{
	nome: "Gennaro",
	cognome: "Blutti",
	id: "34rt67",
	cmed: "DR32",
	patologia: "aritmia",
	prescrizioni: [] 
},
];

var Autenticate = function Autenticate(ID,password){
     
     for(i=0 ; i< medici.length ; i++){
     	if(ID == medici[i].ID && password == medici[i].PASSWORD ){
     		return true;
     	}
     }
  return false;
}

var getNome = function getNome(ID){

	for(i=0; i<medici.length; i++){
		if(ID == medici[i].ID){
			return medici[i].cognome;
		}
	}
	return "null";
}

var searchPatience = function searchPatience(name,surname){

	for(i=0;i<pazienti.length;i++){
		if(name == pazienti[i].nome && surname == pazienti[i].cognome ){
			return pazienti[i];
		}
	}

	return null;

}


exports.Autenticate = Autenticate;
exports.getNome = getNome;
exports.searchPatience = searchPatience;
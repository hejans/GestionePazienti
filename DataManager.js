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

var getCod = function getCod(ID){

	for(i=0; i<medici.length; i++){
		if(ID == medici[i].ID){
			return medici[i].ID;
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

var searchPatienceID = function searchPatience(idp){

	for(i=0;i<pazienti.length;i++){
		if(idp == pazienti[i].id ){
			return pazienti[i];
		}
	}

	return null;

}


var addPatience = function addPatience(name,surname,idp,cmedi,pat){

 if(searchPatience(name,surname) == null){

    var paziente = {
    	nome: name,
    	cognome: surname,
        id: idp,
        cmed: cmedi,
        patologia: pat,
        prescrizioni : []
    };

    pazienti.push(paziente);
    return true;}else{

    	return false;
    }

}

var removePatience = function removePatience(idp,cod){

	var position = null;
	
    //search for the position
    for (i=0; i < pazienti.length; i++)
	{
            if (pazienti[i].id == idp && pazienti[i].cmed == cod)
                {
					position = i;
                }
        }
	
    //if is not found return null
	if (position == null)
    	return false;
	else
	{
		pazienti.splice(position,1);
		return true;
	}
}

var addPrescription = function addPrescription(idp,medi,desc,codmed){

    for(i=0; i<pazienti.length ; i++){

    	if(pazienti[i].id == idp && pazienti[i].cmed == codmed){
             
             var pres= {
             	nomef : medi,
             	causa : desc
             };

             pazienti[i].prescrizioni.push(pres);
             return true;
    	}

    }

    return false;
}


exports.Autenticate = Autenticate;
exports.getNome = getNome;
exports.getCod = getCod;
exports.searchPatience = searchPatience;
exports.searchPatienceID = searchPatienceID;
exports.addPatience = addPatience;
exports.removePatience = removePatience;
exports.addPrescription = addPrescription;
//lib express
var express = require ('express');
//general lib
var app = express();
//inspect
var util = require('util');

var bind = require('bind');

var dataManager = require('./DataManager.js');

//POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());// JSON

//set up the server
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) 
{
	   bind.toFile('tpl/login.tpl',{
		
	},function(data){

		response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);

	});
	
});

app.post('/Check', function(request,response)
{
	var headers = {};
	headers["Access-Control-Allow-Origin"] = "*";
	headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
	headers["Access-Control-Allow-Credentials"] = false;
	headers["Access-Control-Max-Age"] = '86400'; // 24 hours
	headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
	

//	var mid;
//	var pass;
//	text= "request.body: "+ util.inspect(request.body) + "\n";
//	console.log(text);
//	console.log(request.body.id);
//	console.log(request.body.password);

if ( typeof request.body !== 'undefined' && request.body)
	{
		if ( typeof request.body.id !== 'undefined' && request.body.id &&
			 typeof request.body.password != 'undefined' && request.body.password)
            {
			 mid = request.body.id;
			 pass = request.body.password;
            }
		else {
			mid = 'not defined';
			pass = 'not defined';}
	
	}
	else
	{
		mid = 'body undefined'
	    pass = 'body undefined'
	}
	

if(mid != 'not defined' && mid != 'body undefined' && pass != 'not defined' && pass != 'body undefined'){


if(dataManager.Autenticate(mid,pass)== true){

	var nome = dataManager.getNome(mid);


  bind.toFile('tpl/mainPanel.tpl',{

  	Name : nome
		
	},function(data){

		response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);

	});
}else{

	 response.writeHead(400, {'Content-Type': 'text/html'});
     response.end("Error Wrong Combination");
}
}else{
	response.writeHead(406, {'Content-Type': 'text/html'});
     response.end("Bad request");
}


});

app.post('/Search', function(request,response)
{
	var headers = {};
	headers["Access-Control-Allow-Origin"] = "*";
	headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
	headers["Access-Control-Allow-Credentials"] = false;
	headers["Access-Control-Max-Age"] = '86400'; // 24 hours
	headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
	
	var nome;
	var cognome;


if ( typeof request.body !== 'undefined' && request.body)
	{
		if ( typeof request.body.name !== 'undefined' && request.body.name &&
			 typeof request.body.surname != 'undefined' && request.body.surname)
            {
			 nome = request.body.name;
			 cognome = request.body.surname;
            }
		else {
			nome = 'not defined';
			cognome = 'not defined';}
	
	}
	else
	{
		nome = 'body undefined'
	    cognome = 'body undefined'
	}
	

if(nome != 'not defined' && nome != 'body undefined' && cognome != 'not defined' && cognome != 'body undefined'){


if(dataManager.searchPatience(nome,cognome) != null){

	var paziente = dataManager.searchPatience(nome,cognome);
	var list = "";
	for(i=0; i< paziente.prescrizioni.length; i++){
        list = list + paziente.prescrizioni[i].nomef + " : " + paziente.prescrizioni[i].causa + ". ";
	}


  bind.toFile('tpl/schedaPaziente.tpl',{

  	Name : paziente.nome,
  	Surname : paziente.cognome,
  	Id : paziente.id,
  	Cod : paziente.cmed,
  	Pat : paziente.patologia,
  	Pres : list
		
	},function(data){

		response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);

	});
}else{

	 response.writeHead(400, {'Content-Type': 'text/html'});
     response.end("Error Wrong Combination");
}
}else{
	response.writeHead(406, {'Content-Type': 'text/html'});
     response.end("Bad request");
}


});







app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
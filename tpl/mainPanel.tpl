<html>
<head>
</head>
<body>
	<!--button id="b1" onclick="showform()">Show Form</button><br><br>-->
	<h1>Gestione Pazienti</h1>
	<h3>Benvenuto Dottor (:Name:)</h3>

	<h4>Cerca Paziente</h4>

	<form id="form" action="http://127.0.0.1:5000/Search" method="post">
		<label id="l1">Name:</label> <input name="name" type="text" id="name">
		<label id="l2">Surname:</label> <input name="surname" type="text"  id="surname">
		<button type="submit">Search</button><br>
	</form><br><br>

	<h4>Aggiungi Paziente</h4>

	<form id="form2" action="http://127.0.0.1:5000/Add" method="post">
		<label>Name:</label> <input name="name" type="text" id="name">
		<label>Surname:</label> <input name="surname" type="text" id="surname">
		<label>Surname:</label> <input name="surname" type="text" id="surname">
		<label>Id:</label> <input name="Id" type="text" id="Id">
		<label>Patologia:</label> <input name="patologia" type="text" id="patologia">
		<button type="submit">Insert</button><br>
	</form><br><br>

	<h4>Aggiungi Prescrizione</h4>

	<form id="form3" action="http://127.0.0.1:5000/Prescription" method="post">
		<label>Id Paziente:</label> <input name="idp" type="text" id="idp">
		<label>Nome medicinale:</label> <input name="medicinale" type="text" id="medicinale">
		<label>Informazioni:</label> <input name="informazioni" type="text" id="informazioni">
		<button type="submit">Add</button><br>
	</form><br><br>

	<h4>Elimina Paziente</h4>

	<form id="form4" action="http://127.0.0.1:5000/Delete" method="post">
		<label>Id Paziente:</label> <input name="idp" type="text" id="idp">
		<button type="submit">Delete</button><br>
	</form>
	
<!--	<script src="script1.js"></script> -->
	
</body>
</html>
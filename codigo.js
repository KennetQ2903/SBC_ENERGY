function getInputs(){
	let user = document.getElementById('userNameInput').value;
	let pass = document.getElementById('contraseñaInput').value;
	let warn = document.getElementById('warningUser');
	if(user == 'admin_' && pass == 'admin_1234'){
		document.getElementById('userNameInput').value = "";
		document.getElementById('contraseñaInput').value = "";
		dashboard();
	}
	if(user != 'admin_' || pass != 'admin_1234'){
		warn.classList.remove('Off');
		warn.classList.add('On');
		document.getElementById('contraseñaInput').value = "";
	}
	else{
		warn.classList.remove('On');
		warn.classList.add('Off');
	}
}
function enter(event){
	let codigo = event.which || event.keyCode;
	if(codigo === 13){
		let user = document.getElementById('userNameInput').value;
		let pass = document.getElementById('contraseñaInput').value;
		let warn = document.getElementById('warningUser');
		if(user == 'admin_' && pass == 'admin_1234'){
			dashboard();
		}
		if(user != 'admin_' || pass != 'admin_1234'){
			warn.classList.remove('Off');
			warn.classList.add('On');
			document.getElementById('contraseñaInput').value = "";
		}
		else{
			warn.classList.remove('On');
			warn.classList.add('Off');
		}
	}
}

function userEnter(event){
	let codigo = event.which || event.keyCode;
	if(codigo === 13){
		let pass = document.getElementById('contraseñaInput').focus();
	}
}
function dashboard(){
	location.href="Dashboard.html";
}



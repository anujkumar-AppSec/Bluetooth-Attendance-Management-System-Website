
//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "admin" && password == "bluetoothsystem"){
		
		 window.open('https://console.firebase.google.com/u/0/project/minorlayout-5ac31/database/minorlayout-5ac31/data'); //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("You have left "+attempt+" attempt;");
		
	}
}
function validate1(){
	
		
		 window.open("professorlogin.html"); //redirecting to other page
		
}

function validate2(){
	
		 window.open('search1.html');
	// window.location.href='https://bluetoothattendancesystem.github.io/search1.html'; //redirecting to other page
		
}
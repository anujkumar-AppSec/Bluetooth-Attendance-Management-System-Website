// Initialize Firebase
   var config = {
    apiKey: "AIzaSyCeAMhrmSzRTQDrIHAJLaaLOIar77vBlV8",
    authDomain: "minorlayout-5ac31.firebaseapp.com",
    databaseURL: "https://minorlayout-5ac31.firebaseio.com",
    projectId: "minorlayout-5ac31",
    storageBucket: "minorlayout-5ac31.appspot.com",
    messagingSenderId: "552550458180"
  };
firebase.initializeApp(config);
		
function submit(){
	var table = document.getElementById("myTable");
	
	var branch = document.getElementById("list").value;
	var email = document.getElementById("list1").value;
	mail = email.replace(".","<dot>");
	console.log(mail);
	var subject = document.getElementById("list2").value;
	var tname = document.getElementById("list3").value;
    var mac = document.getElementById('macadd').value;
	  console.log(mac);
	  
	  
	  
  

var database = firebase.database();

var userDataRef = firebase.database().ref(mail).child(tname).child(branch).child(subject).child(mac).orderByKey();

userDataRef.once("value").then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  var childData = childSnapshot.val();              

  var keyval = childSnapshot.val().dgfgfgf;
  var dataval = childSnapshot.val().hello;
  
   //document.writeln("<br><h4>"+key+"</h4>");
   //document.writeln("<hr>");
   
   // By anuj
   var table = document.createElement('table');
      
    var tr = document.createElement('tr');   
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');
	
//	var x = document.createElement("HR");                 // for hr
    
    var text1 = document.createTextNode(branch);
    var text2 = document.createTextNode(subject);
	var text3 = document.createTextNode(key);
	var text4 = document.createTextNode(childData);
	
//	var text4 = document.body.appendChild(x);            //for hr
    
	
    td1.appendChild(text1);
    td2.appendChild(text2);
	td3.appendChild(text3);
	td4.appendChild(text4);
    tr.appendChild(td1);
    tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
     document.writeln("<hr>");
	//table.appendChild(x);                                  // for hr
    
	table.appendChild(tr);

    document.body.appendChild(table);   
   
	
	
  });
});



}
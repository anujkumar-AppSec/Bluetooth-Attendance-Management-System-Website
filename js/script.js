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

var database = firebase.database();

var userDataRef = firebase.database().ref("CS").child("1st year").child("COMPILER").orderByKey();
userDataRef.once("value").then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  var childData = childSnapshot.val();              

  var keyval = childSnapshot.val().dgfgfgf;
  var dataval = childSnapshot.val().hello;
  
   document.writeln("<br><h4>"+key+"</h4>");
  });
});
const firebaseConfig = {
  apiKey: "AIzaSyB-OEmtcWLLP-bSA6dRYVkr5_CL00MpRlw",
  authDomain: "kwitter-project-38f85.firebaseapp.com",
  databaseURL: "https://kwitter-project-38f85-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-38f85",
  storageBucket: "kwitter-project-38f85.appspot.com",
  messagingSenderId: "144119030912",
  appId: "1:144119030912:web:a3e9ec7457508ee01df265"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value ;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  
 console.log("Room Name -" + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;

 
  });});}
  
getData();  
function redirectToRoomName(name)

{
console.log(name);
localStorage.setItem("room_name" ,name);
window.location = "kwitter_page.html";    
}

function logout(){

  window.location="index.html";

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  
}


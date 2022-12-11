
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAhIKiryZYza0ZyROSpLYk81xu0PUSJE_o",
      authDomain: "kwitter-95ad7.firebaseapp.com",
      databaseURL: "https://kwitter-95ad7-default-rtdb.firebaseio.com",
      projectId: "kwitter-95ad7",
      storageBucket: "kwitter-95ad7.appspot.com",
      messagingSenderId: "1071198407367",
      appId: "1:1071198407367:web:db8c1fc55a4783257fcce2",
      measurementId: "G-GYJ36EV5BF"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    function addRoom(){
      room_name = document.getElementById("room_name").value ;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("RoomName -"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData()};

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           window.location = "index.html";
}

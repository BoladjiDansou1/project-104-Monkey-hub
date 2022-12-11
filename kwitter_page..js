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
  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name, 
        message:msg,
        like:0
    });

    document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
     window.location = "index.html";
}
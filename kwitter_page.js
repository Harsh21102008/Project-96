function addUser()
{
    user_name = document.getElementById("user_name").nodeValue;

    localStorage.setItem("user_name", user_name);

      window.location = "kwitter_room.html";
}
function addRoom()
{
  room_name = getElementById("room_name").value;

  firebaseConfig.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw",
    authDomain: "kwitter-6abca.firebaseapp.com",
    databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com",
    projectId: "kwitter-6abca",
    storageBucket: "kwitter-6abca.appspot.com",
    messagingSenderId: "231606977400",
    appId: "1:231606977400:web:d2d2878892c4b97584fe8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
  
  function updateLike(message_id)
  {
    console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
  
      firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes  
       });
  
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }
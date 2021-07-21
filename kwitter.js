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
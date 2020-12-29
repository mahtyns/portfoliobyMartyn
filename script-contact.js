
function collectMessage() {
var name = document.querySelector("#userName").value;
var country = document.querySelector("#userCountry").value;
var emailAddress = document.querySelector("#userMail").value;
var message = document.querySelector("#userComment").value;

var confirmation = document.querySelector(".messageButton");

if (name !== "" && emailAddress !=="" && message !== "") {
  var information = "Thanks for your message!";
  confirmation.innerHTML = information;
}

else {
  information = "Data required";
  confirmation.innerHTML = information;
}

}

var positive = document.querySelector(".messageButton");
positive.addEventListener("click", collectMessage);

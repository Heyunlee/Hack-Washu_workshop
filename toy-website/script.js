function showMessage() {
  const message = document.getElementById("message");

  if (message.textContent === "") {
    message.textContent = "🎉 You clicked the button! Try editing this message in a new branch!";
  } 
  else {
    message.textContent = "";
  }
}

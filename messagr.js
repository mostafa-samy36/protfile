document.getElementById("bt").addEventListener("click", function () {
  var messageDiv = document.getElementById("message");
  messageDiv.classList.remove("hidden");
  messageDiv.classList.add("visible");

  setTimeout(function () {
    messageDiv.classList.remove("visible");
    messageDiv.classList.add("hidden");
  }, 5000);
});

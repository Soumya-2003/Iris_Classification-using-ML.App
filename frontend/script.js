document.getElementById("basic").addEventListener("click", displayInfo);

function displayInfo() {
  fetch("http://localhost:5000/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

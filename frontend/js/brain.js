
function sendCommand() {
  const msg = document.getElementById("userInput").value;
  fetch("http://localhost:5000/zifah", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message: msg})
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("zifahResponse").innerText = JSON.stringify(data);
  });
}

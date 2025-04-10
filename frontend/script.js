
function sendCommand() {
  const input = document.getElementById("user-input");
  const log = document.getElementById("chat-log");
  const command = input.value.trim();
  if (!command) return;

  const userMsg = document.createElement("div");
  userMsg.innerHTML = "<strong>You:</strong> " + command;
  log.appendChild(userMsg);
  input.value = "";

  fetch("http://localhost:5000/api/command", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command })
  })
  .then(res => res.json())
  .then(data => {
    const botMsg = document.createElement("div");
    botMsg.innerHTML = "<strong>Zifah:</strong> " + data.response;
    log.appendChild(botMsg);
    log.scrollTop = log.scrollHeight;
  })
  .catch(err => {
    const errMsg = document.createElement("div");
    errMsg.innerHTML = "<strong>Error:</strong> " + err;
    log.appendChild(errMsg);
  });
}

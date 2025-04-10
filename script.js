
document.getElementById("toggle").onclick = () => {
  document.getElementById("sidebar").classList.toggle("show");
};
function sendCommand() {
  const input = document.getElementById("user-input");
  const log = document.getElementById("chat-log");
  const command = input.value.trim();
  if (!command) return;

  log.innerHTML += `<div><strong>You:</strong> ${command}</div>`;
  input.value = "";

  fetch("http://127.0.0.1:5000/api/command", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command })
  })
  .then(res => res.json())
  .then(data => {
    log.innerHTML += `<div><strong>Zifah:</strong> ${data.response}</div>`;
    log.scrollTop = log.scrollHeight;
  })
  .catch(err => {
    log.innerHTML += `<div><strong>Error:</strong> ${err}</div>`;
  });
}

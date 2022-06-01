window.addEventListener('DOMContentLoaded', (event) => {
  const OPTIONS = ["💵", "💩"];

  const slots = document.querySelectorAll(".slot");
  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector(".info").textContent = OPTIONS.join(" ");

  function getRandomNumber() {
    return Math.floor(Math.random() * OPTIONS.length);
  }

  function setMessage(message) {
    const msg = document.getElementById("result");
    msg.innerHTML = message;
  }

  function spin() {
    for (const slot of slots) {
      slot.textContent = OPTIONS[getRandomNumber()];
    }

    if (slots[0].isEqualNode(slots[1])
      && slots[0].isEqualNode(slots[2])
      && slots[0].isEqualNode(slots[3])) {
      setMessage('YOU WON');
    } else {
      setMessage('YOU LOST');
    }
  }

  spin();
})
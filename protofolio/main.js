let front = document.getElementById("front");
let text = front.innerHTML.trim();
let split = text.split("");
let i = 0;


front.style.minHeight = front.offsetHeight + "px";

function startTyping() {
    front.innerHTML = "";
    i = 0;

    let typingInterval = setInterval(function () {
        if (i < split.length) {
            front.innerHTML += split[i];
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

startTyping();

let mainInterval = setInterval(startTyping, 3000);

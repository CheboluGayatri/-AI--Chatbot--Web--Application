const chatBox = document.getElementById("chat-box");

// Send Message Function
function sendMessage() {

    let input = document.getElementById("user-input");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    // User Message

    chatBox.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    // Typing Indicator

    chatBox.innerHTML += `
        <div class="typing" id="typing">
            Bot is typing...
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    fetch("/chat", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: message
        })

    })

    .then(response => response.json())

    .then(data => {

        const typing =
        document.getElementById("typing");

        if (typing) {
            typing.remove();
        }

        chatBox.innerHTML += `
            <div class="bot-message">
                ${data.response}
            </div>
        `;

        chatBox.scrollTop =
        chatBox.scrollHeight;
    })

    .catch(error => {

        console.log(error);

    });

    input.value = "";
}

// Enter Key

document
.getElementById("user-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});

// Dark Mode

document
.getElementById("themeBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// Voice Recognition

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition =
    new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.continuous = false;

    recognition.interimResults = false;

    const voiceBtn =
    document.getElementById("voiceBtn");

    voiceBtn.addEventListener("click", () => {

        recognition.start();

    });

    recognition.onstart = function(){

        console.log("Listening...");

    };

    recognition.onresult = function(event){

        let transcript =
        event.results[0][0].transcript;

        document
        .getElementById("user-input")
        .value = transcript;

        sendMessage();
    };

    recognition.onerror = function(event){

        console.log(event.error);

        if(event.error === "not-allowed"){

            alert(
                "Microphone permission denied.\n\n" +
                "Click the lock icon near the URL and allow microphone access."
            );

        }
        else{

            alert(
                "Voice Error: " +
                event.error
            );

        }

    };

}
else{

    console.log(
        "Speech Recognition not supported."
    );

    document
    .getElementById("voiceBtn")
    .style.display = "none";
}
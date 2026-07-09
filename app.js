async function askAI() {

    let input = document.getElementById("userInput");
    let answer = document.getElementById("response");

    let question = input.value.trim();

    if (question === "") {
        answer.innerHTML = "Please enter a question.";
        return;
    }

    answer.innerHTML = "⏳ Thinking...";

    try {

        let response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: question
            })
        });

        let data = await response.json();

        answer.innerHTML = "🤖 " + data.reply;

    } catch (error) {

        answer.innerHTML = "❌ Unable to connect to server.";

    }

    input.value = "";
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        askAI();
    }
});

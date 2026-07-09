function askAI() {

    let question = document.getElementById("userInput").value;
    let answer = document.getElementById("response");

    if (question.trim() === "") {
        answer.innerHTML = "Please enter a question.";
        return;
    }

    let q = question.toLowerCase();

    if (q.includes("hello") || q.includes("hi")) {
        answer.innerHTML = "🤖 CreatorOS AI: Hello! Welcome to CreatorOS AI.";
    }
    else if (q.includes("youtube")) {
        answer.innerHTML = "📺 CreatorOS AI: YouTube par consistently quality content upload karo.";
    }
    else if (q.includes("ai")) {
        answer.innerHTML = "🤖 CreatorOS AI: AI can help you create content, scripts and ideas faster.";
    }
    else {
        answer.innerHTML = "🤖 CreatorOS AI: Sorry, I don't know that yet.";
    }

    // Input clear after reply
    document.getElementById("userInput").value = "";
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        askAI();
    }
});

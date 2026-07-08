function askAI() document.getElementById("userInput").value = ""; {

    let question = document.getElementById("userInput").value;
    let answer = document.getElementById("response");

    if(question.trim()=="") {
        answer.innerHTML = "Please enter a question.";
    }
    else if (question.toLowerCase().includes("hello")) {
        answer.innerHTML = "🤖 CreatorOS AI: Hello! Welcome to CreatorOS AI.";
    }
    else if (question.toLowerCase().includes("youtube")) {
        answer.innerHTML = "📺 YouTube par consistently quality content upload karo.";
    }
    else if (question.toLowerCase().includes("ai")) {
        answer.innerHTML = "🤖 AI can help you create content, scripts and ideas faster.";
    }
    else {
        answer.innerHTML = "🤖 Sorry, I don't know that yet.";
    }
}

document.getElementById("userInput").addEventListener("keypress", function(event) {

    if(event.key === "Enter") {
        askAI();
    }

});

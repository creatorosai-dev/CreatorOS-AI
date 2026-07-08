document.querySelector("button").addEventListener("click", function () {
    alert("Welcome to CreatorOS AI 🚀");
});

function askAI(){

    let question =
    document.getElementById("userInput").value;

    let answer =
    document.getElementById("response");

    if(question==""){
        answer.innerHTML="Please enter a question.";
    }
    else{
        answer.innerHTML=
        "🤖 CreatorOS AI: I received your question: " + question;
    }
}

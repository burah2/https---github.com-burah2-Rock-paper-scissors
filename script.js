const choices = ["rock", "paper", "scissors"];
const resultText = document.getElementById("result");

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        const result = determineWinner(userChoice, computerChoice);
        resultText.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;

        // Add animation class and remove it after the animation is complete
        choice.classList.add("animate-choice");
        setTimeout(() => {
            choice.classList.remove("animate-choice");
        }, 300);
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

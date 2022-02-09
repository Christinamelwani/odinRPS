function normalize(string)
{
    string = string.toLowerCase();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

function computerPlay(choices)
{
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function determineWinner(computerIndex, playerIndex)
{

    if (computerIndex === playerIndex)
    {
        return "This round ended in a draw";
    }
    else if ((computerIndex == 2 && playerIndex == 1) || (computerIndex == 1 && playerIndex == 0) || (computerIndex == 0 && playerIndex == 2))
    {
        return "The computer won this round";
    }
    else
    {
        return "You won this round";
    }
}

function playRound(computerSelection, PlayerSelection, choices)
{
    PlayerSelection = normalize(PlayerSelection);
    const playerIndex = choices.indexOf(PlayerSelection);
    const computerIndex = choices.indexOf(computerSelection);
    if ((playerIndex) >= 0)
    {
        let result = `The computer chose ${computerSelection}.\n`;
        result += `You chose ${PlayerSelection}.\n`;
        let winner = determineWinner(computerIndex, playerIndex);
        result += winner;
        console.log(result);
        return winner;
    }
    console.log("Not a valid play. Try again.");
    return "invalid";
}

function game()
{
    let computerScore = 0;
    let playerScore = 0;
    const choices = ["Rock", "Paper", "Scissors"];
    while (computerScore < 5 && playerScore < 5)
    {
        try
        {
            playerSelection = normalize(prompt("Choose from Rock, Paper, and Scissors", ""));
            let result = playRound (computerPlay(choices), playerSelection, choices);
            if (result === "The computer won this round")
            {
                computerScore++;
            }
            else if (result === "You won this round")
            {
                playerScore++
            }
            console.log(`Score:\nComputer: ${computerScore} Player: ${playerScore}`);
        }
        catch(e)
        {
            if (e instanceof TypeError)
            {
                console.log("Game ceased. Type game() to play again.");
                return;
            }
        }
    }

    if (computerScore > playerScore)
    {
        console.log("You Lost this game!");
    }
    else if (playerScore > computerScore)
    {
        console.log("You Won this game!");
    }
    else
    {
        console.log("This game ended in a draw!");
    }
    console.log("Game ceased. Type game() to play again.");
}

game();

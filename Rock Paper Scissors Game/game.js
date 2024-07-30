let win = 0;
let lose = 0;
let tie = 0;
let yourchoice;
let mess = "";
let final = "";
let push = new Audio("./assets/huh.mp3")
let wins = new Audio("./assets/Wow.mp3")
let looses = new Audio("./assets/bruh.mp3");
let ties = new Audio("./assets/tie1.mp3");
function rock() {
    yourchoice = 1;
    maingame();
}

function scissors() {
    yourchoice = 2;
    maingame();
}

function paper() {
    yourchoice = 3;
    maingame();
}

function maingame() {
    let aiChoice = Math.floor(Math.random() * 3) + 1;
    if (aiChoice === 1) {
        // ai choose rock
        mess = "AI Choose rock";
        if (yourchoice === 3) {
            // player choose paper
            // player win
            win = win + 1;
            final = "you win";
            wins.play();
        } else if (yourchoice == 1) {
            //tie
            tie = tie + 1;
            final = "you tie"
            ties.play();
            
        } else {
            // player choose scissors
            // player lose
            lose = lose + 1;
            final = "you loose";
            looses.play();
        }
    } else if (aiChoice == 2) {
        // ai choose scissors
        mess = "AI Choose scissors";
        if (yourchoice === 1) {
            // player choose rock
            // player win
            win = win + 1;
            final = "you win";
            wins.play();
        } else if (yourchoice == 2) {
            //tie
            tie = tie + 1;
            final = "you tie";
            ties.play();
        } else {
            // player choose paper
            // player lose
            lose = lose + 1;
            final = "you loose";
            looses.play();
            
        }
    } else {
        // ai choose paper
        mess = "AI Choose paper";
        if (yourchoice === 1) {
            // player choose rock
            // player lose
            lose = lose + 1;
            final = "you loose";
            looses.play();
        } else if (yourchoice == 3) {
            //tie
            tie = tie + 1;
            final = "you tie";
            ties.play();
        } else {
            // player choose scissors
            // player win
            win = win + 1;
            final = "you loose"
            wins.play();
        }
    }
    document.querySelector(".win").textContent = win;
    document.querySelector(".lose").textContent = lose;
    document.querySelector(".tie").textContent = tie;
    document.querySelector(".announce").innerHTML = mess;
    document.querySelector(".final").innerHTML = final;
}

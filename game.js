var cards = [
    "2ch", "2b", "2kr", "2p",
    "3ch", "3b", "3kr", "3p",
    "4ch", "4b", "4kr", "4p",
    "5ch", "5b", "5kr", "5p",
    "6ch", "6b", "6kr", "6p",
    "7ch", "7b", "7kr", "7p",
    "8ch", "8b", "8kr", "8p",
    "9ch", "9b", "9kr", "9p",
    "10ch", "10b", "10kr", "10p",
    "jch", "jb", "jkr", "jp",
    "qch", "qb", "qkr", "qp",
    "kch", "kb", "kkr", "kp",
    "ach", "ab", "akr", "ap"
]
var usedCards = [];
var totalPoints = 0;
var gameEnded = false;
var dealerScore = 0;
var dealerCardsOpen = [];
function startGame() {
//    if (gameEnded) return;
    let r;
    r = Math.floor(Math.random() * 52);
    var firstPlayerCard = cards[r];
    r = Math.floor(Math.random() * 52);
    var secondPlayerCard = cards[r];
    while (secondPlayerCard === firstPlayerCard) {
        r = Math.floor(Math.random() * 52);
        secondPlayerCard = cards[r];
    }
    r = Math.floor(Math.random() * 52);
    var firstDealerCard = cards[r];
    while (firstDealerCard === firstPlayerCard || firstDealerCard === secondPlayerCard) {
        r = Math.floor(Math.random() * 52);
        firstDealerCard = cards[r];
    }
    r = Math.floor(Math.random() * 52);
    var secondDealerCard = cards[r];
    while (secondDealerCard === firstPlayerCard || secondDealerCard === secondPlayerCard || firstDealerCard === secondDealerCard) {
        r = Math.floor(Math.random() * 52);
        secondDealerCard = cards[r];
    }
    dealerCardsOpen = [firstDealerCard, secondDealerCard];


    console.log(`${firstPlayerCard} ${secondPlayerCard} ${firstDealerCard} ${secondDealerCard}`);
    document.getElementById("imgPlayer").innerHTML = "<img src=\"images/" + firstPlayerCard + ".png\" class='photo'><img src=\"images/" + secondPlayerCard + ".png\" class='photo'>";
    document.getElementById("imgDealer").innerHTML = "<img src=\"images/" + firstDealerCard + ".png\" class='photo'><img src=\"images/rubashka.png\" class='photo'>";
    let playerPoints, dealerPoints;
    playerPoints = 0;
    dealerPoints = 0;
    if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(firstPlayerCard.split("")[0])) {
        playerPoints += parseInt(firstPlayerCard.split("")[0]);
    } else if (["a", "k", "q", "j", "1"].includes(firstPlayerCard.split("")[0])) {
        if (["k", "q", "j", "1"].includes(firstPlayerCard.split("")[0])) {
            playerPoints += 10;
        } else {
            if (playerPoints > 10) {
                playerPoints += 1;
            } else {
                playerPoints += 11;
            }
        }
    }
    if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(secondPlayerCard.split("")[0])) {
        playerPoints += parseInt(secondPlayerCard.split("")[0]);
    } else if (["a", "k", "q", "j", "1"].includes(secondPlayerCard.split("")[0])) {
        if (["k", "q", "j", "1"].includes(secondPlayerCard.split("")[0])) { playerPoints += 10; }
        else {
            if (playerPoints > 10) { playerPoints += 1; }
            else { playerPoints += 11; }
        }
    }
    totalPoints += playerPoints;
    if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(firstDealerCard.split("")[0])) {
        dealerPoints += parseInt(firstDealerCard.split("")[0]);
    } else if (["a", "k", "q", "j", "1"].includes(firstDealerCard.split("")[0])) {
        if (["k", "q", "j", "1"].includes(firstDealerCard.split("")[0])) {
            dealerPoints += 10;
        } else {
            if (dealerPoints > 10) {
                dealerPoints += 1;
            } else {
                dealerPoints += 11;
            }
        }
    }
    if (playerPoints === 21) {
        playerPoints = "blackjack";
        win();
    }
    document.getElementById("point1").innerHTML = `${playerPoints}`;
    document.getElementById("point2").innerHTML = `${dealerPoints}`;
    usedCards.push(firstDealerCard, secondDealerCard, firstPlayerCard, secondPlayerCard);
    // подсчёт второй карты диллера, занос в глобальную переменную для подсчёта к концу игры
    if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(secondDealerCard.split("")[0])) {
        dealerPoints += parseInt(secondDealerCard.split("")[0]);
    } else if (["a", "k", "q", "j", "1"].includes(secondDealerCard.split("")[0])) {
        if (["k", "q", "j", "1"].includes(secondDealerCard.split("")[0])) {
            dealerPoints += 10;
        } else {
            if (dealerPoints > 10) {
                dealerPoints += 1;
            } else {
                dealerPoints += 11;
            }
        }
    }
    dealerScore += dealerPoints;

}

function hit() {
    if (totalPoints >= 21) return
    let r;
    r = Math.floor(Math.random() * 52);
    let morePlayerCard = cards[r];
    while (usedCards.includes(morePlayerCard)) {
        r = Math.floor(Math.random() * 52);
        let morePlayerCard = cards[r];
        if (usedCards.length > 9) break;
    }
    usedCards.push(morePlayerCard);
    if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(morePlayerCard.split("")[0])) {
        totalPoints += parseInt(morePlayerCard.split("")[0]);
    } else if (["a", "k", "q", "j", "1"].includes(morePlayerCard.split("")[0])) {
        if (["k", "q", "j", "1"].includes(morePlayerCard.split("")[0])) {
            totalPoints += 10;
        } else {
            if (totalPoints > 10) {
                totalPoints += 1;
            } else {
                totalPoints  += 11;
            }
        }
    }
    document.getElementById("point1").innerHTML = `${totalPoints}`;
    document.getElementById("imgPlayer").innerHTML += "<img src=\"images/" + morePlayerCard + ".png\" class='photo'>";
    if (totalPoints > 21) {
        lose();
    } else if (totalPoints == 21) {
        win();
    }
}

function stand() {
    if (gameEnded) return;
    gameEnded = true;
    while (dealerScore < 17) {
        let r;
        r = Math.floor(Math.random() * 52);
        let moreDealerCard = cards[r];
        while (usedCards.includes(moreDealerCard)) {
            r = Math.floor(Math.random() * 52);
            let moreDealerCard = cards[r];
            if (usedCards.length > 9) break;
        }
        usedCards.push(moreDealerCard);
        if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(moreDealerCard.split("")[0])) {
            dealerScore += parseInt(moreDealerCard.split("")[0]);
        } else if (["a", "k", "q", "j", "1"].includes(moreDealerCard.split("")[0])) {
            if (["k", "q", "j", "1"].includes(moreDealerCard.split("")[0])) {
                dealerScore += 10;
            } else {
                if (dealerScore > 10) {
                    dealerScore += 1;
                } else {
                    dealerScore  += 11;
                }
            }
        }
        document.getElementById("point2").innerHTML = `${dealerScore}`;
        document.getElementById("imgDealer").innerHTML = "<img src=\"images/" + dealerCardsOpen[0] + ".png\" class='photo'><img src=\"images/" + dealerCardsOpen[1] + ".png\" class='photo'>"
        setTimeout(() => {document.getElementById("imgDealer").innerHTML += "<img src=\"images/" + moreDealerCard + ".png\" class='photo'>"}, 500)
    }
    if (dealerScore > 17) {
        document.getElementById("imgDealer").innerHTML = "<img src=\"images/" + dealerCardsOpen[0] + ".png\" class='photo'><img src=\"images/" + dealerCardsOpen[1] + ".png\" class='photo'>";
        document.getElementById("point2").innerHTML = `${dealerScore}`;
    }
    if (dealerScore > 21) win();
    else if (dealerScore === 21) lose();
    else {
        if (dealerScore < totalPoints) win();
        else if (dealerScore > totalPoints) lose();
        else if (dealerScore === totalPoints) draw();
    }
}

function lose() {
    document.getElementById("state").innerHTML = "You lose!";
    gameEnded = true;
}

function win() {
    document.getElementById("state").innerHTML = "You won!";
    gameEnded = true;
}

function draw() {
    document.getElementById("state").innerHTML = "Tie!";
    gameEnded = true;
}

function newGame() {
    usedCards = [];
    totalPoints = 0;
    gameEnded = false;
    dealerScore = 0;
    dealerCardsOpen = [];
    document.getElementById("state").innerHTML = "";
    startGame();
}

window.onload = function () {
    startGame()
}
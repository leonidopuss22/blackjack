<?php
?>
<html>
<head>
    <title>BlackJack</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php include_once "bootstrap.php"; ?>
    <link rel="stylesheet" href="game.css">
    <script src="game.js"></script>
</head>
<body style="background-color: black;">
<header>
    <div class="head">
        <p>
            BlackJack
        </p>
    </div>
</header>
<div>
    <div class="allcards">
        <div class="cards player-cards">
            <div id="imgPlayer">

            </div>
            <p class="points">Your points:  <span id="point1"></span></p>
        </div>
        <div class="cards dealer-cards">
            <div id="imgDealer">

            </div>
            <p class="points">Dealer points: <span id="point2"></span></p>
        </div>
    </div>
    <div class="status">
        <span id="state">

        </span>
    </div>
    <div class="buttons">
        <button class = "btn btn-primary" onclick="hit()">Hit</button>
        <button class = "btn btn-primary" onclick="stand()">Stand</button>
<!--        <bn class = "btn"tton></button> -->
        <button class = "btn btn-danger" onclick="newGame()">New Game</button>
    </div>
</div>
</body>
</html>
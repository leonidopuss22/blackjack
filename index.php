<html>
<head>
    <title>BlackJack</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="mainpage.css">
    <?php include_once "bootstrap.php"; ?>
</head>
<body style="background-color: black;">
    <header>
        <div class="head">
            <p>
            BlackJack
            </p>
        </div>
    </header>
    <div class="main-body">
        <p class="main-text">
            Press button to start game!
        </p>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-warning main-btn" onclick="window.location.href = 'game.php';">
                Begin
            </button>
        </div>
    </div>
    <footer class="">
        The game was created by Leonid Opuss 2021
    </footer>

</body>
</html>

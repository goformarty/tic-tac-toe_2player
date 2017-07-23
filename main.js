
var numberOfPlayers = 2;
var currentPlayer = 0;
var move = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points
var size = 3;

function drawBoard()
{
    var parent = document.getElementById("game");
    var counter = 1;

    for (var i = 0; i < 3; i++)
    {
        var row = document.createElement("tr");

        for(var x = 0; x < size; x++)
        {
            var col = document.createElement("td");
            col.innerHTML = counter;

            row.appendChild(col);
        }
        parent.appendChild(row);
    }
}

drawBoard();

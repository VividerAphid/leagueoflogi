const socket = io();
var gameinst = new GameInstance();

socket.on('testData', (data) =>{
    loadPlayersTest(data);
});

var elem = document.getElementById("twoDiv");
var two = new Two({
    type: Two.Types.canvas,
    width: 500,
    height: 500,
}).appendTo(elem);


function loadPlayersTest(data){
    console.log("loading");
    gameinst = data;
    loadGameObjects();
    render();
    //updateCanvasDimensions(data);
}

function loadGameObjects(){
    gameinst.gameObjects = [];
    for(let r = 0; r < gameinst.players.length; r++){
        let temp = two.makeCircle(gameinst.players[r].x, gameinst.players[r].y, 10);
        temp.fill = gameinst.teams[gameinst.players[r].team].color;
        gameinst.gameObjects.push(temp);
    }
}
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
    //updateCanvasDimensions(data);
    render();
}
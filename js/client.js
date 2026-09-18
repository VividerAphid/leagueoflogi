const socket = io();
var gameinst = new GameInstance();

socket.on('testData', (data) =>{
    loadPlayersTest(data);
});

function loadPlayersTest(data){
    gameinst.players = data;
}
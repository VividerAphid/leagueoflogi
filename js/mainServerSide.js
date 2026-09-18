const {Game, Player} = require("./serverClasses.js");

function initGame(){
    let gm = new Game();
    return gm;
}

module.exports = {initGame};
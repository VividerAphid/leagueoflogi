const {Game, Player} = require("./serverClasses.js");

function initGame(){
    let gm = new Game();
    let colors = genRandomColor();
    gm.initTeam("Team 1", colors[0]);
    gm.initTeam("Team 2", colors[1]);
    return gm;
}

function genRandomColor(returnRGBs){
	let rc = Math.floor(Math.random()*256);
    let gc = Math.floor(Math.random()*256);
    let bc = Math.floor(Math.random()*256);
    let color = "rgb("+ rc+ ","+gc+","+bc+")";
    let inverse = calcInverseColor(rc, gc, bc);
	if(returnRGBs){
		return [color, inverse, [rc, gc, bc]];
	}
	else{
		return [color, inverse];
	}
}
function calcInverseColor(r, g, b){
	return "rgb("+ (255-r) +","+(255-g) +"," +(255-b)+")";
}

module.exports = {initGame};
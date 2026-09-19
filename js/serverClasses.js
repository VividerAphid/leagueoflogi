class Game{
    constructor(){
        this.players = [];
        this.width = 500;
        this.height = 500;
    }
    initPlayer(name, team, x, y){
        this.players.push(new Player(name, team, x, y));
    }
}

class Player{
    constructor(name, team, x, y){
        this.team = team;
        this.name = name;
        this.x = x;
        this.y = y;
    }
}

module.exports = {Game, Player};
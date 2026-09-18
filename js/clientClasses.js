class GameInstance{
    constructor(){
        this.players = [];
    }
}

class Player{
    constructor(name, team, x, y){
        this.team = team;
        this.name = name;
        this.x = x;
        this.y = y;
        this.inventory = {};
    }
}
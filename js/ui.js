function updateCanvasDimensions(gameIns){
    let can = document.getElementById("gameCanvas");
    can.width = gameIns.width;
    can.height = gameIns.height;
}

// function render(){
//     let can = document.getElementById("gameCanvas");
//     let ctx = can.getContext("2d");
    
//     ctx.clearRect(0, 0, can.width, can.height);
    
//     for(let r = 0; r < gameinst.players.length; r++){
//         let pl = gameinst.players[r];
//         ctx.beginPath();
//         ctx.fillStyle = "#f00";
//         ctx.strokeStyle = "#f00";
//         ctx.arc(pl.x, pl.y, 10, 0, 2*Math.PI);
//         ctx.fill();
//         ctx.stroke();
//     }
// }

function render(){
    var radius = 50;
    var x = two.width * 0.5;
    var y = two.height * 0.5 - radius * 1.25;
    var circle = two.makeCircle(x, y, radius);
    y = two.height * 0.5 + radius * 1.25;
    // The object returned has many stylable properties:
    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;
    // Don’t forget to tell two to draw everything to the screen
    two.update();
}
class Player {
    constructor(box) {
        this.box = document.querySelector(box);
        this.x = this.box.offsetTop;
        this.y = this.box.offsetLeft;

    }


}

class MakeMove {


    static addMove(moveX, moveY, player) {
        player.x +=moveX;
        player.y += moveY;
        document.querySelector('.player').style.top = player.x + 'px';
        
        document.querySelector('.player').style.left = player.y + 'px';
    }
}



class ControlDom {
    static controlPlayer(event, player) {
        if (event.key === 'ArrowDown') {
         

            MakeMove.addMove(10,0, player);
           
        }
        else if (event.key === 'ArrowUp') {
         
            console.log(event.key);
            MakeMove.addMove(-10, 0, player);
        }
        else if (event.key === 'ArrowLeft') {
           
          
            MakeMove.addMove(0, -10, player);
            console.log(event.key);
        }
        else if (event.key === 'ArrowRight') {
        
            
            MakeMove.addMove(0, 10, player);
            console.log(event.key);
        }
    


    if(player.x<0) alert("PRZEGRAŁĘŚ x<0");
    else if(player.y<0) alert("PRZEGRAŁĘŚ y<0");
    else if(player.x>document.querySelector(".board").offsetWidth-document.querySelector(".player").offsetWidth) alert("PRZEGRAŁĘŚ");
    else if(player.y>document.querySelector(".board").offsetHeight-document.querySelector(".player").offsetHeight) alert("PRZEGRAŁĘŚ");
    }

}
 



const player1 = new Player(".player");


document.addEventListener('keydown', (event) => ControlDom.controlPlayer(event, player1));




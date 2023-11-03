const MOVEMENT_SPEED = 30;

class Pong{
    x = 0;
    y = 0;
    el = null;

    constructor(){
       this.init();  
    }

    init(){
        this.el = document.createElement('div');
        this.el.style.height = '100px';
        this.el.style.width = '10px';
        this.el.style.background = 'black';
        this.el.style.position = 'absolute';
        this.el.style.top = '50vh';
        document.body.appendChild(this.el);
    }
}

class Enemy extends Pong{
    constructor(){
        super();
        this.el.style.right = '50px'
    }

    move(){
        setInterval(function(){
            if(this.y < window.innerHeight){
                this.y += MOVEMENT_SPEED;
                console.log(this.y);
                this.el.style.bottom = this.y + 'px';
            }else{
                this.y -= MOVEMENT_SPEED;
                this.el.style.bottom = this.y + 'px';
            }
        }, 500);
    }
}

let enemy = new Enemy();
enemy.move();
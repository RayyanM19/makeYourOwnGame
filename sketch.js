var bgimg1,bg1;
var poacher1,p1;
var tower1, tower2, tower1I, tower2I;
var gameState=0;
var life = 3;

function preload(){
    poacher1 = loadImage("images/poacher1.png");
    bgimg1 = loadImage("images/Track4.png");
    tower1I = loadImage("images/Tower1.png");
    tower2I = loadImage("images/Tower2.png");


}

function setup(){
    createCanvas(800,700);

    

    bg1 = createSprite(400,350);
    bg1.addImage(bgimg1);
    bg1.scale=3;

    p1 = createSprite(80,50,10,10);
    p1.addImage(poacher1);
    p1.scale=0.2;


  
}

function draw(){
    background(0);
    tower();
    drawSprites();
    game();

    if(keyDown(LEFT_ARROW)){
        gameState=1;
    }
    
    text(mouseX+","+mouseY,mouseX,mouseY);

    

}

function tower(){
    if(gameState===1){

    if(keyDown(UP_ARROW)){
        tower1 = createSprite(mouseX,mouseY);
        tower1.addImage(tower1I);
        tower1.scale=0.15;
        if(tower1.isTouching(p1)){
            if(p1.velocityX!==0){
                p1.velocityX=p1.velocityX-0.2;
            }
            if(p1.velocityY!==0){
                p1.velocityY=p1.velocityY-0.2;
            }
        }
    }
    if(keyDown(DOWN_ARROW)){
        tower2 = createSprite(mouseX,mouseY);
        tower2.addImage(tower2I);
        tower2.scale = 0.12;
        if(tower2.isTouching(p1)){
            if(p1.velocityX!==0){
                p1.velocityX=p1.velocityX-0.3;
            }
            if(p1.velocityY!==0){
                p1.velocityY=p1.velocityY-0.3;
            }
            
        }
    }
}
}

function game(){
    if(gameState===1){
        if(p1.x>780){
            life--;
        }
        if(p1.y<130){
            p1.velocityY=0.7;
        }
        if(p1.y>130 && p1.x<290){
            p1.velocityY=0;
            if(p1.y=130){
                p1.velocityX=0.7;
            }
        }
        if(p1.x>290){
            p1.velocityX=0;
            if(p1.x=290){
                p1.velocityY=0.7;
            }  
        }
        if(p1.y>340){
                p1.velocityY=0;
                if(p1.y=340){
                    p1.velocityX=-0.7;
                }
            }
        if(p1.x>70 && p1.y>340){
            p1.velocityX=0;
        }
    }
}
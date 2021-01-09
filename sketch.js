var tom,tom1,tom2,tom3;
var jerry,jerry1,jerry2,jerry3;
var garden,gardenImg;

function preload() {
    //Tom's Images
    tom1 = loadImage("tomOne.png");
    tom2 = loadAnimation("tomTwo.png","tomThree.png");
    tom3 = loadImage("tomFour.png");

    //Jerry's Images
    jerry1 = loadImage("jerryOne.png");
    jerry2 = loadAnimation("jerryTwo.png","jerryThree.png");
    jerry3 = loadImage("jerryFour.png");

    //garden Image
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(975,705);
    garden = createSprite(width/2,height/2,1,1);
    garden.addImage("gardenImg",gardenImg);
  
    jerry = createSprite(200,600);

      // jerry.debug=true

    jerry.addImage("jerryNormal",jerry1);
    jerry.addAnimation("jerryTease",jerry2);
    jerry.addImage("jerryHappy",jerry3);
    jerry.scale = 0.1;
  
    tom =createSprite(870,600);
    // tom.debug=true
    tom.addImage("tomNormal",tom1);
    tom.addAnimation("tomRun",tom2);
    tom.addImage("tomHappy",tom3);
    tom.scale=0.15;

}

function draw() {

    background(255);
  
//     edges= createEdgeSprites();
//    tom.collide(edges);
    
//  keyPressed()

if (tom.x-jerry.x <(tom.width-jerry.width)/2){
  tom.x= 300;
    tom.changeImage("tomHappy",tom3);
    tom.velocityX = 0;

    jerry.changeImage("jerryHappy",jerry3);
    
    
}
// else{    
//     jerry.addImage("jerryNormal",jerry1);
//     tom.addImage("tomNormal",tom1);
// }

    drawSprites();
}


function keyPressed(){
  
if(keyCode === LEFT_ARROW){
  tom.velocityX=-3;    
// tom.x=tom.x-3;
  

jerry.changeAnimation("jerryTease",jerry2);
  tom.changeAnimation("tomRun",tom2);
}
  //For moving and changing animation write code here


}

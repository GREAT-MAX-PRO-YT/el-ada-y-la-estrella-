var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png")
    fairyVoice = loadSound("sound/JoyMusic.mp3")
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);
    fairyVoice.play();
	//escribe el código para reproducir el sonido fairyVoice
    fairy=createSprite(400,375,20,20) 
    fairy.addAnimation("ada",fairyImg)
	fairy.scale= 0.2
	//crea el sprite del hada, y agrega la animación para el hada


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
   if(star.y>350){
	   Matter.Body.setStatic(starBody,true)
   }
  //escribe aquí el código para detener la estrella en la mano del hada

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
     if (keyCode === LEFT_ARROW){
		 fairy.x=fairy.x-20
	 }

	 if (keyCode === RIGHT_ARROW){
		fairy.x=fairy.x+20
	}
	//escribe el código para mover al hada a la izquierda y derecha
	
}

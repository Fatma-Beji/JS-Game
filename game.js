"ussse strict"

var Game = {
	canvas: undefined,
	canvasCtx: undefined,
	enemy1Sprite: undefined,
	enemy2Sprite: undefined,
	enemy3Sprite: undefined,
	enemy4Sprite: undefined,
	enemy1DrawY: undefined,
	enemy1DrawX: undefined,
	enemy2DrawY: undefined,
	enemy2DrawX: undefined,
	enemy3DrawY: undefined,
	enemy3DrawX: undefined,
	enemy4DrawX: undefined,
	enemy4DrawX: undefined,
    imgSprite: undefined,
	armeSprite: undefined,
	playerY: undefined,
	playerX : undefined,
	armeX: undefined,
	armeY: undefined,
	playerLife: undefined,
	score: undefined,
	backgroundMusic1: undefined,
	backgroundMusic2: undefined,
	backgroundMusic3: undefined
};

Game.start = function () {
	Game.canvas = document.getElementById("myCanvas");
	Game.canvasCtx = Game.canvas.getContext("2d");
	Game.imgSprite = new Image();
	Game.imgSprite.src="fatma.png";
	Game.armeSprite = new Image();
	Game.armeSprite.src="drop.png";
	Game.enemy1Sprite = new Image();
	Game.enemy1Sprite.src="6.png";
	Game.enemy2Sprite = new Image();
	Game.enemy2Sprite.src="2.png";
	Game.enemy3Sprite = new Image();
	Game.enemy3Sprite.src="4.png";
	Game.enemy4Sprite = new Image();
	Game.enemy4Sprite.src= "3.png";
	Game.backgroundMusic1 = new Audio();
	Game.backgroundMusic1.src = "stage.mp3";
	Game.backgroundMusic2 = new Audio();
	Game.backgroundMusic2.src ="over.mp3";
	Game.backgroundMusic3 = new Audio();
	Game.backgroundMusic3.src ="win.mp3"; 
	Game.score = 0;
	Game.playerX = (Game.canvas.width) / 2;
	Game.playerY = 500;
	Game.playerLife = 3;
	Game.enemy1DrawY = -30;
	Game.enemy1DrawX = 40;
	Game.enemy2DrawY = -60;
	Game.enemy2DrawX = 200;
	Game.enemy3DrawY = -120;
	Game.enemy3DrawX = 400;
	Game.enemy4DrawX = 210;
	Game.enemy4DrawY = -550;
	Game.armeX = Game.playerX + 15;
	Game.armeY = 500;
    Game.mainLoop();
};

document.addEventListener('DOMContentLoaded',Game.start);

Game.shoot = function () {
	Game.canvasCtx.drawImage(Game.armeSprite,0,0,512,512,Game.armeX,Game.armeY,20,20);
};
Game.update = function () {
	Game.backgroundMusic1.play();
	if(Game.enemy1DrawY < Game.canvas.height) {
		Game.enemy1DrawY += 2;
	}
	 else 
    {
		Game.enemy1DrawY = -30;
		Game.enemy1DrawX = Math.random() * 500;
    } 
    
	if(Game.enemy2DrawY < Game.canvas.height) {
		Game.enemy2DrawY += 2;
	}
	else
	{
		Game.enemy2DrawY = -60;
		Game.enemy2DrawX = Math.random() * 500;
	}

	if(Game.enemy3DrawY < Game.canvas.height) {
		Game.enemy3DrawY += 2;
	}
	else
	{
		Game.enemy3DrawY = -120;
		Game.enemy3DrawX = Math.random() * 500;
	}


	if(Game.enemy4DrawY < Game.canvas.height) {
		Game.enemy4DrawY += 2;
	}
	else
	{
		Game.enemy4DrawY = -550;
		Game.enemy4DrawX = Math.random() * 500;
	}

	if(Game.armeY > -20) {
		Game.armeY -=10;
	}
	else
	{	Game.armeX = Game.playerX + 15;
		Game.armeY = 500;
	}

	if((Game.enemy1DrawX <= (Game.armeX + 20)) && ((Game.enemy1DrawX + 48) >= Game.armeX) && (Game.enemy1DrawY >= Game.armeY)
	 && (Game.enemy1DrawY <= (Game.armeY+20)))
	{
		Game.enemy1DrawY = -30;
		Game.enemy1DrawX = Math.random() * 500;
		Game.score += 5;
	}
	if((Game.enemy2DrawX <= (Game.armeX + 20)) && ((Game.enemy2DrawX + 65) >= Game.armeX) && (Game.enemy2DrawY >= Game.armeY)
	 && (Game.enemy2DrawY <= (Game.armeY+20)))
	{
		Game.enemy2DrawY = -30;
		Game.enemy2DrawX = Math.random() * 500;
		Game.score += 5;
	}
	if((Game.enemy3DrawX <= (Game.armeX + 20)) && ((Game.enemy3DrawX +42) >= Game.armeX) && (Game.enemy3DrawY >= Game.armeY)
	 && (Game.enemy3DrawY <= (Game.armeY+20)))
	{
		Game.enemy3DrawY = -30;
		Game.enemy3DrawX = Math.random() * 500;
		Game.score += 5;
	}
	if((Game.enemy4DrawX <= (Game.armeX + 20)) && ((Game.enemy4DrawX + 42) >= Game.armeX) && (Game.enemy4DrawY >= Game.armeY)
	 && (Game.enemy4DrawY <= (Game.armeY+20)))
	{
		Game.enemy4DrawY = -30;
		Game.enemy4DrawX = Math.random() * 500;
		Game.score += 5;
	}
	if((Game.enemy1DrawX <= (Game.playerX + 50)) && ((Game.enemy1DrawX + 48) >= Game.playerX) &&
	 (Game.enemy1DrawY >= Game.playerY) && (Game.enemy1DrawY <= (Game.playerY+50)) && (Game.playerLife > 0))
	{
		Game.playerLife -=1;
	}
	if((Game.enemy2DrawX <= (Game.playerX + 50)) && ((Game.enemy2DrawX + 65) >= Game.playerX) && 
		(Game.enemy2DrawY >= Game.playerY) && (Game.enemy2DrawY <= (Game.playerY+50)) && (Game.playerLife > 0))
	{
		Game.playerLife -=1;
	}
	if((Game.enemy3DrawX <= (Game.playerX + 50)) && ((Game.enemy3DrawX +42) >= Game.playerX) &&
	    (Game.enemy3DrawY >= Game.playerY) && (Game.enemy3DrawY <= (Game.playerY+50)) && (Game.playerLife > 0))
	{
		Game.playerLife -=1;
	}
	if((Game.enemy4DrawX <= (Game.playerX + 50)) && ((Game.enemy4DrawX + 42) >= Game.playerX) && 
		(Game.enemy4DrawY >= Game.playerY) && (Game.enemy4DrawY <= (Game.playerY+50)) && (Game.playerLife > 0))
	{
		Game.playerLife -=1;
	}

	
	/*test*/console.log(Game.playerLife);
	if(Game.playerLife == 0) 
	{
		Game.backgroundMusic1.pause();
		Game.backgroundMusic2.play();
		alert('GameOver');
    }
	else
	if(Game.score == 150)
    {
    	Game.backgroundMusic1.pause();
    	Game.backgroundMusic3.play();
		alert('you win');
	}
	
};
Game.drawScore = function () {
	Game.canvasCtx.font = "16px Arial";
	Game.canvasCtx.fillStyle = "white";
	Game.canvasCtx.fillText("Score: "+Game.score,8,20);
};
Game.drawPlayerLife = function () {
	Game.canvasCtx.font = "16px Arial";
	Game.canvasCtx.fillStyle = "white";
	Game.canvasCtx.fillText("Player Life: "+Game.playerLife,Game.canvas.width-170,20);
};

Game.drawEnemy1 = function () {
	Game.canvasCtx.drawImage(Game.enemy1Sprite,0,0,1024,1024,Game.enemy1DrawX,Game.enemy1DrawY,120,120);
};

Game.drawEnemy2 = function () {
	Game.canvasCtx.drawImage(Game.enemy2Sprite,0,0,1024,1024,Game.enemy2DrawX,Game.enemy2DrawY,65,65);
};

Game.drawEnemy3 = function () {
	Game.canvasCtx.drawImage(Game.enemy3Sprite,0,0,1024,1024,Game.enemy3DrawX,Game.enemy3DrawY,200,200);
};

Game.drawEnemy4 = function () {
	Game.canvasCtx.drawImage(Game.enemy4Sprite,0,0,1024,1024,Game.enemy4DrawX,Game.enemy4DrawY,200,200);
};

Game.drawPlayer = function () {
	Game.canvasCtx.clearRect(0,0,Game.canvas.width,Game.canvas.height);
	Game.canvasCtx.drawImage(Game.imgSprite,0,0,89,89,Game.playerX,Game.playerY,89,89);
};

Game.draw = function () {
	Game.drawPlayer();
	Game.shoot();
	Game.drawEnemy1();
	Game.drawEnemy2();
	Game.drawEnemy3();
	Game.drawEnemy4();
	Game.drawScore();
	Game.drawPlayerLife();

};

Game.move = function (e) {
	if ((e.keyCode == 39) && (Game.playerX + 60 < Game.canvas.width)) {
		Game.playerX +=20; //rightArrowKey
	}
	if((e.keyCode == 37) && (Game.playerX > 10)) {
		Game.playerX -=20; //leftArrowKey
	}
	/*if (e.keyCode == 38) {
		Game.playerY -=10;
	}
	if(e.keyCode == 40) {
		Game.playerY +=10;
	}*/	
};

document.onkeydown = Game.move;

Game.mainLoop = function () {
	Game.update();
	Game.draw();
	window.setTimeout(Game.mainLoop,1000/60);
};


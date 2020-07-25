function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  database = firebase.database();
}

foodStock=database.ref('Food');
foodStock.on("value", readStock);


function draw() {
  background(255,255,255);  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

fedTime = database.ref('FeedTime');
fedTime.on("value", function(data){
lastFed = data.val();
});

}
  drawSprites();


function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x <= 0){
    x = 0;
  }

  else{
    x = x -1;
  }

  database.ref('/').update ({
    Food: x
  })
}

display(){
  var x = 80, y = 100;

  imageMod(CENTER);
  image(this.image, 720,220,70,70);

  if(this.foodStock != 0){
    for (var i = 0; i<this.foodStock; i++){
      if(i%10 == 0){
        x = 80;
        y = y +50;
      }
      image(this.image, x,y,50,50);
      x = x +30
    }
  }
}
};



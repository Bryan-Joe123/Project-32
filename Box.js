class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
    this.image = loadImage("sprites/wood1.png");
    this.visiblity=255;
  }
  display(){
    if(this.body.speed<3){
      super.display();
    }else{
      World.remove(world,this.body);
      push();
      this.visiblity-=5;
      translate(this.body.position.x,this.body.position.y);
      tint(255,this.visiblity);
      imageMode(CENTER);
      image(this.image,0,0,30,40);
      pop();
    }
    if(this.visiblity<0&&this.visiblity>-1000){
      score++;
    }
  }

  // score(){
  //   console.log(this.visiblity);
  //   if(this.visiblity<0&&this.visiblity>-1000){
  //     score++;
  //   }
  // }
};
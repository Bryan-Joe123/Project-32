class poligon{
  constructor(x,y,width=50,height=50){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
    this.body = Bodies.circle(50, 200, 20,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("sprites/Poligon.png");
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

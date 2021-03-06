class ball {
  constructor(x, y) {
    var options = {
         isStatic:false,
        'restitution':0.09,
        'friction':0.9,
        'density':0.5
    }
    this.body = Matter.Bodies.circle(x, y, 20, options);
    this.radius = 20;
    this.x = x;
    this.y = y;
    this.image = loadImage("Hexagon.png");

    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.radius*2,this.radius*2);
    pop();
  }
}

  
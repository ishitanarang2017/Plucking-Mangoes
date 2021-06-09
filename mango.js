class Mango {
  constructor(x,y,radius) {
      var options = {
          isStatic: true,
          density :0.5
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.image = loadImage("mango.png");
      this.r = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r,this.r);
      pop();
    }
}
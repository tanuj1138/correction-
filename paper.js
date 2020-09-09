class Paper {
    constructor(x, y, r) {
   

    this.x= x;
    this.y = y;
    this.r =r;

    var options = {
      isStatic : false,
      restitution: 0.3,
       friction: 1,
       density : 2,
      }
    this.body= Bodies.circle(x, y, r/2, options);
    World.add(world, this.body);
}
  
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    stroke("brown");
    strokeWeight(4);
    fill(255);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
};

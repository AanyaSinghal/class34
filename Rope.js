class rope{
    constructor(A,B){
        var options={
            bodyA : A,
            pointB : B,
            stiffness : 1.2,
            length:450
        }
    this.pointB = B;
    this.rope = Matter.Constraint.create(options);
    World.add(world,this.rope);
    }
    display(){
    var pointB = this.pointB;
    var pointA = this.rope.bodyA.position;
    push();
    stroke(48,22,8);
    strokeWeight(3);
    line(pointB.x,pointB.y,pointA.x,pointA.y);
    pop();
}
}
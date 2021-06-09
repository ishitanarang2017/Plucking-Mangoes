class Slingshot{
    constructor(body1,pointB){
        var options ={
            bodyA: body1,
            pointB:pointB,
            stiffness: 0.04,
            length:10,
        } 
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            strokeWeight(4);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
            pop ();
        }
       
    }
    fly(){
        this.sling.bodyA = null;
    }
}
class Ball{
    constructor(x,y,d){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.3,
            'density':1.2
        }

        this.body = Bodies.circle(x, y, d/2, options)
        this.diameter = d;
        this.image = loadImage("paperImg.png");

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.diameter, this.diameter);
    }
}
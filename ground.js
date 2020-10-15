class Base {
    constructor (x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display(){
        var baseP = this.body.position

        rectMode(CENTER)
        fill(0)
        rect(baseP.x,baseP.y,this.width,this.height)
    }
}
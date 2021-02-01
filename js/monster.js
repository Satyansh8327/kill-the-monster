class Monster{
    constructor(x,y,radius){
        var options={
           
            frictionAir:0.1,
            density:1
        }
        this.x=x;
        this.y=y;
       
        this.hero=Bodies.circle(this.x,this.y,radius,options)
       this.radius=radius
        this.image=loadImage("images/Monster-01.png")
        World.add(world,this.hero)
    }
display(){
    var pos = this.hero.position
    var angle= this.hero.angle

    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    fill ("red")
     imageMode(CENTER)
    image(this.image,0,0,this.radius,this.radius)
    pop ()

 
}

} 
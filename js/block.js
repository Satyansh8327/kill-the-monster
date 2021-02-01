class Box{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':0.04
        }
        this.box=Bodies.rectangle(x,y,70,70,options)
        this.width=70
        this.height=70

        World.add(world,this.box)
    }
display(){
    var pos = this.box.position
    var angle= this.box.angle

    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    fill ("red")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop ()

}
} 
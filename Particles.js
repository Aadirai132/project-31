class Plinko
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            
            }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(x, y, this.r, options)
        World.add(world, this.body);
    }
    display()
    {
            var pos=this.body.position;        
            push()
            translate(pos.x, pos.y);
            // rectMode(CENTER)
            // rotate(this.body.angle)
            fill("white");
            ellipseMode(CENTER);
            ellipseMode(RADIUS)
            ellipse(0,0,this.r*2, this.r*2)
            pop()
            
    }
}

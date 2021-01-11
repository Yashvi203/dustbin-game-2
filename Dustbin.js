class Dustbin
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }

        this.x=x;
        this.y=y;
        this.r=r;
        dustbinObject.addImage("dustbingreen.png");
        
    }
    display()
        {
            var dustbinpos=this.body.position;
            var dustbinObject;
            push()
            translate(dustbinpos.x, dustbinpos.y);
            rectMode(CENTER)
            strokeWeight(3);
            fill(255,0,255)
            pop()
        }
}
class Box {
    constructor(x,y,w,h) {
        var box_options = {
            isStatic: false
        }
            this.body = Bodies.rectangle(x,y,w,h,box_options)
            World.add(world,this.body)
        this.body.width = w
        this.body.height = h

    }

    display() {
        var pos = this.body.position
        rectMode(CENTER)
        fill(255)
        rect(pos.x,pos.y,w,h)
    
    }
}


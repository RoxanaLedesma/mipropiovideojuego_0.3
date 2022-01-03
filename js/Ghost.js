class Ghost {
    constructor(x, y, width, height, angle) {
        //Propiedades
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("animations/fantasma1.jpg");
        World.add(world, this.body);

    }
    //Funciones
    moving() {
        this.body.position.x = this.body.position.x + (Math.round(random(1,2))) ;
        this.body.position.y = this.body.position.y + (Math.round(random(1,2)));
    }



    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
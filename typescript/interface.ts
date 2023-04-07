interface Paint{

    drawPoint(): void;
}

interface Paint2D{

    draw2DImage():void;
}

class Circle implements Paint,Paint2D{
    draw2DImage(): void {
        console.log("drawing a 2D");
    }
    drawPoint(): void {
        console.log("drawing a line");
    }
}

var cir = new Circle();
cir.drawPoint();
cir.draw2DImage();
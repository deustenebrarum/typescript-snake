/// <reference path="Canvas.ts" />
/// <reference path="Entity.ts" />

namespace SnakeProject {
    class Part extends Entity {
        constructor(canvas: Canvas, color: Color, point: Point) {
            super(canvas, color, point);
        }
    }

    class Head extends Part {

    }

    class BodyPart extends Part {

    }

    class Snake implements IMovable {
        move(){

        }

    }
}
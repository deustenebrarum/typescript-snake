/// <reference path="Point.ts" />
/// <reference path="Canvas.ts" />
/// <reference path="IMovable.ts" />

namespace SnakeProject {
    export type Color = 'red' | 'blue' | 'green' | 'black' | 'white' | 'brown';

    export class Entity implements IMovable{
        private _position: Point;
        public color: Color;
        private _canvas: Canvas;

        public get position(): Point {
            return this._position;
        }

        public set position(pos: Point) {
            if (pos.x < this._canvas.width && pos.y < this._canvas.height){
                this._position = new Point(pos.x, pos.y);
            }
        }

        constructor(canvas: Canvas, color: Color, point: Point){
            this._canvas = canvas;
            this.color = color;
            this._position = point;
        }

        move(dir: Direction): void {
            if (dir == 'down')
                this.position.sub(new Point(0,1));
            else if (dir == 'up')
                this.position.add(new Point(0,1));
            else if (dir == 'left')
                this.position.sub(new Point(1,0));
            else if (dir == 'right')
                this.position.add(new Point(1,0));
        }
        remove(pos: Point): void {
            this._canvas.deleteObject();
        }
    }
}
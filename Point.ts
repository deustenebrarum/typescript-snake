namespace SnakeProject {
    export class Point {
        private _x: number;
        private _y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public set x(value: number) {
            if (value >= 0) {
                this._x = value;
            }
        }
        public get x(): number {
            return this._x;
        }

        public set y(value: number) {
            if (value >= 0) {
                this._y = value;
            }
        }
        public get y(): number {
            return this._y;
        }
        
        public add(point: Point) {
            return new Point(this.x + point.x, this.y + point.y);
        }
        public sub(point: Point) {
            return new Point(this.x - point.x, this.y - point.y);
        }
    }
}
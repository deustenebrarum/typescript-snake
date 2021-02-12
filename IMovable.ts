
namespace SnakeProject {
    export type Direction = "left" | "right" | "up" | "down";

    export interface IMovable {
        move(dir: Direction): void;
    }
}
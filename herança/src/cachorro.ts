import { Animais } from "./her"

export class Cachorro extends Animais{
    som(): void {
        console.log("AuAu")
    }
     movimento(): void {
        console.log("dog andando")
     }
}
import { Animal } from "./animal";

export class Preguica implements Animal{
    nome: String;
    idade: Number;

    constructor(
        nome:String,
        idade:Number )
     {this.nome = nome
      this.idade = idade}
    som(): void {
        console.log("aaaaAAAAaaaaAAA");
    }
    movimento(): void {
        console.log("Preguiça subindo na árvore");
    }
}
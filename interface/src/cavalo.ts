import { Animal } from "./animal";

export class Cavalo implements Animal{
    nome: String;
    idade: Number;

    constructor(
        nome:String,
        idade:Number )
     {this.nome = nome
      this.idade = idade}
    som(): void {
        console.log("UUUUrÓÓÓÓÓÓirrinnn");
    }
    movimento(): void {
        console.log("cavalo galopando");
    }
}
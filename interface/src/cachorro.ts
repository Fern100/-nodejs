import { Animal } from "./animal";

export class Cachorro implements Animal{
    nome: String;
    idade: Number;

    constructor(
        nome:String,
        idade:Number )
     {this.nome = nome
      this.idade = idade}
    som(): void {
        console.log("AuAu");
    }
    movimento(): void {
        console.log("dog correndo");
    }
}
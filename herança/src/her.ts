export class Animais{
nome:String
idade:Number

constructor(
    nome:String,
    idade:Number
){
    this.nome = nome
    this.idade = idade 
}
 protected som(): void {}
 
 protected movimento(): void {}
}
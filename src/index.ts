let nome:string ="Luiz";

// NUMEROS
let numeros:Array<number> = [1,2,3];
// OR
let numeros2:number[] = [4,5,6];

// LETRAS
let letras:Array<string> = ["a","b","c"];
// OR
let letras2:string[]=["d","e","f"]

let pessoa:{nome:string,idade:number,adulto?:boolean} = {
  idade:30,
  nome:"gabriel",
};

console.log(pessoa.nome,"tem",pessoa.idade, "anos.");

// FUNCAO
function soma(x:number,y:number){
  return x + y;
}

const soma2:(x:number,y:number) => number = (x,y) =>x + y;


// ANY === manda qualquer coisa
// Use ANY apenas em ultimo caso
function showMessage(msg: any){
  return msg;
}

console.log(showMessage([1,2,3]));
console.log(showMessage("OLA"));
console.log(showMessage(1));


// USANDO VOID PARA classifixar uma funcao


function semRetorn(...args:string[]):void{
  console.log(args.join(" "));

}
//Variavel dentro da funcao
const people={
    nome:"GABRIEL",
    sobrenome:"SATO",

    exibirDados():void{
      console.log(this.nome + " " + this.sobrenome);
    }
}

semRetorn("GABRIEL2","SATO2");
people.exibirDados();
export {people};
//readonly faz com que fique impossivel mudar os dados dentro da variavel
const objA:{
  readonly chaveA:string;
  chaveB : string;
}={
  chaveA: "Valor A",//Imutavel por causa do readonly
  chaveB: "Valor B",
};

objA.chaveB = "Outro VAlor";
console.log(objA);


// ? no final declaracao de dados fica como　opcional

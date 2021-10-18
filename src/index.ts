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

objA.chaveB = "Outro Valor";
console.log(objA);


// ? no final declaracao de dados fica como　opcional

enum Cores{
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}

enum Cores{
  ROXO = "ROXO",
  VERDE  = 201,
  ROSA, // CONTINUA O NUMERO DE ONDE PAROU
}

// Cores esta divido mas acaba virando um SO

console.log(Cores.VERMELHO);
console.log(Cores.ROXO);
console.log(Cores[0]);
console.log(Cores);

let x:unknown;
x  = 10;
const y = 800;
if(typeof x === "number") console.log(x+y);

type Idade = number;
type Pessoa = {
  nome:string;
  idade:Idade;
  salario:number;
  corPreferida?:string; // QUANDO TEM ? DEPOIS DA VARIAVEL O DADO E OPCIOCAL
};

type CorRGB = "Vermelho" | "Verde" | "Azul"
type CorCMYK = "Ciano" | "Magenda" | "Amarelo" | "Preto"
type CorPreferida = CorRGB | CorCMYK;


const pessoa_dados: Pessoa = {
  idade:30,
  nome:"Luiz",
  salario:200_000, // == 200000
};

export function setCorPreferida(pessoa:Pessoa,cor:CorPreferida):Pessoa{
  return {...pessoa,corPreferida:cor};
}

console.log(setCorPreferida(pessoa_dados,"Azul"));
console.log(pessoa_dados);

type TemNome = {nome:string};
type TemSobrenome = {sobrenome:string};
type TemIdade = {idade:number};
type Pessoas = TemNome & TemSobrenome & TemIdade;

type AB = "A"|"B";
type AC = "A"|"C";
type AD = "A"|"D";
type Intersecao = AB & AC & AD; //Intersecao == pega o que repete nas variavel mandadas

const peoples:Pessoas={
  nome : "G",
  sobrenome: "S",
  idade : 30,
};

console.log(peoples);

export {peoples};

//Consicional
const body1 = document.querySelector("body");
if (body1) body1.style.background = "red";

//Non-null assertion(!)
const body2 = document.querySelector("body")!;
body2.style.background = "red";

//Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
if (body3) body3.style.background = "red";

//HTMLElement
const input = document.querySelector(".input") as HTMLInputElement;
input.value = "fkjvbsdkuvb.j,vs";
input.focus();



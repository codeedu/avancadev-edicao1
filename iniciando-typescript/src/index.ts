/* ### TIPOS PRIMITIVOS */
//let, const e var
type Primitive = string | boolean | number | bigint | symbol | null | undefined;

/* ### QUALQUER OUTRO TIPO É NÃO PRIMITIVO
 *  - Object (nativo do JavaScript, não deve ser usado para tipagem)
 *  - object (pode ser usado para tipagem)
 *  - Class
 *  - qualquer outra modelagem de object
 */

/* ### TIPOS IMPLÍCITOS E EXPLÍCITOS */

const impl_string = "typescript"; //string
const impl_number = 5.5; //number
const impl_boolean = true; //boolean
const impl_obj = { name: "typescript" }; // {name: string}

const expl_string: string = "typescript";
const expl_number: number = 5.5;
const expl_boolean: boolean = true;
const expl_obj: { name: string } = { name: "typescript" };

/* ### INTERFACES */

interface AddressInterface {
  address: string;
  city: string;
}

//type
interface UserInterface {
  firstName: string;
  lastName: string;
  fullName: () => string;
  address?: AddressInterface;
}


const obj: UserInterface = {
  firstName: "luiz",
  lastName: "diniz",
  fullName: () => {
    return "luiz carlos"; //
  },
  //address não é obrigatório
  //    address: {
  //        address: "rua x",
  //        city: "betim"
  //    }
};

console.log("obj - user", obj);

/* ### OPTIONAL CHAINING (PROPOSTA PARA ECMASCRIPT) */
const city = obj.address?.city;

console.log("city", city);

/* ### NULLISH COALESCING (PROPOSTA PARA ECMASCRIPT) */

const cityLabel = city ?? "sem cidade";

console.log(cityLabel);

/* ### NON-NULL ASSERTION (PROPOSTA PARA ECMASCRIPT) */

function addAddress(obj: UserInterface): void {
  obj.address = { address: "rua x", city: "betim" };
}
addAddress(obj);

const cityNonNull = obj.address!.city;
//obj.address!.city = "valor"
console.log("cityNonNull", cityNonNull);

const num1: number | undefined = undefined;

const num2: number = num1!;

console.log(num2);

/* ### FUNÇÕES
 * Funções recebem parâmetros que podem ser tipados normalmente e
 * pode-se determinar o tipo de retorno com um tipo primitivo ou não-primitivo
 */
function soma(a: number, b: number): number {
  return a + b;
}

//parâmetro lastName é opcional
function fullName(firstName: string, lastName?: string): string {
  return lastName === undefined ? firstName : `${firstName} ${lastName}`;
}

console.log("fullname", fullName("luiz", "diniz"));

/* ### CLASSES
 * O suporte a classes vem antes da ES6.
 * É suportado tudo que é possível fazer com classes na ES6 +
 * os recursos do próprio TypeScript.
 */

interface BaseCrudInterface {
  //@ts-ignore
  create(data: object);
  fetch(filter: object): UserInterface[];
  find(id: string): UserInterface;
}

class UserCrud implements BaseCrudInterface {
   private variavel: string = 'valor';
   private variavel1: number;

  constructor(
    private name: string,
    private email: string,
    private password: string
  ) {
    
  }
  create(data: object) {
    throw new Error("Method not implemented.");
  }
  fetch(filter: object): UserInterface[] {
    throw new Error("Method not implemented.");
  }
  find(id: string): UserInterface {
    throw new Error("Method not implemented.");
  }

}
const user = new UserCrud('', '', '');
//user.

/* ### ANY */

let variavel;

variavel = "luiz carlos";

variavel = 5.5

variavel = true

const variavel2 = 56;

// const variavel3: any = variavel2;
// variavel3.existe('')

(variavel2 as any).existe(' ')

function soma1(a: any, b: any){
    return a+b;
}

//soma1("luiz", "diniz");



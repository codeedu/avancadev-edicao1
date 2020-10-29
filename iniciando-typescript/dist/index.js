var _a;
/* ### QUALQUER OUTRO TIPO É NÃO PRIMITIVO
 *  - Object (nativo do JavaScript, não deve ser usado para tipagem)
 *  - object (pode ser usado para tipagem)
 *  - Class
 *  - qualquer outra modelagem de object
 */
/* ### TIPOS IMPLÍCITOS E EXPLÍCITOS */
var impl_string = "typescript"; //string
var impl_number = 5.5; //number
var impl_boolean = true; //boolean
var impl_obj = { name: "typescript" }; // {name: string}
var expl_string = "typescript";
var expl_number = 5.5;
var expl_boolean = true;
var expl_obj = { name: "typescript" };
var obj = {
    firstName: "luiz",
    lastName: "diniz",
    fullName: function () {
        return "luiz carlos"; //
    }
};
console.log("obj - user", obj);
/* ### OPTIONAL CHAINING (PROPOSTA PARA ECMASCRIPT) */
var city = (_a = obj.address) === null || _a === void 0 ? void 0 : _a.city;
console.log("city", city);
/* ### NULLISH COALESCING (PROPOSTA PARA ECMASCRIPT) */
var cityLabel = city !== null && city !== void 0 ? city : "sem cidade";
console.log(cityLabel);
/* ### NON-NULL ASSERTION (PROPOSTA PARA ECMASCRIPT) */
function addAddress(obj) {
    obj.address = { address: "rua x", city: "betim" };
}
addAddress(obj);
var cityNonNull = obj.address.city;
//obj.address!.city = "valor"
console.log("cityNonNull", cityNonNull);
var num1 = undefined;
var num2 = num1;
console.log(num2);
/* ### FUNÇÕES
 * Funções recebem parâmetros que podem ser tipados normalmente e
 * pode-se determinar o tipo de retorno com um tipo primitivo ou não-primitivo
 */
function soma(a, b) {
    return a + b;
}
//parâmetro lastName é opcional
function fullName(firstName, lastName) {
    return lastName === undefined ? firstName : firstName + " " + lastName;
}
console.log("fullname", fullName("luiz", "diniz"));
var UserCrud = /** @class */ (function () {
    function UserCrud(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.variavel = 'valor';
    }
    UserCrud.prototype.create = function (data) {
        throw new Error("Method not implemented.");
    };
    UserCrud.prototype.fetch = function (filter) {
        throw new Error("Method not implemented.");
    };
    UserCrud.prototype.find = function (id) {
        throw new Error("Method not implemented.");
    };
    return UserCrud;
}());
var user = new UserCrud('', '', '');
//user.
/* ### ANY */
var variavel;
variavel = "luiz carlos";
variavel = 5.5;
variavel = true;
var variavel2 = 56;
// const variavel3: any = variavel2;
// variavel3.existe('')
variavel2.existe(' ');
function soma1(a, b) {
    return a + b;
}
//soma1("luiz", "diniz");
//# sourceMappingURL=index.js.map
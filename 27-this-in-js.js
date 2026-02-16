// This es una palabra reservda del sistema, o osea que NO se puede crear ni funciones ni varibales con
// este nombre.

const reservation = {
    userName: "Brineidy",
    lastName: "Salomón",
    userAge: 19,
    total: 100000,
    isPaid: false,



    // Los objetos puede contener funciones 
    information: function () {
        console.log(`El cliente ${this.userName} reservo y la cantidada a pagar es $ ${this.total}, hasta el
            momento el estado del pago es ${this.isPaid}`);





    }

}

const reservation2 = {
    userName: "Andres",
    lastName: "Duke",
    userAge: 19,
    total: 200000,
    isPaid: true,


    // Los objetos puede contener funciones 
    information: function () {
        console.log(`El cliente ${this.userName} reservo y la cantidada a pagar es $ ${this.total}, hasta el
            momento el estado del pago es ${this.isPaid}`);



}


};

const reservation3 = {
    userName: "messi",
    lastName: "leonel",
    userAge: 34,
    total: 50000,
    isPaid: false,


    // Los objetos puede contener funciones 
    information: () => {
        console.log(`El cliente ${this.userName} reservo y la cantidada a pagar es $ ${this.total}, hasta el
            momento el estado del pago es ${this.isPaid}`);



}


};





// This en este contexto hachace referencia al objeto sobre el cual se esta 
// mandando a llamar
// Es obligatorio usar la funcione de esta manera, por esta referencia al objeto que se esta usando.
reservation.information();
reservation2.information();


// Si se usa arrow function no es capaz de leer los datos del contexto, dando como resultado undefinided

reservation3.information();
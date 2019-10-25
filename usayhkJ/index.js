class Person {

    constructor(fullName, accountNumber) {
        this.fullName = fullName;
        this._accountNumber = accountNumber;
    }


    get accountNumber() {

        return  this._accountNumber.replace(this._accountNumber.slice(2,21) , '****************')
      
    }

}

class Render {

    static render(elem) {
        
        elem.map((elem) => 
        document.getElementById('render').innerHTML +=
         ` <div class="person">Imie ${elem.fullName} nrkonta: ${elem.accountNumber}</div>`
        )
}
}

// let lol = new Person("michał", "1234123412341234123412111");
// console.log(lol.accountNumber)
 

const lists =[new Person("michał", "1234123412341234123412111"),
                new Person("michał", "9994123412341234123412111"),
                new Person("michał", "1234123412341234123412111"),
                new Person("michał", "1234123412341234123412111"),
                new Person("michał", "1234123412341234123412111"),
                new Person("michał", "1234123412341234123412111")];

console.log(lists[0]);

console.log();

Render.render(lists)
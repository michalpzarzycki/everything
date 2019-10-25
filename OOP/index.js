

// var student = {
// name: 'Michał',
// adress: 'Szeroka',
// student_id_number: 12345,
// profile: 'coś',
// display_full_info: function() {
//     console.log(`Imię ;${this.name}  Adres: ${this.adress} ID: ${this.student_id_number} Profil: ${this.profile}`);
// },
// change_id: function(v) {
//     this.student_id_number = v;
// }


// }
// var student_2 = {
//     name: 'Mateusz',
//     adress: 'Zaspa',
//     student_id_number: 145,
//     profile: 'lol',
//     display_full_info: function() {
//         console.log(`Imię ;${this.name}  Adres: ${this.adress} ID: ${this.student_id_number} Profil: ${this.profile}`);
//     },
//     change_id: function(v) {
//          this.student_id_number = v;
//     }


//     }


// student.display_full_info();
// student.change_id(88)
// student.display_full_info();

// student_2.display_full_info();
// student_2.change_id(88)
// console.log(student_2.name);




// var studentList = [ new STUDENT('Magda', 'Gdansk', 1),
//  new STUDENT('Magda', 'Gdansk', 1),
//  new STUDENT('Magda', 'Gdansk', 1),
// new STUDENT('Magda', 'Gdansk', 1),
//  new STUDENT('Magda', 'Gdansk', 1),
//  new STUDENT('Magda', 'Gdansk', 1),
// new STUDENT('Magda', 'Gdansk', 1),
//  new STUDENT('Magda', 'Gdansk', 1),
//  new STUDENT('Magda', 'Gdansk', 1),
// new STUDENT('Magda', 'Gdansk', 1)];

// var STUDENT = {
//      name: '',
//      adress: '',
//      student_id_number:'',
//      profile: '',

//      setData: function(a, b, c, d="STUDENT" ) {
//      this.name = a,
//      this.adress = b,
//      this.student_id_number = c,
//      this.profile = d


// }




// }

// function STUDENT(name, adress, student_id_number, profile) {
//     this.name = name;
//     this.adress = adress;
//     this.student_id_number = student_id_number;
//     this.profile = "STUDENT";
//     this.changeId = function(v) {
//        this.student_id_number *= v;
//     };
//    this.changeId(3);
// }

// STUDENT.prototype.newID = function(newID) {
//     this.student_id_number = newID;
// }

class Pearson {
    constructor(name, adress, id) {
       this.name = name;
       this.adress = adress;
       this.id = id; 
    }
    
}
class Student extends Pearson  {
    constructor(name, adress, id) {
        super(name, adress, id);
        this.role = 'student';
        this.age = 15;
    }
    display_full_info() {
console.log( this.name + this.adress + this.id)


    }
}

class Teacher extends Pearson{
    constructor(name, adress, id) {
        super(name, adress, id);
        this.role = 'teacher'
    }
}
// function Pearson(name, adress, id) {
//     this.name = name;
//     this.adress = adress;
//     this.id = id;
// }
// function Student(name, adress, id) {
//     Pearson.call(this, name, adress, id);
//     this.role = 'student';

// }

// function Teacher(name, adress, id) {
//     Pearson.call(this, name, adress, id);
//     this.role = 'teacher';

// }
// Student.prototype = Object.create(Pearson.prototype);
// Student.prototype.constructor = Student;
// Teacher.prototype = Object.create(Pearson.prototype);
// Teacher.prototype.constructor = Teacher;

var student1 = new Student("Kamil", 1203)



var studentList = [
    new Student('Magda', 'Gdansk', 1),
    new Student('Maaaagda', 'Gdansk', 1),
    new Student('Magda', 'Gdansk', 1),
    new Student('sdfsdfd', 'Gdansk', 1),
    new Student('Magda', 'Gdansk', 1),
    new Teacher('Magda', 'Gdansk', 1),
    new Student('Magda', 'Gdansk', 1),
    new Student('Magda', 'Gdansk', 1),
    new Student('Magda', 'Gdansk', 1),
    new Teacher('Magda', 'Gdansk', 1)
];

var o_count = document.querySelector('#display');
var nameHTML = `<div class="box">
<div class="item" >IMIE</div>
<div class="item" >  ADRES</div>
<div class="item" >  ID</div>
<div class="item" >  PROFIL</div>
</div>`;

// studentList.map(x => x.changeId());


// var student1 = new STUDENT('Magda', 'Gdansk', 1);
// var student2 = new STUDENT('Magda', 'Gdansk', 1);
// var student3 = new STUDENT('Magda', 'Gdansk', 1);
// var student4 =new STUDENT('Magda', 'Gdansk', 1);
// var student5 = new STUDENT('Magda', 'Gdansk', 1);
// var student6 = new STUDENT('Magda', 'Gdansk', 1);
// var student7 = new STUDENT('Magda', 'Gdansk', 1);
// var student8 = new STUDENT('Magda', 'Gdansk', 1);
// var student9 = new STUDENT('Magda', 'Gdansk', 1);
// var student10 = new STUDENT('Magda', 'Gdansk', 1);
// student1.setData('Magda', 'Gdansk', 1);
// student2.setData('KAmil', 'Gdynia', 13);
// student3.setData('Mikolaj', 'Krakow', 21);
// student4.setData('Ewa', 'Poznan', 12);
// student5.setData('Iwona', 'Warszawa', 41);
// student6.setData('JAnek', 'Gdansk', 51);
// student7.setData('Piotr', 'sss', 71);
// student8.setData('Kinga', 'ddd', 81);
// student9.setData('Wera', 'fff', 19);
// student10.setData('MagUlada', 'Gdansgggk', 1);
// student1.setData('Magda', 'Gdansk', 1);
// student2.setData('KAmil', 'Gdynia', 13);
// student3.setData('Mikolaj', 'Krakow', 21);
// student4.setData('Ewa', 'Poznan', 12);
// student5.setData('Iwona', 'Warszawa', 41);
// student6.setData('JAnek', 'Gdansk', 51);
// student7.setData('Piotr', 'sss', 71);
// student8.setData('Kinga', 'ddd', 81);
// student9.setData('Wera', 'fff', 19);
// student10.setData('MagUlada', 'Gdansgggk', 1);
// studentList.push(student1);
// studentList.push(student2);
// studentList.push(student3);
// studentList.push(student4);
// studentList.push(student5);
// studentList.push(student6);
// studentList.push(student7);
// studentList.push(student8);
// studentList.push(student9);
// studentList.push(student10);



// var o_count = document.querySelector('#display');
// var nameHTML = `<div class="box">
// <div class="item" >IMIE</div>
// <div class="item" >  ADRES</div>
// <div class="item" >  ID</div>
// <div class="item" >  PROFIL</div>
// </div>`;


// studentList.map(element => {



//     nameHTML += `<div class="box">
//         <div class="item" > ${element.name}</div>
//         <div class="item" >  ${element.adress}</div>
//         <div class="item" >  ${element.id}</div>
//         <div class="item" >  ${element.role}</div>
//  </div>`


// })



// o_count.innerHTML = nameHTML;


studentList.map(element => {



    nameHTML += `<div class="box">
        <div class="item" > ${element.name}</div>
        <div class="item" >  ${element.adress}</div>
        <div class="item" >  ${element.id}</div>
        <div class="item" >  ${element.role}</div>
 </div>`


})



o_count.innerHTML = nameHTML;







studentList.display_full_info();






















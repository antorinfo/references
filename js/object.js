// access the property of an object
objectName.key; //person.age
or;
objectName['key']; // person['age']

// add new props
objectName.newPropName = value;
//delete
delete person.age;

// bind,call,apply
let person = {
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

let person1 = {
    firstName: 'Mehedi Hasan',
    lastName: 'Antor'
}

person.fullName.call(person1)
// Mehedi Hasan Antor

// dynamic props in obj
let dynamic = 'value';
let user = {
    id: 1,
    [dynamic]: 'other value'
}
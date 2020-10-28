// ACCESS THE PROP OF AN OBJ
objectName.key; or objectName['key'];

// ADD NEW PROPS
objectName.newPropName = value;
//delete
delete person.age;

let key = Object.keys(numbers); // ['one','two']
let value = Object.values(numbers); // [1,2]
let entry = Object.entries(numbers) // [['one': 1],['two': 2]]

// BIND,CALL,APPLY METHOD
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

// DYNAMIC PROPS IN OBJ
let dynamic = 'value';
let user = {
    id: 1,
    [dynamic]: 'other value'
}

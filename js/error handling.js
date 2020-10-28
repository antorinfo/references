// How to handle it?
// In javascript there are four keywords to handle an error. 

// 1.The try statement lets you test a block of code for errors.
// 2.The catch statement lets you handle the error 
// 3.The throw statement lets you create custom errors. 
// 4.The finally statement lets you execute code, after try and catch, regardless of the result

// TRY STATEMENT
// The try statement allows you to define a block of code to be tested for errors while it is being executed.

try {
    // write some code here
}

catch {
    // it will be executed when some errors occure in the try block
}

// THROW STATEMENT
// The throw statement allows you to create a custom error message.means,if you are using throw statement with the custom message in the tryh block,then in the catch block err will be the custom message

try {
    if(condition) throw "Custom Message"
}

catch(err) {
    // here 'err' will be the custom message
}

// example
let x = 10;
try {
    if(x == 10) throw "X is 10"
}

catch(err) {
    alert("Custom Message" + err)
}

// FINALLY STATEMENT
// The finally statement lets you execute code after try and catch,regardless of the result. means,finally dosen't care what's happening on the try and catch blocks. It will be executed.
try {
    // write some code here
} catch(err) {
    // it will be executed when some errors occure in the try block
} finally {
    // it will execute all the time
}

// example 
try {
    ablert('This is an error')
}
catch(err) {
    alert('Error:' + err)
}
finally {
    console.log('This is Finally Block');
}

// output-
// Error: ReferenceError: ablert is not defined
// in console-
// 'This is Finally Block'
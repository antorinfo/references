// A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states.

//Fullfilled: onFullfilled() will be called (eg: resolve() was called)

//Rejected: onRejected() will be called (eg: reject() was called)

//Pending: not yet fullfilled or rejected

// Syntax
//we use .then() method to get the promise value;

let promise = new Promise((resolve, reject) => {
  resolve(); //when successful
  reject(); //when error
});

promise
  .then(function (val) {
    // executed when promise resolved
  })
  .catch(function (err) {
    // executed when promise rejected
  });

// GET PROMISE VALUE
let x = 5;
let promise = new Promise((resolve, reject) => {
  if (x == 5) {
    resolve(x);
  } else {
    reject('Promise Rejected');
  }
});
//get promise data
promise
  .then(function (val) {
    console.log(val); //5
  })
  .catch(function (err) {
    console.log(err); // 'Promise Rejected'
  });

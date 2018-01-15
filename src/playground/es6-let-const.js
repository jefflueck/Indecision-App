// var nameVar = 'Jeff';
// var nameVar = 'Mike';
// console.log('nameVar', nameVar);
//
// let nameLet = 'Jen'
// let nameLet = 'Julie';
// console.log('nameLet', nameLet);
//
// const nameConst = 'Frank';
// const nameConst = 'Gunther';
// console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Jeff Lueck';

if(fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);

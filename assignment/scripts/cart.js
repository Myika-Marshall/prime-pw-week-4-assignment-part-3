console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
  console.log('in addItem');
  basket.push(item)
  if (basket.length >= [0]){
  return true;}
}

addItem('Kleenex');
addItem('String Cheese');
addItem('Bentgo Boxes');

console.log('I have these items in my basket:', basket);

function listItems(){
  console.log('in listItems');
  for (let i = 0; i< basket.length; i++){
    console.log('in the loop', basket[i]);
  }
}

console.log('Looping my basket items:');
listItems()

function empty(){
  console.log('in empty');
  basket.length = 0;
}


empty ()

console.log('What is in my array now?', basket);

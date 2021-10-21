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
console.log(addItem());

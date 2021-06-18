const PI = 3.14159;
const food_items = ['potatoes', 'carrots', 'bread', 'grapes'];
const items = food_items.map((item) => `<li>${item}</li>`);

console.log(items);



doubleNum = (x) => x * 2;
c = (r) => 2 * r * PI;
a = (r) => r * r * PI;

const nums = [1,2,3,4,5,6,7];
const double_nums = nums.map((num) => doubleNum(num));
const circumferences = nums.map((num) => c(num));
const areas = nums.map((num) => a(num));
console.log(double_nums);
console.log(circumferences);
console.log(areas);


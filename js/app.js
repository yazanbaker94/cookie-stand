'use strict';

let Seattle={
  minCustomer : 23,
  maxCustomer : 65,
  avgCookie : 6.3,

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return this.customersPerHour(Seattle.minCustomer, Seattle.maxCustomer) * this.avgCookie;

  },


};
let body = document.getElementById('salesData2');
let title = document.getElementById('title');

let h1 = document.createElement('h1');
document.getElementById('title').appendChild(h1);
h1.innerText = "Seattle";

let unorderedList = document.createElement('ul');
document.getElementById('salesData2').appendChild(unorderedList);

let sixAm = document.createElement('li');
let sevenAm = document.createElement('li');
let eightAm = document.createElement('li');
let nineAm = document.createElement('li');
let tenAm = document.createElement('li');
let elevenAm = document.createElement('li');
let twelveAm = document.createElement('li');
let onePm = document.createElement('li');
let twoPm = document.createElement('li');
let threePm = document.createElement('li');
let fourPm = document.createElement('li');
let fivePm = document.createElement('li');
let sixPm = document.createElement('li');
let sevenPm = document.createElement('li');
let totalLi = document.createElement('li');


unorderedList.appendChild(sixAm);
unorderedList.appendChild(sevenAm);
unorderedList.appendChild(eightAm);
unorderedList.appendChild(nineAm);
unorderedList.appendChild(tenAm);
unorderedList.appendChild(elevenAm);
unorderedList.appendChild(twelveAm);
unorderedList.appendChild(onePm);
unorderedList.appendChild(twoPm);
unorderedList.appendChild(threePm);
unorderedList.appendChild(fourPm);
unorderedList.appendChild(fivePm);
unorderedList.appendChild(sixPm);
unorderedList.appendChild(sevenPm);
unorderedList.appendChild(totalLi);


const cookiesArray = [Math.floor(Seattle.cookiesPurchasedPerHour()), Math.floor(Seattle.cookiesPurchasedPerHour()),
  Math.floor(Seattle.cookiesPurchasedPerHour()),Math.floor(Seattle.cookiesPurchasedPerHour()),
  Math.floor(Seattle.cookiesPurchasedPerHour()),Math.floor(Seattle.cookiesPurchasedPerHour()),
  Math.floor(Seattle.cookiesPurchasedPerHour()),Math.floor(Seattle.cookiesPurchasedPerHour()),
  Math.floor(Seattle.cookiesPurchasedPerHour()),Math.floor(Seattle.cookiesPurchasedPerHour()),
  Math.floor(Seattle.cookiesPurchasedPerHour()),Math.floor(Seattle.cookiesPurchasedPerHour()),
  Math.floor(Seattle.cookiesPurchasedPerHour()),Math.floor(Seattle.cookiesPurchasedPerHour())];


sixAm.innerHTML = ('6am: ' + cookiesArray[0] + ' cookies<br>');
sevenAm.innerHTML = ('7am: ' + cookiesArray[1] + ' cookies<br>');
eightAm.innerHTML = ('8am: ' + cookiesArray[2] + ' cookies<br>');
nineAm.innerHTML = ('9am: ' + cookiesArray[3] + ' cookies<br>');
tenAm.innerHTML = ('10am: ' + cookiesArray[4] + ' cookies<br>');
elevenAm.innerHTML = ('11am: ' + cookiesArray[5] + ' cookies<br>');
twelveAm.innerHTML = ('12am: ' + cookiesArray[6] + ' cookies<br>');
onePm.innerHTML = ('1pm: ' + cookiesArray[7] + ' cookies<br>');
twoPm.innerHTML = ('2pm: ' + cookiesArray[8] + ' cookies<br>');
threePm.innerHTML = ('3pm: ' + cookiesArray[9] + ' cookies<br>');
fourPm.innerHTML = ('4pm: ' + cookiesArray[10] + ' cookies<br>');
fivePm.innerHTML = ('5pm: ' + cookiesArray[11] + ' cookies<br>');
sixPm.innerHTML = ('6pm: ' + cookiesArray[12] + ' cookies<br>');
sevenPm.innerHTML = ('7pm: ' + cookiesArray[13] + ' cookies<br>');


let total = cookiesArray[0] + cookiesArray[1] + cookiesArray[3] + cookiesArray[4] + cookiesArray[5] + cookiesArray[6]
+ cookiesArray[7] + cookiesArray[8] + cookiesArray[9] + cookiesArray[10] + cookiesArray[11] + cookiesArray[12] + cookiesArray[13];
console.log(total);
totalLi.innerHTML = ("Total: " + total + " cookies");

// ----------------------------------------------------------------------------------------------------------------
// PART TWO
//-----------------------------------------------------------------------------------------------------------


let Tokyo={
  minCustomer : 3,
  maxCustomer : 24,
  avgCookie : 1.2,

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return this.customersPerHour(Tokyo.minCustomer, Tokyo.maxCustomer) * this.avgCookie;
  }

};


let a = document.write('Tokyo');
let body2 = document.getElementById('salesData2');
let unorderedList2 = document.createElement('ul');
document.getElementById('salesData2').appendChild(unorderedList2);


let sixAm2 = document.createElement('li');
let sevenAm2 = document.createElement('li');
let eightAm2 = document.createElement('li');
let nineAm2 = document.createElement('li');
let tenAm2 = document.createElement('li');
let elevenAm2 = document.createElement('li');
let twelveAm2 = document.createElement('li');
let onePm2 = document.createElement('li');
let twoPm2 = document.createElement('li');
let threePm2 = document.createElement('li');
let fourPm2 = document.createElement('li');
let fivePm2 = document.createElement('li');
let sixPm2 = document.createElement('li');
let sevenPm2 = document.createElement('li');
let totalLi2 = document.createElement('li');


unorderedList2.appendChild(sixAm2);
unorderedList2.appendChild(sevenAm2);
unorderedList2.appendChild(eightAm2);
unorderedList2.appendChild(nineAm2);
unorderedList2.appendChild(tenAm2);
unorderedList2.appendChild(elevenAm2);
unorderedList2.appendChild(twelveAm2);
unorderedList2.appendChild(onePm2);
unorderedList2.appendChild(twoPm2);
unorderedList2.appendChild(threePm2);
unorderedList2.appendChild(fourPm2);
unorderedList2.appendChild(fivePm2);
unorderedList2.appendChild(sixPm2);
unorderedList2.appendChild(sevenPm2);
unorderedList2.appendChild(totalLi2);


const cookiesArray2 = [Math.floor(Tokyo.cookiesPurchasedPerHour()), Math.floor(Tokyo.cookiesPurchasedPerHour()),
  Math.floor(Tokyo.cookiesPurchasedPerHour()),Math.floor(Tokyo.cookiesPurchasedPerHour()),
  Math.floor(Tokyo.cookiesPurchasedPerHour()),Math.floor(Tokyo.cookiesPurchasedPerHour()),
  Math.floor(Tokyo.cookiesPurchasedPerHour()),Math.floor(Tokyo.cookiesPurchasedPerHour()),
  Math.floor(Tokyo.cookiesPurchasedPerHour()),Math.floor(Tokyo.cookiesPurchasedPerHour()),
  Math.floor(Tokyo.cookiesPurchasedPerHour()),Math.floor(Tokyo.cookiesPurchasedPerHour()),
  Math.floor(Tokyo.cookiesPurchasedPerHour()),Math.floor(Tokyo.cookiesPurchasedPerHour())];


sixAm2.innerHTML = ('6am: ' + cookiesArray2[0] + ' cookies<br>');
sevenAm2.innerHTML = ('7am: ' + cookiesArray2[1] + ' cookies<br>');
eightAm2.innerHTML = ('8am: ' + cookiesArray2[2] + ' cookies<br>');
nineAm2.innerHTML = ('9am: ' + cookiesArray2[3] + ' cookies<br>');
tenAm2.innerHTML = ('10am: ' + cookiesArray2[4] + ' cookies<br>');
elevenAm2.innerHTML = ('11am: ' + cookiesArray2[5] + ' cookies<br>');
twelveAm2.innerHTML = ('12am: ' + cookiesArray2[6] + ' cookies<br>');
onePm2.innerHTML = ('1pm: ' + cookiesArray2[7] + ' cookies<br>');
twoPm2.innerHTML = ('2pm: ' + cookiesArray2[8] + ' cookies<br>');
threePm2.innerHTML = ('3pm: ' + cookiesArray2[9] + ' cookies<br>');
fourPm2.innerHTML = ('4pm: ' + cookiesArray2[10] + ' cookies<br>');
fivePm2.innerHTML = ('5pm: ' + cookiesArray2[11] + ' cookies<br>');
sixPm2.innerHTML = ('6pm: ' + cookiesArray2[12] + ' cookies<br>');
sevenPm2.innerHTML = ('7pm: ' + cookiesArray2[13] + ' cookies<br>');


let total2 = cookiesArray2[0] + cookiesArray2[1] + cookiesArray2[3] + cookiesArray2[4] + cookiesArray2[5] + cookiesArray2[6]
+ cookiesArray2[7] + cookiesArray2[8] + cookiesArray2[9] + cookiesArray2[10] + cookiesArray2[11] + cookiesArray2[12] + cookiesArray2[13];
console.log(total2);
totalLi2.innerHTML = ("Total: " + total2 + " cookies");









//---------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// PART THREE
//-----------------------------------------------------------------------------------------------------------

let Dubai={
  minCustomer : 11,
  maxCustomer : 38,
  avgCookie : 3.7,

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return this.customersPerHour(Dubai.minCustomer, Dubai.maxCustomer) * this.avgCookie;
  }

};

let body3 = document.getElementById('salesData2');
let unorderedList3 = document.createElement('ul');
document.getElementById('salesData2').appendChild(unorderedList3);

let sixAm3 = document.createElement('li');
let sevenAm3 = document.createElement('li');
let eightAm3 = document.createElement('li');
let ninePm3 = document.createElement('li');
let tenAm3 = document.createElement('li');
let elevenAm3 = document.createElement('li');
let twelveAm3 = document.createElement('li');
let onePm3 = document.createElement('li');
let twoPm3 = document.createElement('li');
let threePm3 = document.createElement('li');
let fourPm3 = document.createElement('li');
let fivePm3 = document.createElement('li');
let sixPm3 = document.createElement('li');
let sevenPm3 = document.createElement('li');
let totalLi3 = document.createElement('li');


unorderedList3.appendChild(sixAm3);
unorderedList3.appendChild(sevenAm3);
unorderedList3.appendChild(eightAm3);
unorderedList3.appendChild(eightAm3);
unorderedList3.appendChild(tenAm3);
unorderedList3.appendChild(elevenAm3);
unorderedList3.appendChild(twelveAm3);
unorderedList3.appendChild(onePm3);
unorderedList3.appendChild(twoPm3);
unorderedList3.appendChild(threePm3);
unorderedList3.appendChild(fourPm3);
unorderedList3.appendChild(fivePm3);
unorderedList3.appendChild(sixPm3);
unorderedList3.appendChild(sevenPm3);
unorderedList3.appendChild(totalLi3);


const cookiesArray3 = [Math.floor(Dubai.cookiesPurchasedPerHour()), Math.floor(Dubai.cookiesPurchasedPerHour()),
  Math.floor(Dubai.cookiesPurchasedPerHour()),Math.floor(Dubai.cookiesPurchasedPerHour()),
  Math.floor(Dubai.cookiesPurchasedPerHour()),Math.floor(Dubai.cookiesPurchasedPerHour()),
  Math.floor(Dubai.cookiesPurchasedPerHour()),Math.floor(Dubai.cookiesPurchasedPerHour()),
  Math.floor(Dubai.cookiesPurchasedPerHour()),Math.floor(Dubai.cookiesPurchasedPerHour()),
  Math.floor(Dubai.cookiesPurchasedPerHour()),Math.floor(Dubai.cookiesPurchasedPerHour()),
  Math.floor(Dubai.cookiesPurchasedPerHour()),Math.floor(Dubai.cookiesPurchasedPerHour())];


sixAm3.innerHTML = ('6am: ' + cookiesArray3[0] + ' cookies<br>');
sevenAm3.innerHTML = ('7am: ' + cookiesArray3[1] + ' cookies<br>');
eightAm3.innerHTML = ('8am: ' + cookiesArray3[2] + ' cookies<br>');
eightAm3.innerHTML = ('9am: ' + cookiesArray3[3] + ' cookies<br>');
tenAm3.innerHTML = ('10am: ' + cookiesArray3[4] + ' cookies<br>');
elevenAm3.innerHTML = ('11am: ' + cookiesArray3[5] + ' cookies<br>');
twelveAm3.innerHTML = ('12am: ' + cookiesArray3[6] + ' cookies<br>');
onePm3.innerHTML = ('1pm: ' + cookiesArray3[7] + ' cookies<br>');
twoPm3.innerHTML = ('2pm: ' + cookiesArray3[8] + ' cookies<br>');
threePm3.innerHTML = ('3pm: ' + cookiesArray3[9] + ' cookies<br>');
fourPm3.innerHTML = ('4pm: ' + cookiesArray3[10] + ' cookies<br>');
fivePm3.innerHTML = ('5pm: ' + cookiesArray3[11] + ' cookies<br>');
sixPm3.innerHTML = ('6pm: ' + cookiesArray3[12] + ' cookies<br>');
sevenPm3.innerHTML = ('7pm: ' + cookiesArray3[13] + ' cookies<br>');


let total3 = cookiesArray3[0] + cookiesArray3[1] + cookiesArray3[3] + cookiesArray3[4] + cookiesArray3[5] + cookiesArray3[6]
+ cookiesArray3[7] + cookiesArray3[8] + cookiesArray3[9] + cookiesArray3[10] + cookiesArray3[11] + cookiesArray3[12] + cookiesArray3[13];
console.log(total3);
totalLi3.innerHTML = ("Total: " + total3 + " cookies");

//---------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// PART FOUR
//-----------------------------------------------------------------------------------------------------------



let Paris={
  minCustomer : 20,
  maxCustomer : 38,
  avgCookie : 2.3,

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return this.customersPerHour(Paris.minCustomer, Paris.maxCustomer) * this.avgCookie;
  }

};
let body4 = document.getElementById('salesData2');
let unorderedList4 = document.createElement('ul');
document.getElementById('salesData2').appendChild(unorderedList4);

let sixAm4 = document.createElement('li');
let sevenAm4 = document.createElement('li');
let eightAm4 = document.createElement('li');
let nineAm4 = document.createElement('li');
let tenAm4 = document.createElement('li');
let elevenAm4 = document.createElement('li');
let twelveAm4 = document.createElement('li');
let onePm4 = document.createElement('li');
let twoPm4 = document.createElement('li');
let threePm4 = document.createElement('li');
let fourPm4 = document.createElement('li');
let fivePm4 = document.createElement('li');
let sixPm4 = document.createElement('li');
let sevenPm4 = document.createElement('li');
let totalLi4 = document.createElement('li');


unorderedList4.appendChild(sixAm4);
unorderedList4.appendChild(sevenAm4);
unorderedList4.appendChild(eightAm4);
unorderedList4.appendChild(eightAm4);
unorderedList4.appendChild(tenAm4);
unorderedList4.appendChild(elevenAm4);
unorderedList4.appendChild(twelveAm4);
unorderedList4.appendChild(onePm4);
unorderedList4.appendChild(twoPm4);
unorderedList4.appendChild(threePm4);
unorderedList4.appendChild(fourPm4);
unorderedList4.appendChild(fivePm4);
unorderedList4.appendChild(sixPm4);
unorderedList4.appendChild(sevenPm4);
unorderedList4.appendChild(totalLi4);


const cookiesArray4 = [Math.floor(Paris.cookiesPurchasedPerHour()), Math.floor(Paris.cookiesPurchasedPerHour()),
  Math.floor(Paris.cookiesPurchasedPerHour()),Math.floor(Paris.cookiesPurchasedPerHour()),
  Math.floor(Paris.cookiesPurchasedPerHour()),Math.floor(Paris.cookiesPurchasedPerHour()),
  Math.floor(Paris.cookiesPurchasedPerHour()),Math.floor(Paris.cookiesPurchasedPerHour()),
  Math.floor(Paris.cookiesPurchasedPerHour()),Math.floor(Paris.cookiesPurchasedPerHour()),
  Math.floor(Paris.cookiesPurchasedPerHour()),Math.floor(Paris.cookiesPurchasedPerHour()),
  Math.floor(Paris.cookiesPurchasedPerHour()),Math.floor(Paris.cookiesPurchasedPerHour())];


sixAm4.innerHTML = ('6am: ' + cookiesArray4[0] + ' cookies<br>');
sevenAm4.innerHTML = ('7am: ' + cookiesArray4[1] + ' cookies<br>');
eightAm4.innerHTML = ('8am: ' + cookiesArray4[2] + ' cookies<br>');
eightAm4.innerHTML = ('9am: ' + cookiesArray4[3] + ' cookies<br>');
tenAm4.innerHTML = ('10am: ' + cookiesArray4[4] + ' cookies<br>');
elevenAm4.innerHTML = ('11am: ' + cookiesArray4[5] + ' cookies<br>');
twelveAm4.innerHTML = ('12am: ' + cookiesArray4[6] + ' cookies<br>');
onePm4.innerHTML = ('1pm: ' + cookiesArray4[7] + ' cookies<br>');
twoPm4.innerHTML = ('2pm: ' + cookiesArray4[8] + ' cookies<br>');
threePm4.innerHTML = ('3pm: ' + cookiesArray4[9] + ' cookies<br>');
fourPm4.innerHTML = ('4pm: ' + cookiesArray4[10] + ' cookies<br>');
fivePm4.innerHTML = ('5pm: ' + cookiesArray4[11] + ' cookies<br>');
sixPm4.innerHTML = ('6pm: ' + cookiesArray4[12] + ' cookies<br>');
sevenPm4.innerHTML = ('7pm: ' + cookiesArray4[13] + ' cookies<br>');


let total4 = cookiesArray4[0] + cookiesArray4[1] + cookiesArray4[3] + cookiesArray4[4] + cookiesArray4[5] + cookiesArray4[6]
+ cookiesArray4[7] + cookiesArray4[8] + cookiesArray4[9] + cookiesArray4[10] + cookiesArray4[11] + cookiesArray4[12] + cookiesArray4[13];
console.log(total4);
totalLi4.innerHTML = ("Total: " + total4 + " cookies");





//---------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// PART FIVE
//-----------------------------------------------------------------------------------------------------------



let Lima={
  minCustomer : 2,
  maxCustomer : 16,
  avgCookie : 4.6,

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return this.customersPerHour(Lima.minCustomer, Lima.maxCustomer) * this.avgCookie;
  }
};
let body5 = document.getElementById('salesData2');
let unorderedList5 = document.createElement('ul');
document.getElementById('salesData2').appendChild(unorderedList5);

let sixAm5 = document.createElement('li');
let sevenAm5 = document.createElement('li');
let eightAm5 = document.createElement('li');
let nineAm5 = document.createElement('li');
let tenAm5 = document.createElement('li');
let elevenAm5 = document.createElement('li');
let twelveAm5 = document.createElement('li');
let onePm5 = document.createElement('li');
let twoPm5 = document.createElement('li');
let threePm5 = document.createElement('li');
let fourPm5 = document.createElement('li');
let fivePm5 = document.createElement('li');
let sixPm5 = document.createElement('li');
let sevenPm5 = document.createElement('li');
let totalLi5 = document.createElement('li');


unorderedList5.appendChild(sixAm5);
unorderedList5.appendChild(sevenAm5);
unorderedList5.appendChild(eightAm5);
unorderedList5.appendChild(eightAm5);
unorderedList5.appendChild(tenAm5);
unorderedList5.appendChild(elevenAm5);
unorderedList5.appendChild(twelveAm5);
unorderedList5.appendChild(onePm5);
unorderedList5.appendChild(twoPm5);
unorderedList5.appendChild(threePm5);
unorderedList5.appendChild(fourPm5);
unorderedList5.appendChild(fivePm5);
unorderedList5.appendChild(sixPm5);
unorderedList5.appendChild(sevenPm5);
unorderedList5.appendChild(totalLi5);


const cookiesArray5 = [Math.floor(Lima.cookiesPurchasedPerHour()), Math.floor(Lima.cookiesPurchasedPerHour()),
  Math.floor(Lima.cookiesPurchasedPerHour()),Math.floor(Lima.cookiesPurchasedPerHour()),
  Math.floor(Lima.cookiesPurchasedPerHour()),Math.floor(Lima.cookiesPurchasedPerHour()),
  Math.floor(Lima.cookiesPurchasedPerHour()),Math.floor(Lima.cookiesPurchasedPerHour()),
  Math.floor(Lima.cookiesPurchasedPerHour()),Math.floor(Lima.cookiesPurchasedPerHour()),
  Math.floor(Lima.cookiesPurchasedPerHour()),Math.floor(Lima.cookiesPurchasedPerHour()),
  Math.floor(Lima.cookiesPurchasedPerHour()),Math.floor(Lima.cookiesPurchasedPerHour())];


sixAm5.innerHTML = ('6am: ' + cookiesArray5[0] + ' cookies<br>');
sevenAm5.innerHTML = ('7am: ' + cookiesArray5[1] + ' cookies<br>');
eightAm5.innerHTML = ('8am: ' + cookiesArray5[2] + ' cookies<br>');
eightAm5.innerHTML = ('9am: ' + cookiesArray5[3] + ' cookies<br>');
tenAm5.innerHTML = ('10am: ' + cookiesArray5[4] + ' cookies<br>');
elevenAm5.innerHTML = ('11am: ' + cookiesArray5[5] + ' cookies<br>');
twelveAm5.innerHTML = ('12am: ' + cookiesArray5[6] + ' cookies<br>');
onePm5.innerHTML = ('1pm: ' + cookiesArray5[7] + ' cookies<br>');
twoPm5.innerHTML = ('2pm: ' + cookiesArray5[8] + ' cookies<br>');
threePm5.innerHTML = ('3pm: ' + cookiesArray5[9] + ' cookies<br>');
fourPm5.innerHTML = ('4pm: ' + cookiesArray5[10] + ' cookies<br>');
fivePm5.innerHTML = ('5pm: ' + cookiesArray5[11] + ' cookies<br>');
sixPm5.innerHTML = ('6pm: ' + cookiesArray5[12] + ' cookies<br>');
sevenPm5.innerHTML = ('7pm: ' + cookiesArray5[13] + ' cookies<br>');


let total5 = cookiesArray5[0] + cookiesArray5[1] + cookiesArray5[3] + cookiesArray5[4] + cookiesArray5[5] + cookiesArray5[6]
+ cookiesArray5[7] + cookiesArray5[8] + cookiesArray5[9] + cookiesArray5[10] + cookiesArray5[11] + cookiesArray5[12] + cookiesArray5[13];
console.log(total5);
totalLi5.innerHTML = ("Total: " + total5 + " cookies");





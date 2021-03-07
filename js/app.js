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
let body = document.getElementById('salesData');
let unorderedList = document.createElement('ul');
let salesSeattle = document.createElement('li');
salesSeattle.innerText('7pm');

document.getElementById('salesData').appendChild(unorderedList);
document.unorderedList.appendChild(salesSeattle);


let resultsSeattle = [Seattle.cookiesPurchasedPerHour()];



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
let resultsTokyo = [Tokyo.cookiesPurchasedPerHour()];



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
let resultsDubai = [Dubai.cookiesPurchasedPerHour()];



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
let resultsParis = [Paris.cookiesPurchasedPerHour()];



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
let resultsLima = [Lima.cookiesPurchasedPerHour()];




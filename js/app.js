'use strict';

let timeOfOpeningHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function City(cityName, minCustomer, maxCustomer, avgCookie, totalCookies) {
  this.cityName = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.resultEmptyArray = [];
  this.totalCookies = 0;
}

let Seattle= new City('Seattle', 23, 65, 6.3);

City.prototype.customersPerHour = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

City.prototype.cookiesPurchasedPerHour = function() {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookie);

  };

  City.prototype.endResults = function() {
    for(let i=0; i<timeOfOpeningHours.length;i++){
    this.resultEmptyArray.push(this.cookiesPurchasedPerHour());
    this.totalCookies = this.resultEmptyArray[i] + this.totalCookies;
    console.log(this.totalCookies);

  }

  };


  
  City.prototype.render = function() {
    let container = document.getElementById('title');
    let tableEl = document.createElement('table');
    container.appendChild(tableEl);
    let headerRowEl = document.createElement('tr');
    tableEl.appendChild(headerRowEl);

    let emptyTh = document.createElement('th');
    headerRowEl.appendChild(emptyTh);

    for(let i=0; i<timeOfOpeningHours.length; i++) {
    let th1El = document.createElement('th');
    headerRowEl.appendChild(th1El);
    th1El.textContent = timeOfOpeningHours[i];
  }
    let th3El = document.createElement('th');
    headerRowEl.appendChild(th3El);
    th3El.textContent = 'Daily Location Total';

    let dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);
    let td1El = document.createElement('td');
    dataRowEl.appendChild(td1El);
    td1El.textContent = this.cityName;


    

  };

Seattle.endResults();
Seattle.render();

let Tokyo = new City('Tokyo',3,24,1.2)

Tokyo.endResults();
Tokyo.render();

let Dubai= new City('Dubai', 11, 38, 3.7);

Dubai.endResults();
Dubai.render();

let Paris= new City('Paris', 20, 38, 2.3);

Paris.endResults();
Paris.render();

let Lima= new City ('Lima', 2, 16, 4.6);

Lima.endResults();
Lima.render();
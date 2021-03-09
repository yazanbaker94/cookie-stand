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
let Tokyo = new City('Tokyo',3,24,1.2);
let Dubai= new City('Dubai', 11, 38, 3.7);
let Paris= new City('Paris', 20, 38, 2.3);
let Lima= new City ('Lima', 2, 16, 4.6);

let locationList = [Seattle, Tokyo, Dubai, Paris, Lima];




City.prototype.customersPerHour = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

City.prototype.cookiesPurchasedPerHour = function() {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookie);

  };

  City.prototype.endResults = function() {
    for(let i=0; i<timeOfOpeningHours.length;i++){
    this.resultEmptyArray.push(this.cookiesPurchasedPerHour());
    return this.totalCookies = this.resultEmptyArray[i] + this.totalCookies;
    console.log(this.endResults());
    
  }

  };


  
  City.prototype.render = function() {
    let container = document.getElementById('title');
    let tableEl = document.createElement('table');
    container.appendChild(tableEl);

    let headerRowEl = document.createElement('thead');
    tableEl.appendChild(headerRowEl);
    let emptyTh = document.createElement('th');
    headerRowEl.appendChild(emptyTh);

    // for(let i=0; i<timeOfOpeningHours.length; i++) {

    for(let i=0; i<timeOfOpeningHours.length; i++){
    let th = document.createElement('th');
    th.textContent = (timeOfOpeningHours[i])
    headerRowEl.appendChild(th);
    }

    let dailyTotal = document.createElement('th');
    dailyTotal.textContent = ("Daily Location Total");
    headerRowEl.appendChild(dailyTotal);

      

    for(let i=0; i<locationList.length; i++){
      let th = document.createElement('tr');
      th.textContent = (locationList[i].cityName)
      headerRowEl.appendChild(th);
    }

    for(let i=0; i<this.resultEmptyArray.length; i++){
      let th = document.createElement('th');
      th.textContent = (Seattle.resultEmptyArray[i]);
      headerRowEl.appendChild(th);
    }

    
    let total = document.createElement('td');
    total.textContent = ("Totals ");  
    headerRowEl.appendChild(total);


  };

// Seattle.endResults();
 Seattle.render();



// Tokyo.endResults();
// Tokyo.render();


// Dubai.endResults();
// Dubai.render();


// Paris.endResults();
// Paris.render();


// Lima.endResults();
// Lima.render();

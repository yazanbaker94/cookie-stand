'use strict';

let timeOfOpeningHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function City(cityName, minCustomer, maxCustomer, avgCookie) {
  this.cityName = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.customersPerHours = [];
  this.everyHourCookies = [];
  this.totalCookiesPerDay = 0;

}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

City.prototype.customersPerHour = function() {
  for(let i=0; i<timeOfOpeningHours.length; i++) {
   this.customersPerHours.push(random(this.minCustomer, this.maxCustomer));
  }
  
};


City.prototype.cookiesPurchasedPerHour = function() {
  this.customersPerHour();
    for(let i=0; i<timeOfOpeningHours.length; i++) {
    let everyHourTotalCookies = Math.ceil(this.customersPerHours[i] * this.avgCookie);
    this.everyHourCookies.push(everyHourTotalCookies);
    this.totalCookiesPerDay += everyHourTotalCookies;
    }
  };
//created table

  let table = document.getElementById('table');
  




  
  City.prototype.render = function() {
    this.cookiesPurchasedPerHour();


    let objectRow = document.createElement('tr');
    let objectData = document.createElement('td');
    objectData.textContent = this.cityName;
    objectRow.appendChild(objectData);
    table.appendChild(objectRow);

   
      for(let i=0; i<timeOfOpeningHours.length; i++){
      let cookiesObject = document.createElement('td');
      cookiesObject.textContent = this.everyHourCookies[i];
      objectRow.appendChild(cookiesObject);
      }

      let totalDailyCookies = document.createElement('td');
      totalDailyCookies.textContent = this.totalCookiesPerDay;
      objectRow.appendChild(totalDailyCookies);



  

  };


  
  let Seattle= new City('Seattle', 23, 65, 6.3);
  let Tokyo = new City('Tokyo',3,24,1.2);
  let Dubai= new City('Dubai', 11, 38, 3.7);
  let Paris= new City('Paris', 20, 38, 2.3);
  let Lima= new City ('Lima', 2, 16, 4.6);
  
  let locationList = [Seattle, Tokyo, Dubai, Paris, Lima];

  function makeHeaderRow() {

    let emptyHeader = document.createElement('thead');
    let emptyTh = document.createElement('th');
    emptyTh.textContent = '';
    table.appendChild(emptyHeader);
    emptyHeader.appendChild(emptyTh);

    for(let i=0; i<timeOfOpeningHours.length; i++) {
    let openingHours = document.createElement('th');
    openingHours.textContent = timeOfOpeningHours[i];
    emptyHeader.appendChild(openingHours);
    }

    let dailyLocationTotal = document.createElement('th');
    dailyLocationTotal.textContent = 'Daily Location Total';
    emptyHeader.appendChild(dailyLocationTotal);

  }

function makeFooter() {

  let objectRow = document.createElement('tr');
  let objectData = document.createElement('th');
  objectData.textContent = 'Totals';
  objectRow.appendChild(objectData);
  table.appendChild(objectRow);

 


  let masterTotal = 0;

  for(let i=0; i<timeOfOpeningHours.length; i++){
    let hourlyTotal = 0;
    for(let q=0; q<locationList.length; q++) {
      hourlyTotal += locationList[q].everyHourCookies[i];
      
    }
    masterTotal += hourlyTotal;
    console.log(masterTotal)

    let hourlyTotalFooter = document.createElement('thead');
    let hourlyTotalTh = document.createElement('th');
    hourlyTotalTh.textContent = hourlyTotal;
    table.appendChild(hourlyTotalFooter);
    objectRow.appendChild(hourlyTotalTh);
  }

  let masterTotalRow = document.createElement('thead');
  let masterTotalData = document.createElement('th');
  masterTotalData.textContent = masterTotal;
  table.appendChild(masterTotalRow);
  objectRow.appendChild(masterTotalData);


   
 
  }




  for(let i=0; i<locationList.length; i++){
    locationList[i].render();
  }

  makeHeaderRow();
  makeFooter();
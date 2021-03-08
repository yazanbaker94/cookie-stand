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
    let tableId = document.getElementById("myTable");
    let table = document.createElement("TABLE");
    let tableBody = document.createElement("TBODY");
    let tableHeader = document.createElement("TH");
    let tableData = document.createElement("TD");
    
    let tableHead = document.createElement("THEAD");
    let tableFoot = document.createElement("TFOOT");


    tableId.appendChild(table);
    table.appendChild(tableBody);
    table.appendChild(tableHeader);
    table.appendChild(tableData);
    table.appendChild(tableHead);
    table.appendChild(tableFoot);
    table.appendChild(tableFoot);


    for(let i=0; i<timeOfOpeningHours.length; i++) {
    let tableHead = document.createElement('th'); 
    tableHead.innerText = timeOfOpeningHours[i];
    tableData.appendChild(tableHead);
    }

    for(let i=0; i<timeOfOpeningHours.length; i++) {
      let tableHead = document.createElement('td'); 
      tableHead.innerText = this.resultEmptyArray[i];
      tableBody.appendChild(tableHead);
      }


    let tableRow = document.createElement('tr'); 
    tableRow.innerText = this.cityName;
    tableData.appendChild(tableRow);

    
    let showTotalResult = document.createElement('th'); 
    showTotalResult.innerText = "Total: " + this.totalCookies + ' cookies';
    unorderedList.appendChild(showTotalResult);
  }



Seattle.endResults();
Seattle.render();



// ----------------------------------------------------------------------------------------------------------------
// PART TWO
//-----------------------------------------------------------------------------------------------------------


let Tokyo={
  minCustomer : 3,
  maxCustomer : 24,
  avgCookie : 1.2,
  cityName : 'Tokyo',
  resultEmptyArray : [],
  totalCookies : 0,


  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookie);
  },

  
  endResults : function() {
    for(let i=0; i<timeOfOpeningHours.length;i++){
    this.resultEmptyArray.push(this.cookiesPurchasedPerHour());
    this.totalCookies = this.resultEmptyArray[i] + this.totalCookies;
    console.log(this.totalCookies);

  }

  },


  
  render : function() {
    let endResults = document.getElementById('title');
    let h1=document.createElement('h1');
    let unorderedList=document.createElement('ul');
    endResults.appendChild(h1);
    endResults.appendChild(unorderedList);
    h1.innerText = this.cityName;


    for(let i=0; i<timeOfOpeningHours.length; i++) {
    let showResult = document.createElement('li'); 
    showResult.innerText = timeOfOpeningHours[i] + ' : ' + this.resultEmptyArray[i] + ' cookies';
    unorderedList.appendChild(showResult);
     
    }

    let showTotalResult = document.createElement('li'); 
    showTotalResult.innerText = "Total: " + this.totalCookies + ' cookies';
    unorderedList.appendChild(showTotalResult);
  }

};

Tokyo.endResults();
Tokyo.render();














//---------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// PART THREE
//-----------------------------------------------------------------------------------------------------------

let Dubai={
  minCustomer : 11,
  maxCustomer : 38,
  avgCookie : 3.7,
  cityName : 'Dubai',
  resultEmptyArray : [],
  totalCookies : 0,


  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookie);
  },

  
  endResults : function() {
    for(let i=0; i<timeOfOpeningHours.length;i++){
    this.resultEmptyArray.push(this.cookiesPurchasedPerHour());
    this.totalCookies = this.resultEmptyArray[i] + this.totalCookies;
    console.log(this.totalCookies);

  }

  },


  
  render : function() {
    let endResults = document.getElementById('title');
    let h1=document.createElement('h1');
    let unorderedList=document.createElement('ul');
    endResults.appendChild(h1);
    endResults.appendChild(unorderedList);
    h1.innerText = this.cityName;


    for(let i=0; i<timeOfOpeningHours.length; i++) {
    let showResult = document.createElement('li'); 
    showResult.innerText = timeOfOpeningHours[i] + ' : ' + this.resultEmptyArray[i] + ' cookies';
    unorderedList.appendChild(showResult);
     
    }

    let showTotalResult = document.createElement('li'); 
    showTotalResult.innerText = "Total: " + this.totalCookies + ' cookies';
    unorderedList.appendChild(showTotalResult);
  }

};

Dubai.endResults();
Dubai.render();








//---------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// PART FOUR
//-----------------------------------------------------------------------------------------------------------


let Paris={
  minCustomer : 20,
  maxCustomer : 38,
  avgCookie : 2.3,
  cityName : 'Paris',
  resultEmptyArray : [],
  totalCookies : 0,


  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookie);
  },

  
  endResults : function() {
    for(let i=0; i<timeOfOpeningHours.length;i++){
    this.resultEmptyArray.push(this.cookiesPurchasedPerHour());
    this.totalCookies = this.resultEmptyArray[i] + this.totalCookies;
    console.log(this.totalCookies);

  }

  },


  
  render : function() {
    let endResults = document.getElementById('title');
    let h1=document.createElement('h1');
    let unorderedList=document.createElement('ul');
    endResults.appendChild(h1);
    endResults.appendChild(unorderedList);
    h1.innerText = this.cityName;


    for(let i=0; i<timeOfOpeningHours.length; i++) {
    let showResult = document.createElement('li'); 
    showResult.innerText = timeOfOpeningHours[i] + ' : ' + this.resultEmptyArray[i] + ' cookies';
    unorderedList.appendChild(showResult);
     
    }

    let showTotalResult = document.createElement('li'); 
    showTotalResult.innerText = "Total: " + this.totalCookies + ' cookies';
    unorderedList.appendChild(showTotalResult);
  }

};

Paris.endResults();
Paris.render();







//---------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// PART FIVE
//-----------------------------------------------------------------------------------------------------------



let Lima={
  minCustomer : 2,
  maxCustomer : 16,
  avgCookie : 4.6,
  cityName : 'Lima',
  resultEmptyArray : [],
  totalCookies : 0,


  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  cookiesPurchasedPerHour: function() {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookie);
  },

  
  endResults : function() {
    for(let i=0; i<timeOfOpeningHours.length;i++){
    this.resultEmptyArray.push(this.cookiesPurchasedPerHour());
    this.totalCookies = this.resultEmptyArray[i] + this.totalCookies;
    console.log(this.totalCookies);

  }

  },


  
  render : function() {
    let endResults = document.getElementById('title');
    let h1=document.createElement('h1');
    let unorderedList=document.createElement('ul');
    endResults.appendChild(h1);
    endResults.appendChild(unorderedList);
    h1.innerText = this.cityName;


    for(let i=0; i<timeOfOpeningHours.length; i++) {
    let showResult = document.createElement('li'); 
    showResult.innerText = timeOfOpeningHours[i] + ' : ' + this.resultEmptyArray[i] + ' cookies';
    unorderedList.appendChild(showResult);
     
    }

    let showTotalResult = document.createElement('li'); 
    showTotalResult.innerText = "Total: " + this.totalCookies + ' cookies';
    unorderedList.appendChild(showTotalResult);
  }

};

Lima.endResults();
Lima.render();


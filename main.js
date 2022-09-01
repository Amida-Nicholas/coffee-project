"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];




var divCoffee = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');


var nameInput = document.querySelector('#name-input');




function addCoffee(e) {
    e.preventDefault();

    var userCoffee = {};

    var userRoast = document.getElementById('roast-selection-two').value;
    var userName = document.getElementById('name-input-two').value;
    var userId = (coffees.length + 1);

    userCoffee.id = userId;
    userCoffee.roast = userRoast;
    userCoffee.name = userName;
    coffees.push(userCoffee);

    updateCoffees();
}

// Changes the roast if the user selects a different roasts, then updates the HTML table
function changeRoast() {
    roastSelection = document.querySelector('#roast-selection');
    updateCoffees();
}

// Changes the coffee live as the user types. 
function autofillCoffee() {
    nameInput = document.querySelector('#name-input');
    updateCoffees();
}


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++){
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameInput.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || "all" === selectedRoast)  {
            if (coffee.name.toLowerCase().includes(selectedName.toLowerCase()))  {
                filteredCoffees.push(coffee);
            } else if ("" === selectedName) {
                filteredCoffees.push(coffee);
            }
        }
        // console.log(coffee.name, coffee.roast);

    });
    divCoffee.innerHTML = renderCoffees(filteredCoffees);
}

var newCoffee = document.getElementById('submitcoffee');
//plural
divCoffee.innerHTML = renderCoffees(coffees);
newCoffee.addEventListener('click', addCoffee);
submitButton.addEventListener('click', updateCoffees);


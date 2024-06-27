const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const cars = ["Saab", "Volvo", "BMW"];


h1.innerHTML = cars;

cars[0] = 'Toyota';
h2.innerHTML = cars;

cars.push('Audi');
h3.innerHTML = cars;

const car = {type:"Fiat", model:"500", color:"white"};
one.innerHTML = car.type;

car.color = 'red';
car.owner = 'Mike';
two.innerHTML = car.owner;


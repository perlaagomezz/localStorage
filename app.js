'use strict'

const truck = {
    make: "Dodge",

    model: "Ram 2500",

    year: "2022",

    color: "black and silver"
}

console.log(truck)

let truckString = JSON.stringify(truck)

console.log(truckString)

localStorage.setItem("storedTruck", truckString)




let unstoredTruck = localStorage.getItem("storedTruck")

let myTruck = JSON.parse(unstoredTruck)

console.log(myTruck)

let myNewTruck = "My new truck is " + myTruck.year + " " + myTruck.make + " " + myTruck.model + "!";

const section = document.getElementById("mainSection")

const h2elm = document.createElement('h2')

h2elm.textContent = myNewTruck

section.appendChild(h2elm)







const cars = ["ford", "dodge", "honda", "ram", "tesla", "volvo", "subaru"]

let carsString = JSON.stringify(cars)

localStorage.setItem("myArray", carString)

let unstoredArray = localStorage.getItem("myArray")

let newCars = JSON.parse(unstoredArray)

const h3elm = document.createElement('h3')

h3elm.textContent = "My favorite car is " + newCars 

section.appendChild(h3elm)


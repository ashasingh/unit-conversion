var input = document.getElementById("myInput").value;
//initialize values for feet/meter
document.getElementById("input-value1").innerText = input
document.getElementById("feet-value").innerText = input
document.getElementById("input-value2").innerText = input
document.getElementById("meter-value").innerText = input

//initialize values for gallon/litre
document.getElementById("input-value3").innerText = input
document.getElementById("gallon-value").innerText = input
document.getElementById("input-value4").innerText = input
document.getElementById("litre-value").innerText = input

//initialize value for kilo/pound
document.getElementById("input-value5").innerText = input
document.getElementById("kilo-value").innerText = input
document.getElementById("input-value6").innerText = input
document.getElementById("pound-value").innerText = input


console.log(input)

function myFunction(){
    let x = document.getElementById("myInput").value;

    // convert meters to feet
    number = parseInt(x) * 3.2808;
    document.getElementById("input-value1").innerText = x
    document.getElementById("feet-value").innerText = number.toFixed(3);

    // convert feet to meters
    number = parseInt(x) * 0.3048
    document.getElementById("input-value2").innerText = x
    document.getElementById("meter-value").innerText = number.toFixed(3);

    // convert liters to gallons
    number = parseInt(x) * 0.264172 
    document.getElementById("input-value3").innerText = x
    document.getElementById("gallon-value").innerText = number.toFixed(3);

    // convert gallons to liters 
    number = parseInt(x) * 3.78541
    document.getElementById("input-value4").innerText = x
    document.getElementById("litre-value").innerText = number.toFixed(3);

    // convert kilo to pound
    number = parseInt(x) * 2.20462
    document.getElementById("input-value5").innerText = x
    document.getElementById("pound-value").innerText = number.toFixed(3);

    // convert pound to kilos
    number = parseInt(x) * 0.453592
    document.getElementById("input-value6").innerText = x
    document.getElementById("kilo-value").innerText = number.toFixed(3);
    
}

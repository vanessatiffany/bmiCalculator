let male = document.getElementById("cowok");
let female = document.getElementById("cewek");
let weight = document.getElementById("beratBadan");
let age = document.getElementById("umur");
let height = document.getElementById("tinggiBadan");
let us = document.getElementById("btn-us");
let si = document.getElementById("btn-si");

function validateForm() {
    if (male.checked === "" || female.check === "" || weight.value === "" || age.value === ""  || height.value === "") {
        alert("Please don't miss field!");
        document.getElementById("btn-cal").removeEventListener("click", count);
    } else {
        count();
    }
}
document.getElementById("btn-cal").addEventListener("click", validateForm);
document.getElementById("btn-cal").addEventListener("click", count);
document.getElementById("btn-clr").addEventListener("click", function() {
    form.reset();

});

function count() {
    let BMI = Number(weight.value / ((height.value / 100) * (height.value / 100)));
    let PI = BMI / Number(height.value / 100);
    let result = "";
    if (BMI<18.5){
        result = 'Kekurangan Berat Badan';
    } else if (18.5<=BMI && BMI<=24.9){
        result = 'Normal (ideal)';
    } else if (25<=BMI && BMI<=29.9){
        result = 'Kelebihan Berat Badan';
    } else if (30<=BMI){
        result = "Kegemukan (Obesitas);"
    }

    let bmi = document.createElement("h3");
    let textbmi = document.createTextNode("BMI: ");
    let valuebmi = document.createTextNode(parseFloat(BMI.toString()).toFixed(2));
    bmi.appendChild(textbmi);
    bmi.appendChild(valuebmi);
    document.getElementById("answer").appendChild(bmi);

    document.getElementById("i").innerHTML = parseFloat(BMI.toString()).toFixed(2);
    const slider = document.getElementById("slider");
    slider.style.marginLeft = parseFloat((BMI * 6.3 + 30).toString()).toFixed(2) + "px";

    let pi = document.createElement("h3");
    let textpi = document.createTextNode("PI: ");
    let valuepi = document.createTextNode(parseFloat(PI.toString()).toFixed(2));
    pi.appendChild(textpi);
    pi.appendChild(valuepi);
    document.getElementById("answer").appendChild(pi);

    let status = document.createElement("p");
    let textstatus = document.createTextNode("Result: ");
    let valuestatus = document.createTextNode(result);
    status.appendChild(textstatus);
    status.appendChild(valuestatus);
    document.getElementById("status").appendChild(status);

    document.getElementById("btn-cal").removeEventListener("click", validateForm);
    document.getElementById("btn-cal").removeEventListener("click", count);
}
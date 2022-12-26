const bill = document.getElementById("bill").value
const people = document.getElementById("people").value
const tipAmount = document.getElementById("ti-amount");
const totalAmount = document.getElementById("t-amount");
const percentage = document.querySelectorAll(".percentage")

const newpercentage = 10

const five = () =>{
   newpercentage = percentage[0].value
   percentage[0].style.backgroundColor= "rgb(44, 156, 156)"
}
const ten = () =>{
    newpercentage= percentage[1].value
   percentage[1].style.backgroundColor= "rgb(44, 156, 156)"

 }
 const fifteen = () =>{
    newpercentage= percentage[2].value
   percentage[2].style.backgroundColor= "rgb(44, 156, 156)"

 }
 const twentyfive = () =>{
    newpercentage= percentage[3].value
   percentage[3].style.backgroundColor= "rgb(44, 156, 156)"

 }
 const fifty = () =>{
    newpercentage = percentage[4].value
   percentage[4].style.backgroundColor= "rgb(44, 156, 156)"

 }
 
 
const getData = () =>{
    tipAmount.innerHTML = bill
    totalAmount.innerHTML = `$ 0.00`
    
   totalAmount.innerHTML = ((parseInt(bill)) * (parseInt(newpercentage))/ 100) / (parseInt(people));
}
getData();


const reset = () =>{
    tipAmount.innerHTML = `$ 0.00`
    totalAmount.innerHTML = `$ 0.00`
    percentage[0].style.backgroundColor = "rgb(9, 70, 70)"
    percentage[1].style.backgroundColor = "rgb(9, 70, 70)"
    percentage[2].style.backgroundColor = "rgb(9, 70, 70)"
    percentage[3].style.backgroundColor = "rgb(9, 70, 70)"
    percentage[4].style.backgroundColor = "rgb(9, 70, 70)"
    percentage[5].style.backgroundColor = "rgb(9, 70, 70)"

}
var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message= document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes=[2000,500,100,20,10,1];

checkButton.addEventListener("click", validateCash);

function validateCash(){
    if (billAmount.value=='' || cashGiven.value==''){
        alert("Please put the necessary values to calculate the change")
    }
    else if(billAmount.value<=0 || cashGiven.value<0){
        showMessage("Please enter valid values.")
        return;
    }
    message.style.display="none";

    billAmount = billAmount.value;
    cashGiven = cashGiven.value;
    
    var amountToBeReturned= cashGiven - billAmount;
    if(amountToBeReturned==0){
        showMessage("No Change is Required")
    }
    else if(amountToBeReturned<0){
        showMessage("Cash Given is less than the Bill Amount. Do you want to wash the plates?")
    }
    else{
        showMessage("Amount to be returned: "+amountToBeReturned)
        calculate(amountToBeReturned);
    }


}
function calculate(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        notes= Math.trunc(amountToBeReturned/availableNotes[i])
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText=notes;
    }
}

function showMessage(msg)
{
    message.style.display="block";
    message.innerText=msg;
}
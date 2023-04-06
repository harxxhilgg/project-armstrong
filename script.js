const inputBox = document.querySelector("#inputBox"); 

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", checkArm); 

function checkArm() {
    let tempValue = inputBox.value;

    let r, sum = 0;

    while (inputBox.value > 0) {
        r = inputBox.value % 10;

        sum = Number(sum) + (Number(r)*Number(r)*Number(r));

        inputBox.value = parseInt(inputBox.value / 10);
    }

    if(inputBox.value.length == 0) {
        document.getElementById('output-id').innerHTML = "Enter Something First you mug!";
    }
    else {
        if(tempValue < 0) {
            document.getElementById('output-id').innerHTML = "Input can't be less than 0 (zero).";
        }
        else if(tempValue == sum) {
            document.getElementById('output-id').innerHTML = tempValue + " is Armstrong value!";
        }
        else {
            document.getElementById('output-id').innerHTML = tempValue + " is not Armstrong Value!";
        }
    }
}
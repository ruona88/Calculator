const numberButtons = document.getElementsByClassName("num"); //Select all buttons that apprea on screen
const operatorButtons = document.getElementsByClassName("operator");// Select all operators
const res = document.getElementById("responseField"); //Select the response field
const equal = document.getElementById("buttonequals"); //select the equal button
const reset = document.getElementById("AC"); //A button to reset;
let responseString = ""; //text on screen
let answer = ""; //an string to receive screen inputs and solve

//Add event listeners to all numbers
for(i=0; i<numberButtons.length; i++) {
    let result = numberButtons[i];
    result.addEventListener("click", () => {
        res.innerHTML = responseString += result.value;
        answer += result.value;
        console.log(answer);
    })
}

//Add event listeners for all maths operators
for(i=0; i<operatorButtons.length; i++) {
    let result2 = operatorButtons[i];
    result2.addEventListener("click", () => {
        if(!responseString.length) {res.innerHTML = "0"}
        else {
            res.innerHTML = responseString += result2.value;
            answer += result2.value;
        }
    })
}

//Add event listener to the equal to button and solve with eval()
equal.addEventListener("click", () => {
    if(!responseString.length) {
        res.innerHTML = "0"
    } else {
        res.innerHTML = eval(responseString);
        responseString = "";
        answer = "";
    } 
}) 

//Event handler to reset answer and response Fields
reset.addEventListener("click", () => {
    responseString = "";
    answer = "";
    res.innerHTML = 0;
})
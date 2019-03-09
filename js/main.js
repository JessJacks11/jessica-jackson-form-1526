// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let fn = document.getElementById("fullname");
let email = document.getElementById("email");
let mess = document.getElementById("message")
let btn = document.getElementById("submit-button")
let fm = document.querySelector("form");

// Declare variable that will 
// store regular expression for email

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function validForm() {
    console.clear();
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    let collectedData = {};
    let errors = [];


    //FULL NAME
    // Check if fullname is not empty.
    
        if (fn.value !== "") {
            
    // If so:
       // Pass the collected value
       // to your object "data".
            
            collectedData.fullname = fn.value;
            
    // Otherwise:
        } else {
       // Create a corresponding error-message
       // and add it to your array "errors".
            
            errors.push("FULL NAME: Full name is missing.");
            
    // End your conditional here.
        }

    //EMAIL
    // Check if email is not empty.
        if (email.value !== "") {
       // Check if email is valid.
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
       // If so:
          // Pass the collected value
          // to your object "data".
                collectedData.email = email.value;
       // Otherwise:
           } else {
          // Create a corresponding error-message
          // and add it to your array "errors".
                errors.push("EMAIL: Email is invalid.");
       // End your nested conditional here.
            }
    // Otherwise:
        } else {
       // Create a corresponding error-message
       // and add it to your array "errors"
            errors.push("EMAIL: Email is missing.");
    // End your outer conditional here.
        }

    //MESSAGE
    // Check if message is not empty.
    if (fn.value !== "") {
    // If so:
       // Pass the collected value
       // to your object "data".
        collectedData.message = mess.value;
    // Otherwise:
    } else {
       // Create a corresponding error-message
       // and add it to your array "errors"
        errors.push("MESSAGE: Message is missing.");
    // End your conditional here.
    }


    //FEEDBACK & ERRORS
    // Check if there is anything in array errors
    if (errors.length !== 0) {
       // If so: 
       // Print it in JavaScript console.
        console.log("ERRORS:", errors);
        
    // Otherwise:
    } else {
       // Print the data in JavaScript console.
        console.log(collectedData);
       // Clear text-fields
        fm.reset();
    // End your conditional here.   
    }
// Close your function here
}
// Register your form to "click" event.
btn.addEventListener("click", validForm);
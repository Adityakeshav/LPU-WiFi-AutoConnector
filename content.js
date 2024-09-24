window.addEventListener("load", () => {
    // Try to detect the username, password fields, and the submit button
    let usernameField = document.querySelector("input[name='username'], input[id='txt_uname']");
    let passwordField = document.querySelector("input[name='password'], input[id='txt_pwd']");

    // Log all buttons for debugging
    let allButtons = document.querySelectorAll('button, input[type="submit"], input[type="button"]');
    console.log("All buttons and inputs on the page:", allButtons);

    // Updated selector for the submit button based on the provided HTML
    let submitButton = document.querySelector("button#loginbtn.btn.btn-primary.btn-sm");

    // Checkbox for agreeing to the policy
    let termsCheckbox = document.querySelector("input#agreepolicy");

    // Provide detailed feedback if elements are not found
    if (!usernameField) {
        console.error("Username field not found. Please inspect the page and check the input field's ID or name.");
    }

    if (!passwordField) {
        console.error("Password field not found. Please inspect the page and check the input field's ID or name.");
    }

    if (!submitButton) {
        console.error("Submit button not found. Please inspect the page and check the button's type, ID, or class.");
    } else {
        console.log("Submit button found:", submitButton);
    }

    // If all fields are found, fill them and submit the form
    if (usernameField && passwordField && submitButton) {
        usernameField.value = "username";  // Replace with your LPU username
        passwordField.value = "password";  // Replace with your LPU password

        // Check if terms and conditions checkbox needs to be checked
        if (termsCheckbox && !termsCheckbox.checked) {
            termsCheckbox.click(); // Check the checkbox
        }

        // Check if the button is enabled before clicking
        if (!submitButton.disabled) {
            submitButton.click();  // Auto-submit the form
        } else {
            console.error("Submit button is disabled. Please ensure you meet all form requirements.");
        }
    }
});

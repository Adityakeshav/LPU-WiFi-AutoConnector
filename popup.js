document.getElementById("connect").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: autoSubmitForm
      });
    });
  });
  
  function autoSubmitForm() {
    // The auto login script is injected here
    let usernameField = document.querySelector("input[name='username'], input[id='txt_uname']");
    let passwordField = document.querySelector("input[name='password'], input[id='txt_pwd']");
    let submitButton = document.querySelector("input[type='submit'], button[type='button'], input[id='loginBtn'], button[id='loginBtn']");
  
    if (usernameField && passwordField && submitButton) {
      usernameField.value = "username";  // Replace with your LPU username
      passwordField.value = "password";  // Replace with your LPU password
      submitButton.click();  // Auto-submit the form
    } else {
      alert("Login form not found. Please check the page structure.");
    }
  }
  
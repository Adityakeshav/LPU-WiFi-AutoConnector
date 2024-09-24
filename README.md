LPU WiFi AutoConnector Chrome Extension
The LPU WiFi AutoConnector is a Chrome extension designed to automate the login process for LPU's WiFi network. This extension simplifies the user experience by automatically filling in credentials and submitting the login form with a single click.

Features
Auto-Login: Automatically fills and submits your LPU WiFi credentials.
Simple Setup: Easily configure the extension to store your credentials locally.
One-Click Connection: Log in with a simple button click—no more manual entry!
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/Adityakeshav/lpu-wifi-autoconnector.git
Load Extension in Chrome:

Open Chrome and navigate to chrome://extensions/.
Enable Developer mode.
Click Load unpacked and select the folder where your extension files are stored.
Edit Credentials:

Open background.js or popup.js and replace "username" and "password" with your actual LPU credentials:
javascript
Copy code
usernameField.value = "your_username";  // Replace with your LPU username
passwordField.value = "your_password";  // Replace with your LPU password
Reload the Extension:

After updating the credentials, return to chrome://extensions/ and click Reload to refresh the extension.
Usage
Open the LPU WiFi login page in your browser.
Click the extension icon and hit the "Connect" button.
The extension will auto-fill the form and log you in automatically.
Permissions
activeTab: Allows the extension to interact with the current tab.
scripting: Needed to inject and execute the login script on the WiFi login page.
Troubleshooting
If the extension can't find the login form or submit button, inspect the HTML of the login page for any changes in its structure. Adjust the querySelector lines in the autoSubmitForm function as necessary.
Requirements
If you're integrating this extension with a backend or using external Python dependencies, include them here:

txt
Copy code
# Python dependencies (if needed)
# For example:
# requests==2.25.1
# beautifulsoup4==4.9.3
If you're using this solely as a Chrome extension, this file is not required.

Contributing
Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-branch
Make your changes and commit:
bash
Copy code
git commit -m 'Added feature'
Push to the branch:
bash
Copy code
git push origin feature-branch
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more information.

Contact
GitHub: Adityakeshav
Email: adityakeshav393@gmail.com

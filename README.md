# LPU WiFi AutoConnector Chrome Extension

The **LPU WiFi AutoConnector** is a Chrome extension that automates the login process for LPU's WiFi network. It helps users automatically fill in their credentials and submit the login form with a single click.

## Features

- **Auto-Login**: Automatically fills and submits your LPU WiFi credentials.
- **Simple Setup**: Easily configure the extension to store your credentials locally.
- **One-Click Connection**: Log in with a simple button click, no more manual entry!

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Adityakeshav/lpu-wifi-autoconnector.git
   ```

2. **Load Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode**.
   - Click **Load unpacked** and select the folder where your extension files are stored.
   
3. **Edit Credentials**:
   - Open `background.js` or `popup.js` and replace `"username"` and `"password"` with your actual LPU credentials:
     ```javascript
     usernameField.value = "your_username";  // Replace with your LPU username
     passwordField.value = "your_password";  // Replace with your LPU password
     ```

4. **Reload the Extension**:
   - After updating the credentials, go back to `chrome://extensions/` and reload the extension by clicking **Reload**.

## Usage

1. Open the LPU WiFi login page in your browser.
2. Click the extension icon and hit the "Connect" button.
3. The extension will auto-fill the form and log you in automatically.

## Permissions

- **activeTab**: This permission is required to allow the extension to interact with the current tab.
- **scripting**: Needed to inject and execute the login script on the WiFi login page.

## Troubleshooting

- If the extension can't find the login form or submit button, check if the login page structure has changed. Inspect the HTML and modify the `querySelector` lines in the `autoSubmitForm` function accordingly.

## requirements.txt

If you're integrating this extension with a backend or using external Python dependencies, include them here.

```txt
# Python dependencies (if needed)
# For example:
# requests==2.25.1
# beautifulsoup4==4.9.3
```

If you're purely using this as a Chrome extension, this file is not required.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m 'Added feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

- **GitHub**: [Adityakeshav](https://github.com/Adityakeshav)
- **Email**: adityakeshav393@gmail.com

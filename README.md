<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LPU WiFi AutoConnector</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        h1, h2, h3 {
            color: #0056b3;
        }
        code {
            background-color: #e9ecef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #e9ecef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        ul {
            margin: 10px 0;
        }
    </style>
</head>
<body>

<h1>LPU WiFi AutoConnector Chrome Extension</h1>

<p>The <strong>LPU WiFi AutoConnector</strong> is a Chrome extension designed to automate the login process for LPU's WiFi network. This extension simplifies the user experience by automatically filling in credentials and submitting the login form with a single click.</p>

<h2>Features</h2>
<ul>
    <li><strong>Auto-Login:</strong> Automatically fills and submits your LPU WiFi credentials.</li>
    <li><strong>Simple Setup:</strong> Easily configure the extension to store your credentials locally.</li>
    <li><strong>One-Click Connection:</strong> Log in with a simple button click—no more manual entry!</li>
</ul>

<h2>Installation</h2>
<ol>
    <li><strong>Clone the Repository:</strong>
        <pre><code>git clone https://github.com/Adityakeshav/lpu-wifi-autoconnector.git</code></pre>
    </li>
    <li><strong>Load Extension in Chrome:</strong>
        <ul>
            <li>Open Chrome and navigate to <code>chrome://extensions/</code>.</li>
            <li>Enable <strong>Developer mode</strong>.</li>
            <li>Click <strong>Load unpacked</strong> and select the folder where your extension files are stored.</li>
        </ul>
    </li>
    <li><strong>Edit Credentials:</strong>
        <p>Open <code>background.js</code> or <code>popup.js</code> and replace <code>"username"</code> and <code>"password"</code> with your actual LPU credentials:</p>
        <pre><code>usernameField.value = "your_username";  // Replace with your LPU username
passwordField.value = "your_password";  // Replace with your LPU password</code></pre>
    </li>
    <li><strong>Reload the Extension:</strong>
        <p>After updating the credentials, return to <code>chrome://extensions/</code> and click <strong>Reload</strong> to refresh the extension.</p>
    </li>
</ol>

<h2>Usage</h2>
<ol>
    <li>Open the LPU WiFi login page in your browser.</li>
    <li>Click the extension icon and hit the "Connect" button.</li>
    <li>The extension will auto-fill the form and log you in automatically.</li>
</ol>

<h2>Permissions</h2>
<ul>
    <li><strong>activeTab:</strong> Allows the extension to interact with the current tab.</li>
    <li><strong>scripting:</strong> Needed to inject and execute the login script on the WiFi login page.</li>
</ul>

<h2>Troubleshooting</h2>
<p>If the extension can't find the login form or submit button, inspect the HTML of the login page for any changes in its structure. Adjust the <code>querySelector</code> lines in the <code>autoSubmitForm</code> function as necessary.</p>

<h2>Requirements</h2>
<p>If you're integrating this extension with a backend or using external Python dependencies, include them here:</p>
<pre><code># Python dependencies (if needed)
# For example:
# requests==2.25.1
# beautifulsoup4==4.9.3
</code></pre>
<p>If you're using this solely as a Chrome extension, this file is not required.</p>

<h2>Contributing</h2>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch:
        <pre><code>git checkout -b feature-branch</code></pre>
    </li>
    <li>Make your changes and commit:
        <pre><code>git commit -m 'Added feature'</code></pre>
    </li>
    <li>Push to the branch:
        <pre><code>git push origin feature-branch</code></pre>
    </li>
    <li>Submit a pull request.</li>
</ol>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more information.</p>

<h2>Contact</h2>
<ul>
    <li><strong>GitHub:</strong> <a href="https://github.com/Adityakeshav">Adityakeshav</a></li>
    <li><strong>Email:</strong> <a href="mailto:adityakeshav393@gmail.com">adityakeshav393@gmail.com</a></li>
</ul>

</body>
</html>

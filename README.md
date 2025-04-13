<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Replica</title>
  <style>
    /* General Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Body Styling */
    body {
      background-color: #121212; /* Dark background */
      color: #ffffff; /* White text color */
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
    }

    /* Container for Content */
    .content {
      max-width: 600px;
    }

    /* Heading Styling */
    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    /* Paragraph Styling */
    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }

    /* Button Styling */
    .button-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .button {
      padding: 15px 20px;
      background-color: #1c1c1c; /* Dark button background */
      border: 2px solid #d3d3d3; /* Light grey outline */
      color: #ffffff; /* White text */
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, border-color 0.3s;
    }

    .button:hover {
      background-color: #333333; /* Lighter background on hover */
      border-color: #ffffff; /* White outline on hover */
    }
  </style>
</head>

<body>
  <div class="content">
    <h1>AMCM Event Server Download</h1>
    <p>Choose an option below to download the server or learn more about it.</p>
    <div class="button-container">
      <button class="button">Download Server</button>
      <button class="button">View Documentation</button>
      <button class="button">Contact Support</button>
    </div>
  </div>
</body>

</html>

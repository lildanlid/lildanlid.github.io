<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Background</title>
  <style>
    body {
      background-color: #121212; /* Dark background color */
      color: #ffffff; /* Light text color for contrast */
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This website now has a dark background!</p>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Big Buttons</title>
  <style>
    body {
      background-color: #121212; /* Dark background */
      color: #ffffff; /* Light text color */
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .button-container {
      display: flex;
      gap: 10px; /* Space between buttons */
    }

    .button {
      padding: 20px 40px; /* Big button size */
      background-color: #1e90ff; /* Button color */
      border: none;
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .button:hover {
      background-color: #4682b4; /* Hover color */
    }
  </style>
</head>
<body>
  <div class="button-container">
    <button class="button">Button 1</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
    <button class="button">Button 4</button>
  </div>
</body>
</html>

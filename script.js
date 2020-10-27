// Assignment code here
var promptLength = function()
{
  return window.prompt("Enter a password length from 8-128 characters:");
}

var promptChars = function()
{
  var options = [false, false, false, false];
  options[0] = window.confirm("Use lowercase characters? (a-z):");
  options[1] = window.confirm("Use uppercase characters? (A-Z):");
  options[2] = window.confirm("Use numeric characters? (0-9):");
  options[3] = window.confirm("Use special characters? ('!', '[', '=', etc.):");
  return options;
}

var generatePassword = function()
{
  // Get password length
  var passLength = 0;
  passLength = promptLength(); // Ask first time
  console.log(parseInt(passLength));
  while ((passLength < 8 || passLength > 128) || !parseInt(passLength)) // Verify user enters valid option, if not, prompt until they do.
  {
    window.alert("Invalid Length (8-128 req.)"); // Notify of problem
    passLength = promptLength(); // Ask again
  }

  // Ask for character options, indecies: 0 = lowercase, 1 = uppercase, 2 = numeric, 3 = special
  var options = promptChars();
  while (!(options[0] || options[1] || options[2] || options[3])) // Verify user selects at least one option, if not, prompt until they do.
  {
    window.alert("You must select 'Ok' for at least one option."); // Notify of problem
    // Ask again
    options = promptChars();
  }

  // Create array of useable chars
  var useableChars = [];
  if (options[0]) // Add lowercase chars if selected
  {
    for (var i = 97; i <= 122; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (options[1]) // Add uppercase chars if selected
  {
    for (var i = 65; i <= 90; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (options[2]) // Add numeric chars if selected
  {
    for (var i = 48; i <= 57; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (options[3]) // Add special chars if selected
  {
    for (var i = 32; i <= 47; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 58; i <= 64; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 91; i <= 96; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 123; i <= 126; i++)
      useableChars.push(String.fromCharCode(i));
  }

  // Generate password
  var password = ""; // Initialize empty password
  for (var i = 0; i < passLength; i++) // for loop that executes passLength num of times
    password += useableChars[Math.ceil(Math.random()*useableChars.length)-1]; // Add random character from useableChars to password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

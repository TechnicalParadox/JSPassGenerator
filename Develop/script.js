// Assignment code here
var generatePassword = function()
{
  // Get password length
  var passLength = 0;
  passLength = window.prompt("Enter a password length from 8-128 characters:"); // Ask first time
  while (passLength < 8 || passLength > 128) // Verify user enters valid option, if not, prompt until they do.
  {
    window.alert("Invalid Length (8-128 req.)"); // Notify of problem
    passLength = window.prompt("Enter a password length from 8-128 characters:"); // Ask again
  }

  // Ask for character types
  var lc = false, uc = false, nu = false, sc = false;
  // Ask first time
  lc = window.confirm("Use lowercase characters? (a-z):");
  uc = window.confirm("Use uppercase characters? (A-Z):");
  nu = window.confirm("Use numeric characters? (0-9):");
  sc = window.confirm("Use special characters? ('!', '[', '=', etc.):");
  while (!(lc || uc || nu || sc)) // Verify user selects at least one option, if not, prompt until they do.
  {
    window.alert("You must select 'Ok' for at least one option."); // Notify of problem
    // Ask again
    lc = window.confirm("Use lowercase characters? (a-z):");
    uc = window.confirm("Use uppercase characters? (A-Z):");
    nu = window.confirm("Use numeric characters? (0-9):");
    sc = window.confirm("Use special characters? ('!', '[', '=', etc.):");
  }

  // Create array of useable chars
  var useableChars = [];
  if (lc) // Add lowercase chars if selected
  {
    for (var i = 97; i <= 122; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (uc) // Add uppercase chars if selected
  {
    for (var i = 65; i <= 90; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (nu) // Add numeric chars if selected
  {
    for (var i = 48; i <= 57; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (sc) // Add special chars if selected
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

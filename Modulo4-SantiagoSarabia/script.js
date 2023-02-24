// Define an array of names
var names = [" Yaakov", "John", "Jen", "Jason", "Paul", "Frank", " Larry", " Paula", " Laura", "Jim"];

// Loop through the array of names
for (var i = 0; i < names.length; i++) {
  // Check if the name starts with J or j
  if (names[i][0] === "J" || names[i][0] === "j") {
    // If it does, say Good Bye
    console.log( "Good Bye " + names[i]);
  } else {
    // If it doesn't, say Hello
    console.log( "Hello " + names[i]);
  }
}
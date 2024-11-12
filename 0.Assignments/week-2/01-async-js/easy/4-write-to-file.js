// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("node:fs");

const content = "Writing the file \n";

fs.writeFile("notepad.txt", content, { flag: "a" }, (err) => {
  if (err) {
    console.log("Error writing");
  } else {
    console.log("File appended successfully");
  }
});

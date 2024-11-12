// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("node:fs");
let content = "";
fs.readFile("notepad.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    content = data;
    console.log(content);
    content = content.replace(/\s+/g, " ").trim();
    fs.writeFile("notepad.txt", content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File written succesfully");
      }
    });
  }
});

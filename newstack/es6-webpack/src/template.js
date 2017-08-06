
// 01 - basic template
export function basic() {
  let message = `Hello world!`;
  console.log(message);               // "Hello world!"
  console.log(typeof message);        // "string"
  console.log(message.length);        // 12
}

// 02 - multiline strings
export function multiline() {
  var message = "Hello \
  world, OK?";
  console.log(message); // "Hello world"
}

// 03 - multiline break and strings
export function multilineBreak() {
  var message = "Line 1 \n\
  Line2";
  console.log(message);
}

// 04 - Multi Line Items and break
export function multilineItems() {
  var message1 = [
    "Multiline ",
    "string"
  ].join("\n"); // the old way

  let message2 = "Multiline \n" +
    "string"; // using ES6 template string

  console.log(message2);
}

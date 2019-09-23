// radio_click.js
//   An example of the use of the click event with radio buttons,
//   registering the event handler by assignment to the button
//   attributes


// The event handler for a radio button collection

function color(plane) {

  // Produce an alert message about the chosen airplane

  switch (plane) {
    case 152:
      document.body.style.backgroundColor = "red";
      alert("This is my favorite color");
      break;
    case 172:
      document.body.style.backgroundColor = "blue";
      alert("This is my favorite color");
      break;
    case 182:
      document.body.style.backgroundColor = "green";
      alert("This is my favorite color");
      break;
    case 210:
      document.body.style.backgroundColor = "yellow";
      alert("This is my favorite color");
      break;
    case 211:
      document.body.style.backgroundColor = "orange";
      alert("This is my favorite color");
      break;
    default:
      alert("no color");
      break;
  }
}
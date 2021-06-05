const inputField = document.getElementById("input"),
  timeContainer = document.getElementById("time"),
  charsContainer = document.getElementById("chars");

function calculate() {
  inputField.addEventListener("keyup", function () {
    let inputVal = inputField.value;
    let inputValLen = inputVal.length;
    // Reading Time Counter Function
    function readingTime() {
      const wpm = 250;
      const words = inputVal.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);

      if (inputValLen == "" && inputValLen == "0") {
        timeContainer.innerHTML = "Type to Calculate Time";
      } else if (inputValLen < 250) {
        timeContainer.innerHTML =
          "< <span class = 'colored-cap'>" + time + "</span> Minute to Read";
      } else {
        timeContainer.innerHTML = time + " Minutes to Read";
      }
    }

    //   Character Counter Function
    function countChars() {
      if (inputValLen == "" && inputValLen == "0") {
        charsContainer.innerHTML = "Type to Count Characters";
      } else {
        charsContainer.innerHTML =
          "Total <span class = 'colored-cap'>" +
          inputValLen.toLocaleString() +
          "</span> Characters";
      }
    }

    // Initialize the Nested Functions
    countChars();
    readingTime();
  });
}

// Initialize The Main Function
calculate();

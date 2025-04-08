// look back at the <readme.md> file for some hints //
// working API key //

import giphyApiKey from "./config.mjs";

const imgButton = document.getElementById("add-img-btn"); // get the add image button from the DOM
const removeButton = document.getElementById("remove-img-btn"); // get the remove img button from the DOM
const imgDisplaySection = document.getElementById("display-images"); // get section in DOM where images tags will be moved

// when event add image button click triggered, call gif request function
imgButton.addEventListener("click", async function (e) {
  e.preventDefault();
  let imgUrl = await giphyRequest();
  appendGif(imgUrl);
  console.log(term.value);
});

// create an html image element. put in the DOM in the image section.
function appendGif(imgUrl) {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", String(imgUrl));
  imgDisplaySection.appendChild(newImage);
}

// function to retrieve and display a gif based on the term
async function giphyRequest() {
  try {
    let term = document.getElementById("term").value; // get the term from the user input element

    // call to api with the term. should return 20 images
    let response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${term}&limit=20`
    );

    let randInt = Math.floor(Math.random() * 21); // get a random number between 0 and 20
    let image = await response.data.data[randInt].images.fixed_height.url; // randomly get one of the 20 returned images
    // console.log(image);
    // console.log(response.data.data[randInt].images);

    clearError();

    return image;
  } catch (error) {
    let errorStat = error.status;
    console.log(errorStat);

    let h2 = document.createElement("h2"); // display header to indicate an error occurred
    h2.innerHTML = "Error";
    h2.setAttribute("class", "error-header");

    let errDiv = document.createElement("div");
    errDiv.setAttribute("class", "error-msg");

    // display more context about what type of error was encountered
    if (errorStat === 401) {
      let message = "Bad request; check credentials.";
      errDiv.innerHTML = message;
    } else if (errorStat === 404) {
      let message = "Site not available. Please try again later.";
      errDiv.innerHTML = message;
      console.log("Yahtzee!");
    }

    imgDisplaySection.appendChild(h2);
    imgDisplaySection.appendChild(errDiv);
  }
}

// if user tries again, and does not generate an error, remove the error
function clearError() {
  let errHeader = document.getElementsByClassName("error-header") || null;
  let errMsg = document.getElementsByClassName("error-msg") || null;

  if (errHeader) {
    console.log(errMsg);
    console.log(errHeader);
    while (errHeader.length > 0) {
      errHeader[0].remove();
      errMsg[0].remove();
    }
  }
}

// when event remove image button click triggered, remove the event target
document.addEventListener("dblclick", function (e) {
  console.log(e.target.tagName);

  // only remove if the target is an image
  if (e.target.tagName === "IMG") {
    console.log(e);
    e.target.remove();
  }
});

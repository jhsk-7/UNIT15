// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

// get the add image button from the DOM
const imgButton = document.getElementById("add-img-btn");
// get the remove img button from the DOM
const removeButton = document.getElementById("remove-img-btn");
// get section in DOM where images tags will be moved
const imgDisplaySection = document.getElementById("display-images");

// when event add image button click triggered, call gif request function
imgButton.addEventListener("click", function(e){
    e.preventDefault();
    giphyRequest();
    console.log(term.value);
})

// function to retrieve and display a gif based on the term
async function giphyRequest() {
    try {
    // get the term from the user input element
    let term = document.getElementById("term").value;

    // call to api with the term. should return 20 images
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${term}&limit=20`);
    
    // get a random number between 0 and 20
    let randInt = Math.floor(Math.random() * 21);

    // randomly get one of the 20 returned images
    image = (response.data.data[randInt].images.fixed_height.url);
    console.log(image);
    console.log(response.data.data[randInt].images);
    
    // create an html image element. put in the DOM in the image section.
    let newImage = document.createElement("img");
    newImage.setAttribute("src", String(image));
    imgDisplaySection.appendChild(newImage);

    clearError();

    }

    catch (error) { 

        // display header to indicate an error occurred
        let h2 = document.createElement("h2");
        h2.innerHTML = "Error";
        h2.setAttribute("class","error-header");

        /// display more context about what type of error was encountered
        let errDiv = document.createElement("div");
        errDiv.setAttribute("class", "error-msg");
        errDiv.innerHTML = error.message;
        imgDisplaySection.appendChild(h2);
        imgDisplaySection.appendChild(errDiv);
    }
}

// if user tries again, and does not generate an error, remove the error
function clearError(){
    let errHeader = document.getElementsByClassName("error-header") || null;
    let errMsg = document.getElementsByClassName("error-msg") || null;

    if (errHeader){
        console.log(errMsg);
        console.log(errHeader);
        while (errHeader.length > 0) {
            errHeader[0].remove();
            errMsg[0].remove();
        }
    }  
}

// when event remove image button click triggered, remove the event target
document.addEventListener("dblclick", function(e){
    console.log(e.target.tagName)

    // only remove if the target is an image
    if (e.target.tagName === "IMG"){
        e.target.remove();
    };
})
// Defining variables
// Defining the index witch will identify the word in the array
let index = 0;
let typer = document.getElementById("typer");
let blink = document.getElementById("cursor");
let container = document.getElementById("container");
// Defining the source witch will gonna contain our string
// we can use the index to get the word from the source
// kinda like the array, since string is already a bunch of
// chars witch are all together makes an array, string can do
// what arrays can do and have the same properties
let source = "";

// Getting the code.txt file witch will gonna contain all of our code
// witch will be displayed
// the function will have one parameter witch is file
// witch contains the file name, in this example it will be "code.txt"
function readTextFile(file) {
	// Making an HTTP Request to a local file
    var rawFile = new XMLHttpRequest();
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
				// Setting the source to the response we just got
                source = rawFile.responseText;
                //console.log(source); console log the result if needed
            }
        }
    };
	// Sending the request
    rawFile.open("GET", file, true);
    rawFile.send();
}

function onKey() {
	// Check if the index of the string is valid
	if (source[index] == undefined) {
		// if not valid then return
		return
	}
	
	// if its valid then add this char with this index to the DOM
	typer.innerHTML += source[index];
	// increase the index with one (to get the next word in the array)
	index += 1;
	
	// scroll to the bottom of the container
	window.scrollBy(0, container.scrollHeight);
}

// The starting function
function start() {
	// First, We need to get the "code.txt" file
	readTextFile("code.txt");
	
	// Making an interval for 500 milliseconds the will change the
	// style of the "blink" variable or the "cursor" element
	// It will gonna switch the opacity from 0 to 1 over and over
	// giving us the felling of a blinking cursor
	setInterval(function() {
		blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
	}, 500);
	
	// Setting the keydown event
	document.addEventListener("keydown", onKey);
}

// Finally, Starting the app
start();
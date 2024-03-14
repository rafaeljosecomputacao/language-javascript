// Get elements from DOM
const $selectOption = document.querySelector("#select");
const $title = document.querySelector(".main-title");
const $subtitle = document.querySelector(".main-subtitle");
const $caption = document.querySelector(".main-caption");
const $description = document.querySelector(".main-description");

// Function to populate page content
function populatePageContent() {
    // Loading JSON file
    fetch("../data.json").then((response) => {
        response.json().then((data) => {
            // Iterating on the JSON file
            for(let obj in data) {
                // Creating option element
                let option = document.createElement("option");
                // Assigning JSON file key to select option
                option.text = obj;
                option.value = obj;      
                // Adding option element created inside select in the DOM
                $selectOption.appendChild(option);
            } 
            // Assigning JSON file value to page content
            $title.textContent = data.English.title;
            $subtitle.textContent = data.English.subtitle;
            $caption.textContent = data.English.caption;  
            $description.textContent = data.English.description;  
        })
    });
}

// Calling function
populatePageContent();

// Monitoring the change in select
$selectOption.addEventListener("change", () => {
    // Loading JSON file
    fetch("../data.json").then((response) => {
        response.json().then((data) => {       
            // Updating JSON file value to DOM elements
            $title.textContent = data[$selectOption.value].title;
            $subtitle.textContent = data[$selectOption.value].subtitle;
            $caption.textContent = data[$selectOption.value].caption;
            $description.textContent = data[$selectOption.value].description;
        })
    });
});
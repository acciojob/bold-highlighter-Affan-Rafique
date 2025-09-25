// Turns all <strong> elements green
function highlight() {
    let boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = "rgb(0, 128, 0)";
    });
}

// Reverts all <strong> elements to black
function return_normal() {
    let boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = "rgb(0, 0, 0)";
    });
}


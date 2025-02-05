
function searchPageContent() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const contentElements = document.querySelectorAll("h2, p");

    // Clear previous highlights
    contentElements.forEach(el => {
        el.innerHTML = el.textContent; // Reset to original content
    });

    let foundMatch = false;

    // Highlight matches and scroll to the first match
    contentElements.forEach(el => {
        const text = el.textContent.toLowerCase();

        if (text.includes(searchTerm) && searchTerm !== "") {
            const regex = new RegExp(`(${searchTerm})`, "gi");
            el.innerHTML = el.textContent.replace(regex, `<span class="highlight">$1</span>`);

            if (!foundMatch) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to first match
                foundMatch = true; // Ensure only the first match is scrolled to
            }
        }
    });

    if (!foundMatch) {
        alert("No match found for '" + searchTerm + "'.");
    }
}


document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchPageContent(); // Call the search function when Enter is pressed
    }
});









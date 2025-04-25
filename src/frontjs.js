document.getElementById("imageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var imageInput = document.getElementById("imageInput");
    var file = imageInput.files[0];
    
    var formData = new FormData();
    formData.append("image", file);

    // Send the image to the backend for processing
    fetch("/process-image", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Display the extracted text
        document.getElementById("result").innerHTML = "<p>Extracted Text: " + data.text + "</p>";
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
});

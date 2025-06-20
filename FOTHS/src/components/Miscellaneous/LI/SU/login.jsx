const form = document.getElementById('myForm');

const AdminLogin = () => {
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission.

    // Get form data using FormData.
    const formData = new FormData(form);

    // Perform client-side validation (example).
    if (!formData.get('myInput')) {
        console.error('Input cannot be empty!');
        return; // Stop processing if validation fails.
    }

    // Send data using fetch (example).
    fetch('/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully:', data);
        // Handle success (e.g., show a success message).
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        // Handle error (e.g., display an error message).
    });
})};

export default AdminLogin;
// script.js
// Add event listener to the button
document.querySelector('button').addEventListener('click', () => {
    // Add functionality to the button click
    console.log('Button clicked!');
});

// Add functionality to the contact form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted!');
});
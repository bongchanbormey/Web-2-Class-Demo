// Create an array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Get the current date
const today = new Date();

// Extract the day, month, and year
const day = today.getDate();
const month = monthNames[today.getMonth()];
const year = today.getFullYear();

// Display the date in the format "Today is: Month Day, Year"
document.write(`Today is: ${month} ${day}, ${year}`);


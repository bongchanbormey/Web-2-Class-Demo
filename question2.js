// Prompt the user to enter their age
const age = prompt("Please enter your age:");

// Check if the input is a number
if (age !== null) {
    const ageNumber = parseInt(age);

    if (!isNaN(ageNumber)) {
        // Determine the message based on the age
        let message;
        if (ageNumber < 13) {
            message = "You are a child.";
        } else if (ageNumber >= 13 && ageNumber <= 19) {
            message = "You are a teenager.";
        } else if (ageNumber >= 20) {
            message = "You are an adult.";
        } else {
            message = "Invalid age entered.";
        }

        // Display the message
        document.write(message);
    } else {
        document.write("Please enter a valid number for your age.");
    }
} else {
    document.write("Age input was canceled.");
}
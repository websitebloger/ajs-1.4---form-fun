//Get the three elements of the form that the task will involve
var textArea = document.getElementById('user-input'),
    buttonArea = document.getElementById('btn'),
    savedText = document.getElementById('saved-text');

// Make sure we have valid elements to work with (!)
if (textArea !== null && buttonArea !== null && savedText !== null) {

    // Listen for clicks on form button
    buttonArea.addEventListener('click', function (event) {

        // Get value from form element, what user has typed into text area
        var submittedText = textArea.value;

        // Check if user entered something and only take action in the event handler if text has been entered
        // This will prevent adding empty paragraphs to the page if the user typed nothing in textArea
        // if (submitted.length !== 0) {
        if (submittedText !== '') {

            // Make a p element and add the submitted text to it (the value of what the user has typed into the text area)
            // The Document.createElement() method creates the HTML element specified by tagName, hereby 'p'
            // Then append the text content of new user input/text entered and its descendants via textContent
            // Let this text content be equal to the submitted text, we already have a reference
            var newUserInput = document.createElement('p');
            newUserInput.textContent = submittedText;
            savedText.appendChild(newUserInput);

            // Erase user's text from the textarea
            textArea.value = '';
        }
        // Stop the browser's default behaviour. By default, when a "button" within a "form"
        // element is clicked, the form gets submitted, resulting in a page reload (which we don't want)
        event.preventDefault();
    });

}


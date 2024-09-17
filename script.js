var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        // Name validation: 10 characters max, alphabets only
        if (!/^[A-Za-z]{1,10}$/.test(name)) {
            alert('Name must be alphabetic and up to 10 characters long.');
            return;
        }
        // Generating HTML content
        var resumeHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <h2>Education</h2>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <h2>Experience</h2>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <h2>Skills</h2>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n            <h2>Description</h2>\n            <p><strong>Description:</strong> ").concat(description, "</p>\n        ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form and/or output element not found');
}

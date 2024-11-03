const serviceID = 'service_hi4zevi';
const templateID = 'template_nj9xvd7'; 
const publicKey = 'oLM4xowpzvnN0Y1n1'; 

document.getElementById('yourFormId').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm(service_hi4zevi, template_nj9xvd7, this, oLM4xowpzvnN0Y1n1)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});

document.getElementById('poster-section').onclick = function() {
    alert("Send Miss Know It All a letter with your questions!");
};

/Miss-Know-It-All-Column
│
├── index.html        # Main HTML file (the homepage)
├── styles.css        # CSS file for styling
└── script.js         # JavaScript file for interactivity

const serviceID = 'service_hi4zevi'; 
const templateID = 'template_nj9xvd7';  
const publicKey = 'oLM4xowpzvnN0Y1n1'; 

document.getElementById('problemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        from_email: this.from_email.value,
        message: this.message.value,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});


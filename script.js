window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

function sendEmail() {
  var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  // Convert the form data to a JSON string
  var jsonData = JSON.stringify(formData);

  fetch('your_email_handler_endpoint', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: jsonData,
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      // Handle the response from the server
      console.log('Server response:', data);
      // You can update the UI or show a confirmation message here
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
}
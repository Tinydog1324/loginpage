document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting normally
    const username = document.getElementById('username').value;
    window.location.href = `test.html?username=${username}`; // redirect to home.html with username parameter in URL
  });
  
  // On the home.html page
 
  



const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        const responseData = await response.json();
        const errors = responseData.errors;
        

        for (let i = 0; i < errors.length; i++) {
          const errorDiv = document.createElement('div');
          errorDiv.className = 'notification is-danger';
        
          const error_messages = {
            'Validation isEmail on email failed': 'The email address you entered does not seem to be valid. Please try again with a valid email address.',
            'Validation len on password failed' : "The password should be atleast 8 charachtors in length",
            'email must be unique' : 'The email address you have entered already registered please login or signup with different email'
          };
          const errorMessage = error_messages[errors[i].message] || errors[i].message;
        
          errorDiv.innerHTML = `
            <h1> ${errorMessage}</h1>
          `;
          document.querySelector('.error-message').appendChild(errorDiv);
        
          setTimeout(function() {
            errorDiv.remove();
          }, 4000);
        } 
        
  
    }
  };
}
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
    
    




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

        for(i = 0 ; i < errors.length ; i++) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'notification is-danger';
            errorDiv.innerHTML = `
              <button class="delete"></button>
              <h1> ${errors[i].message}</h1>
            `;
            document.querySelector('.error-message').appendChild(errorDiv);
        }   

      
    }
  };
}
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
    
    

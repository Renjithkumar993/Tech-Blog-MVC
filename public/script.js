


  // document.querySelector('.signup-form').addEventListener('submit', async (event) => {
  //   event.preventDefault();

  
  //   const username = document.querySelector('#username-signup').value.trim();
  //   const email = document.querySelector('#email-signup').value.trim();
  //   const password = document.querySelector('#password-signup').value.trim();
  
  //   // Validate the user's input
  //   if (username.length < 3) {
  //     return document.querySelector('#signup-error-message').textContent  = 'Password must be at least 8 characters long'
  //   }
  
  //   if (!isValidEmail(email)) {
  //     return document.querySelector('#signup-error-message').textContent  = 'Password must be at least 8 characters long'
  //   }
  
  //   if (password.length < 8) {
  //     return  document.querySelector('#signup-error-message').textContent  = 'Password must be at least 8 characters long'
  //   }
  
  //   try {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify({ username, email, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (!response.ok) {
  //       const data = await response.json();
  //       throw new Error(data.message);
  //     }
  
  //     document.location.replace('/');
  //   } catch (error) {
  //     displayError(error.message);
  //   }
  // });
  
  // const displayError = (message) => {
  //   const errorEl = document.querySelector('#error');
  //   errorEl.textContent = message;
  // };
  
  // const isValidEmail = (email) => {
  //   // Use a regular expression to validate the email address
  //   const emailRegex = /^\S+@\S+\.\S+$/;
  //   return emailRegex.test(email);
  // };
const postcommentbutton = document.querySelector(".postcommentbutton");
  
  postcommentbutton.addEventListener("click", async function(event) {

    const postcommetData = document.querySelector("#commentData").value
    event.preventDefault();
    console.log("Button clicked!");
    console.log(postcommetData)

    if (postcommetData) {
      const response = await fetch('/posts/:id', {
        method: 'POST',
        body: JSON.stringify(postcommetData),
        headers: { 'Content-Type': 'application/json' },
      })
   
    if (response.ok) {
    } else {
      alert('Failed to log in.');
    }

  }
  });
  
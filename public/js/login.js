


const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/logingg', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  if (response.ok) {
      document.location.replace("/");
    } else {
      const responseData = await response.json();
      const errors = responseData.message
      console.log(errors)
        const errorDiv = document.createElement("div");
        errorDiv.className = "notification is-danger has-text-white is-size-5";
        errorDiv.innerHTML = `
              <h1> ${errors}</h1>
            `;
        document.querySelector(".error-message").appendChild(errorDiv);
        setTimeout(function () {
          errorDiv.remove();
        }, 4000);
      }
    }
  }

document
  .querySelector('.login')
  .addEventListener('click', loginFormHandler);


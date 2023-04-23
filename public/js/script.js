document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cardToggles = Array.prototype.slice.call(
    document.querySelectorAll(".card .card-header-icon"),
    0
  );
  if (cardToggles.length > 0) {
    cardToggles.forEach((el) => {
      el.addEventListener("click", () => {
        const cardContent =
          el.parentNode.parentNode.querySelector(".card-content");
        cardContent.classList.toggle("is-hidden");
      });
    });
  }
})

  $(document).ready(function() {
    $(".postcommentbutton").click(async function(event) {
      const postcommetData = $("#commentData").val();
  
      event.preventDefault();
  
      if (postcommetData) {
        const response = await fetch(`${window.location.pathname}`, {
          method: "POST",
          body: JSON.stringify({ postcommetData }),
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          window.location.href = `${window.location.pathname}`;
        } else {
          alert("can not post.");
        }
      }
    });
  });
  

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

$(".createnewpost").click(function () {
  $(".newpostarea").removeClass("hide");
  $(".createnewpost").addClass("hide");
});

$(".newpostrequest").click(async (event) => {
  event.preventDefault();
  postContent = $("#newpostcontent").val();
  postTitle = $("#newposttitle").val();
  const sendDate = new Date();

  if (postTitle && postContent) {
    const response = await fetch("/dashboard", {
      method: "POST",
      body: JSON.stringify({ postContent, postTitle, sendDate }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.href = `${window.location.pathname}`;
    } else {
      alert("can not post.");
    }
  }
});

$(".deletepost").click(async function (event) {
  const idiwant = $(this).attr("id");

  event.preventDefault();


  const response = await fetch(`/dashboard/${idiwant}`, {
    method: "DELETE",
    body: "",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    window.location.href = `${window.location.pathname}`;
  } else {
    alert("can not post.");
  }
});

$(".updatepost").click(async function (event) {
  const idiwant = $(this).closest(".container").find(".deletepost").attr("id");
  event.preventDefault();
  var texttitle = $(this).closest(".container").find("#texttitle").text();
  var textcontent = $(this).closest(".container").find("#textcontent").text();
  const sendDate = new Date();

  if (textcontent || texttitle) {
    const response = await fetch(`/dashboard/${idiwant}`, {
      method: "PUT",
      body: JSON.stringify({ textcontent, texttitle, sendDate }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.href = `${window.location.pathname}`;
    } else {
      alert("can not post.");
    }
  }
});


$(".deleteComment").click(async function(event){
  const id = $(this).attr("id")
  event.preventDefault();
  const response = await fetch(`/post/comment/${id}`, {
    method: "DELETE",
    body: "",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    window.location.href = `${window.location.pathname}`;
  } else {
    alert("can not post.");
  }

})


// Make a fetch request to retrieve the session data
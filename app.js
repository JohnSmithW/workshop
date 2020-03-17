document.querySelector(".registration-form").onsubmit = function(event) {
  event.preventDefault();
  const username = event.target.querySelector('input[name="username"]').value;
  const email = event.target.querySelector('input[name="email"]').value;
  console.log("submit", username, email);



  const userData = {
    username: username,
    email: email
  }

  fetch('http://localhost/user-register', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

window.onload = function() {
  // this.fetch('http://localhost/users')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(userData) {
  //     userList.innerHTML += '<div class="user"><strong>' + users.username + '</strong><div>' + users.email + '</div></div>'
  //   });

  fetch('http://localhost/users')
    .then(
      function(response) {
        response.json().then(function(userData) {
          userData.forEach(user => {
            var userList = document.querySelector('.user-list').innerHTML += '<div class="user"><p> <strong>' + user.username +
              '</strong> <span>: ' + user.email +
              '</span> </p></div>';
          });
        });
      }
    )
};
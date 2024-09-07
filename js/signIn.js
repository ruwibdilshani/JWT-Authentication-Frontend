
function userLogIn() {
  event.preventDefault();

  //define variables
  var email = $('#email').val();
  var password = $('#password').val();

  console.log({

    email: email,
    password: password
  });

  //create ajax request
  $.ajax({
    url: 'http://localhost:8080/api/v1/auth/register/authenticate',
    method: 'POST',
    contentType: "application/json",
    "data":JSON.stringify({
      email: email,
      password: password
    }),
    // error handling
    success: function(response) {
      console.log(response);
      clearFields();
      alert(response.message);
      window.location.href = "dashboard.html";
    },
    error: function(error) {
      console.log(error);
      alert(error.responseJSON.message);
    }
  });

}

function clearFields() {
 
  $('#email').val('');
  $('#password').val('');
}

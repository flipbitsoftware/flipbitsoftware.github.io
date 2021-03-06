// Wait for the DOM to be ready
$(document).ready(function () {
  $("#sendemail").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      fullname: {
        required: true,
        minlength: 7
      },
      messagetext: {
        required: true,
        minlength: 30
      },
      contactemail: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      }
    },
    // Specify validation error messages
    messages: {
      fullname: "Please enter your fullname (not less than 7 symbols)",
      messagetext: "Please enter message body (min: 30 symbols)",
      contactemail: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
        var vals = $(form).serialize();

        $.ajax({
            url: "https://tpopyh9im4.execute-api.us-east-1.amazonaws.com/Prod/send-email",
            contentType: false,
            processData: false,
            crossDomain:true,
            method: "POST",
            data: vals
        }).done(function() {
          alert("Thank you!");
        }).fail(function() {
          alert("Thank you!");
        });

        return false; // prevent from submit
    }
  });
});
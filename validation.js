/*jshint esversion: 6 */
$(function () {

  $.validator.setDefaults({
    highlight: function (element) {
      $(element).closest(".form-group").addClass("has-error");
    }
  });

  $.validator.addMethod('strongPassword', function (value, element) {
    return this.optional(element) || value.length >= 6 && /\d/.test(value) && /[a-z]/i.test(value);
  }, 'Your password must be at least 6 characters long and contain at least one number and one char\'.');

  $("#register-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      firstName: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      lastName: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      password: {
        required: true,
        strongPassword: true
      },
      password2: {
        required: true,
        equalTo: "#password"
      }
    },
    messages: {
      email: {
        required: "Email cannot be empty",
        email: "Looks like this is not an email"
      },
      firstName: {
        required: "First name cannot be empty",
        nowhitespace: "First name only please",
        lettersonly: "Please enter letters only"
      },
      lastName: {
        required: "Last name cannot be empty",
        lettersonly: "Please enter letters only"
      },
      password: {
        required: "Password cannot be empty"
      }
    }
  });

});
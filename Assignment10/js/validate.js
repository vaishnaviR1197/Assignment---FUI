$(document).ready(function() {
    $("#welcome").validate({
      rules: {
        firstName : {
          required: true,
          minlength: 1
        },
        lastName: {
          required: true,
          minlength: 1
        },
        city: {
          required: true,
          minlength: 1
        },
           },
      messages : {
        errFirstName: {
          minlength: "FirstName is required"
        },
        errLastName: {
          minlength: "LastName is required"
        },
        errCity:{
          minlength:"City is required"
        },
        
      }
    });
  });
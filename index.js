     //   the function validationNull use validation in page index.html in line 60
     function validationNull(textEmail, textPass) {
         if (textEmail == "") {
             $("#error-email").text("Plese Input Email");
             $("#email").focus();
             event.preventDefault();
         } else if (textPass == "") {
             $("#error-password").text("Plese Input Password");
             $("#password").focus();
             event.preventDefault();
         } else {
             if (ValidateEmail(textEmail) == true) {
                 alert("log in succesfull");
             } else {
                 alert("Email Invalid please try again");
             }
         }

     }

     //   the function validationNullRegister use validation in page Register.html in line 63
     function validationNullRegister(textEmail, textPass, textconfirm) {
         if (validationNull(textEmail, textPass)) {

         } else if (textconfirm == "") {
             $("#error-confirm").text(" Please Enter confirm Password");
             $("#confirm").focus();
             event.preventDefault();
         } else {
             if (ValidateEmail(textEmail) == true) {
                 if (textPass == textconfirm) {
                     alert("Register successfull");
                 } else {
                     alert("Invalid confirm password");
                     event.preventDefault();
                 }
             } else {
                 alert("Register not complete please try again");
             }

         }

     }

     function ValidateEmail(inputText) {
         var mailformat = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z]{2,10})(.[a-z]{2,10})?$/;
         //show email : maiveasna123@gmail.com.coo Or Mai.veasna@gmail.com
         if (inputText.match(mailformat)) {
             return true;
         } else {
             return false;
         }
     }
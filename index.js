class conditionform {

    static validationNull(textEmail, textPass) {
        if (textEmail == "") {
            // $("#error-email").text("Plese Input Email");
            //$("#email").focus();
            alert("Please Enter Email")
            event.preventDefault();
        } else if (textPass == "") {
            // $("#error-password").text("Plese Input Password");
            // $("#password").focus();
            alert("please Enter Password");
            event.preventDefault();
        }

    }
    static labelError(lbelName, textMessage) {
        document.getElementById(lbelName).innerHTML = textMessage;
    }
}
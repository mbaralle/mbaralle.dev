function sendMessage() {
    var name = document.getElementById("contact_form_name");
    var email = document.getElementById("contact_form_email");
    var message = document.getElementById("contact_form_message");

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (name.value != null && name.value != "" &&
    	emailReg.test(email.value) &&
    	message.value != null && message.value != "") {
        document.getElementById("submit_contact_form").click();

    	name.value = null;
    	email.value = null;
    	message.value = null;

    	document.getElementById("contact_form_error").style.display = "none";
    	document.getElementById("contact_form_return").style.display = "block";
    } else {
    	document.getElementById("contact_form_return").style.display = "none";
    	document.getElementById("contact_form_error").style.display = "block";
    }
}
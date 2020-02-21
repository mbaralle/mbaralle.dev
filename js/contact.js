function sendMessage() {
	const XHR = new XMLHttpRequest();
	const FD = new FormData(form);
	XHR.addEventListener("load", function(event) {
		alert(event.target.response.getElementsByTagName("h1")[0].innerText);
		if (XHR.status === 200) {
			alert("Message sent");
		} else {
			alert("Failed to send message");
		}
		
	});
	XHR.addEventListener("error", function(event) {
		alert('Oops! Something went wrong.');
	});
	
	XHR.open("POST", "https://formspree.io/xqkqnkvo");
	XHR.responseType = "document";
	XHR.send(FD);
}

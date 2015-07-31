var sendToMixpanel{
	var email = (document.getElementById("email").value);
	mixpanel.track("nuevo email", {
		email: email;
		timestamp: Date.now();
	})
}
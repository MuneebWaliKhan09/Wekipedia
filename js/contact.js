let EmailButton = document.getElementById("sendMail");
let form = document.getElementById("form");

EmailButton.addEventListener('click', function(e){
	e.preventDefault();
	EmailButton.value = 'Sending...';
	const serviceID = 'default_service';
	const templateID = 'template_m8kg828';
 
	emailjs.sendForm(serviceID, templateID, form)
	 .then(() => {
		EmailButton.value = 'Send Email';
	   alert('Sent!');
	 }, (err) => {
		EmailButton.value = 'Send Email';
	   alert(JSON.stringify(err));
	 });
})

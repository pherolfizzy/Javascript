
function validation(email, password) {
	const validEmail = "kafeerofaizo@gmail.com"
	const validPassword = 2100707114

	if (validEmail ==="kafeerofaizo@gmail.com" && validPassword === 2100707114) {
		console.log(`user email is ${validEmail}, login successfully!`);
	} else {
		console.log ("incorrect crediations!")
	}
}
validation("kafeerofaizo@gmail.com", 2100707114);
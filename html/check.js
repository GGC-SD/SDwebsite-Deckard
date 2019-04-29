
function check(form) {
 if(form.username.value == "admin" && form.password.value == "password")
	{
		window.open("adminHomepage.html")
		window.close()
		}
		else
		{
			alert("Incorrect Username or Password.  Try again")
			}
}
	
			
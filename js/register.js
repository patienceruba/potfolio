//validating registration
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').onclick = function (argument) {
		let firstname = document.querySelector('#firstname').value;
		let lastname = document.querySelector('#lastname').value;
		let username = document.querySelector('#username').value;
		let email = document.querySelector('#email').value;
		let password1 = document.querySelector('#password').value;
		let password2 = document.querySelector('#password2').value;
		if(firstname !== '' && lastname !== '' && username !== '' && email !== '' && password1 !== '' && password2 !== ''){
			if(password1===password2){
				confirm(`next time remember me`);
			}
			else{
				alert('password1 and password2 doesn\'t match');
			}
			
		}
		else{
			alert(`fill all required filds!`);
		}
	}
})
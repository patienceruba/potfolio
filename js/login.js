//validating login form
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').onclick = function (argument) {
		let username = document.querySelector('#username').value;
		if(username !== ''){
			confirm(`next time remember me`);
		}
		else{
			alert(`username cant be null`);
		}
	}
})


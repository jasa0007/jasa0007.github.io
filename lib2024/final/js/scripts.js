var form = document.getElementById("infoBox"); 
		function handleForm(event) { event.preventDefault(); } 
		form.addEventListener('submit', handleForm);
		function javascriptInteractivity(){
			var name = document.getElementById('name');
			var email = document.getElementById('email');
			var address = document.getElementById('address');
			var city = document.getElementById('city');
			var province = document.getElementById('province');
			var postcode = document.getElementById('postcode');
			var newName = document.getElementById('inputName');
			var newEmail = document.getElementById('inputEmail');
			var newAddress = document.getElementById('inputAddress');
			var newCity = document.getElementById('inputCity');
			var newProvince = document.getElementById('inputProvince');
			var newPostcode = document.getElementById('inputPostCode');
			name.innerHTML = newName.value;
			email.innerHTML = newEmail.value;
			address.innerHTML = newAddress.value;
			city.innerHTML = newCity.value;
			province.innerHTML = newProvince.value;
			postcode.innerHTML = newPostcode.value;
		}
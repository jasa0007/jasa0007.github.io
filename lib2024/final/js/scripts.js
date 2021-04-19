var form = document.getElementById("infoBox"); 

function formSubmiter(event) {event.preventDefault();} 

form.addEventListener('submit', formSubmiter);

function variableHandalerJS(){
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var address = document.getElementById('address');
	var city = document.getElementById('city');
	var province = document.getElementById('province');
	var postCode = document.getElementById('postCode');
	var changedName = document.getElementById('userName');
	var changedEmail = document.getElementById('userEmail');
	var changedAddress = document.getElementById('userAddress');
	var changedCity = document.getElementById('userCity');
	var changedProvince = document.getElementById('userProvince');
	var changedPostCode = document.getElementById('userPostCode');

name.innerHTML = changedName.value;
email.innerHTML = changedEmail.value;
address.innerHTML = changedAddress.value;
city.innerHTML = changedCity.value;
province.innerHTML = changedProvince.value;
postCode.innerHTML = changedPostCode.value;
	}

		
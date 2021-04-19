//submit button action
var submitBox = document.getElementById("infoBox"); 
// prevent invaild inputs
function formSubmiter(event) {event.preventDefault();} 
// add event listener to submit button
submitBox.addEventListener('submit', formSubmiter);

// handle all var input boxes along with user added inputs
function variableHandalerJS(){
	// variable declerations of user elements
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
// assign user input values into new values to display
name.innerHTML = changedName.value;
email.innerHTML = changedEmail.value;
address.innerHTML = changedAddress.value;
city.innerHTML = changedCity.value;
province.innerHTML = changedProvince.value;
postCode.innerHTML = changedPostCode.value;
	}

// the javascript validator is checking only the relations in this js file
// it is not counting the one in the html where the variableHandalerJs is connected too
		
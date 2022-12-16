const body = document.querySelector('body');

const fullName = document.querySelector('#name');
const idCard = document.querySelector('#id_card');
const dateOfBirth = document.querySelector('#birthday');
const group = document.querySelector('#group');
const email = document.querySelector('#email');
const formOutput = document.querySelector(".form-output");

// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}



function validateName(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const nameRegex = /^[A-ZА-ЯІЇЄ][a-zA-ZА-ЯІЇЄа-яіїє]+ [A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/;
	const name = input.value.trim();
	if (!nameRegex.test(name)) {
		return showError(input, invalidMsg);
	}
	return true;
}

function validateGroup(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const groupRegex = /^[A-ZА-ЯІЇЄ][a-zA-ZА-ЯІЇЄа-яіїє]+-\d{2}$/;
	const group = input.value.trim();
	if (!groupRegex.test(group)) {
		return showError(input, invalidMsg);
	}
	return true;
}

function validateID(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const idRegex = /^[A-ZА-ЯІЇЄ]{2} №\d{6}$/;
	const id = input.value.trim();
	if (!idRegex.test(id)) {
		return showError(input, invalidMsg);
	}
	return true;
}

function validateBirthday(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const birthdayRegex = /^\d{2}.\d{2}.\d{4}$/;
	const birthday = input.value.trim();
	if (!birthdayRegex.test(birthday)) {
		return showError(input, invalidMsg);
	}
	return true;
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}




const form = document.querySelector("#reg");

const NAME_REQUIRED = "Please enter your name";
const GROUP_REQUIRED = "Please enter your group";
const ID_REQUIRED = "Please enter your ID-card";
const BIRTHDAY_REQUIRED = "Please enter your birthday";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const NAME_INVALID = "Please enter a correct name format";
const GROUP_INVALID = "Please enter a correct group format";
const ID_INVALID = "Please enter a correct ID-card format";
const BIRTHDAY_INVALID = "Please enter a correct birthday format";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = validateName(form.elements["name"], NAME_REQUIRED, NAME_INVALID);
    let groupValid = validateGroup(form.elements["group"], GROUP_REQUIRED, GROUP_INVALID);
    let idValid = validateID(form.elements["id_card"], ID_REQUIRED, ID_INVALID);
    let birthdayValid = validateBirthday(form.elements["birthday"], BIRTHDAY_REQUIRED, BIRTHDAY_INVALID);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid && groupValid && idValid && birthdayValid) {

		formOutput.innerHTML = '';
		const outputData = `
				<h3>Введені дані:</h3>
					<ul>
					   <li>ПІБ: <span>${fullName.value}</span></li>
					   <li>Група: <span>${group.value}</span></li>
						<li>ID-card: <span>${idCard.value}</span></li>
						<li>Дата народження: <span>${dateOfBirth.value}</span></li>
						<li>e-mail: <span>${email.value}</span></li>
					</ul>
		`;
		formOutput.insertAdjacentHTML('afterbegin', outputData);
	
		fullName.value = '';
		idCard.value = '';
		dateOfBirth.value = '';
		group.value = '';
		email.value = '';
		
		return false;
	};
	
});

function createTable() {
	const body = document.querySelector('body');
	const table = document.querySelector('.table');
	for (let i = 0; i < 6; i++) {
	  const rowElement = document.createElement('tr');
	  for (let j = 0; j < 6; j++) {
		const cellElement = document.createElement('td');
		const cellValue = j + 1 + i * 6;
		cellElement.innerHTML = cellValue;
		cellElement.id = cellValue;
		rowElement.appendChild(cellElement);
	  }
	  table.appendChild(rowElement);
	}
  }
  createTable();
  
  const myvariant = 8;
  const myelement = document.getElementById(myvariant);
  
  function changeColorRandom(myelement) {
	myelement.style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
  }
  
  function click(myelement) {
	const color = document.getElementById('colors');
	myelement.style.backgroundColor = color.value;
  }
  
  function doubleclick() {
	const startColumn = myvariant % 6;
	for (let j = startColumn - 1; j < 6; j+=2) {
	  for (let i = 0; i < 6; i++) {
		const currentElement = document.getElementById(j + 1 + i * 6);
		currentElement.style.background = document.getElementById('colors').value;
	  }
	}
  }
  myelement.onmouseover = () => {
	changeColorRandom(myelement);
  }
  myelement.onmouseup = () => {
	click(myelement);
  }
  myelement.ondblclick = () => {
	doubleclick();
  }
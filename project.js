const table = document.getElementById("table");
const form = document.getElementById("registration-form");
const btn = document.getElementById("button");
const Logo = document.getElementById("logoid");
function submitData(event) {
	event.preventDefault();
	//Get inputs from the form and store in variables
	let firstname = document.getElementById("fname").value;
	let lastname = document.getElementById("lname").value;
	let email = document.getElementById("email").value;
	let number = document.getElementById("phno").value;
	let role = document.getElementById("role").value;
	let gender = document.getElementById("gender").value;
	const joindate = document.getElementById("date").value;
	const date = joindate.split("-").reverse().join("-");
	const message = document.getElementById("review").value;
	// const message = JSON.parse(obj_message);

	const fullname = firstname + " " + lastname;

	//Create new table row(tr)
	const student_tr = document.createElement("tr");

	//Create new table data (td)
	const fullname_td = document.createElement("td");
	const email_td = document.createElement("td");
	const number_td = document.createElement("td");
	const role_td = document.createElement("td");
	const gender_td = document.createElement("td");
	const date_td = document.createElement("td");
	const review_td = document.createElement("td");

	//push inputs to new table data (td)
	fullname_td.textContent = fullname;
	email_td.textContent = email;
	number_td.textContent = number;
	role_td.textContent = role;
	gender_td.textContent = gender;
	date_td.textContent = date;
	review_td.textContent = message;

	//push table data(td) into table row(tr)
	student_tr.appendChild(fullname_td);
	student_tr.appendChild(email_td);
	student_tr.appendChild(number_td);
	student_tr.appendChild(gender_td);
	student_tr.appendChild(role_td);
	student_tr.appendChild(date_td);
	student_tr.appendChild(review_td);

	//push table row(tr) into table
	table.appendChild(student_tr);

	//clear all input fields after submitting form
	form.reset();

	//set time to alert after submitting form
	setTimeout(() => {
		alert("Form Submitted Successfully");
	}, 1000);
}

//change the styles of submit button
btn.style.backgroundColor = "white";
btn.style.padding = "5px 30px";
btn.style.marginLeft = "15vh";
btn.style.border = "2px solid black";
btn.style.borderRadius = "35px";
btn.style.fontSize = "20px";

//change color of submit button while mouse enters  submit button area
btn.onmouseover = () => {
	btn.style.backgroundColor = "pink";
};
//change color of submit button while mouse leaves submit button area
btn.onmouseout = () => {
	btn.style.backgroundColor = "white";
};

//set border for logo
Logo.style.border = "1px solid aqua";

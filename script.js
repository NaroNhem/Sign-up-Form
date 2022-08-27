let fields = {};

let create = document.getElementById("create");

let isEmail = (email) => {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

const error = document.getElementById('error');

let formValidate = () => {
    email = isEmail(fields.email);
    for (let value in fields){
        if (fields[value] == "") {
            alert("Please fill in all fields before submitting.");
            break;
        }else if (!email) {
            alert("Please enter a valid email.");
            break;
        } else if (fields.password != fields.confirmPass){
            error.innerHTML = "*Passwords do not match";
            break;
        }
        else if ((fields.password.length && fields.confirmPass.length) < 8 ) {
            error.innerHTML = "*Password is too short";
        } else {
            alert("account created successfully!");
            error.innerHTML = "";
            break
        }
    }
}
   

create.addEventListener('click', (e) => {
    fields.firstName = document.getElementById("firstName").value;
    fields.email = document.getElementById("email").value;
    fields.password = document.getElementById("password").value;
    fields.lastName = document.getElementById("lastName").value;
    fields.phoneNumber = document.getElementById("phoneNumber").value;
    fields.confirmPass = document.getElementById("confirmPass").value;
    formValidate();
})
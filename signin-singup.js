const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function validationformsignup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Reset error messages
    document.getElementById('error-mes').innerHTML = '';
    document.getElementById('error-mess').innerHTML = '';
    document.getElementById('error-messs').innerHTML = '';
   


    // Check name
    if (name === '') {
        document.getElementById('error-mes').innerHTML = "Enter Your name";
        return false;
    }

    // Check email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-mess').innerHTML = "Invalid email";
        return false;
    }


    // Check password
    if (password === '') {
        document.getElementById('error-messs').innerHTML = 'Enter the password';
        return false;
    }else if (password.length<6){
        document.getElementById('error-messs').innerHTML = "Password must be at least 6 characters long";
        return false;
    }

   // If all validations pass, return true
   alert("Wellcome Book My Ticket ")
   return true;
}
function validationformsignIn(){
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;

    document.getElementById('err').innerHTML = '';
    document.getElementById('erro').innerHTML = '';

    //signin
    var emailRegexs = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegexs.test(Email)) {
        document.getElementById('err').innerHTML = "Invalid Email";
        return false;
    }

    //password
    if (Password === '') {
        document.getElementById('erro').innerHTML = 'Enter the password';
        return false;
    }else if (Password.length<6){
        document.getElementById('erro').innerHTML = "Password must be at least 6 characters long";
        return false;
    }

    // If all validations pass, return true
    alert("Wellcome Back ")
    return true;
   
}

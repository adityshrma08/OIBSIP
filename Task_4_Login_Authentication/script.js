let users = {};
function showRegister(){
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';

}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function register(){
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const regError = document.getElementById('reg-error');

    if(username === "" || password === ""){
        regError.textContent = "please fill in all fields.";
        return;
    }
    if(users[username]){
        regError.textContent = "Username already taken.";
    }else {
        users[username] = password;
        regError.textContent = "Registration successfull you can login.";
        showLogin();
    }
}

function login(){
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');

    if(users[username] && users[username] === password){
        loginError.textContent = "";
        alert("Login successfull Welcome," + username);
        window.location.href = "secure.html";
    }
    else{
        loginError.textContent = "Invalid username or password";
    }
}
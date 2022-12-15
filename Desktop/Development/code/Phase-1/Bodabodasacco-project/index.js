function fetchUserInfo() {
    fetch("http://localhost:3000/userInfo")
        .then((resp) => resp.json())
        .then(getInfo)
}

function getInfo(userInfo) {

    const emailInput = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;
    const loginBtn = document.getElementById('loginBtn')
    //const loginForm = document.getElementById('loginPrompt')
    //const welcome = document.getElementById('welcomeMsg')


    for (i = 0; i < users.length; i++) {
        if (emailInput == userInfo[i].email && password == userInfo[i].password) {
            //welcome.innerHTML= ('Welcome '+ username )
            //signIn.remove();
            //loginForm.remove();
            alert("ok")
            return;
        }
    }
    alert('incorrect username or password')
}

const login = document.getElementById('loginBtn')
login.addEventListener('click', (event) => {
    event.preventDefault();
    fetchUserInfo();
})
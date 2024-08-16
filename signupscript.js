function valueaccept()
{
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#pass").value;
    if (email && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email)) {
            alert('User already exists!');
        } else {
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
        }
    } else {
        alert('Please enter both email and password.');
    }
    
       
    
}


function login()
{
    window.open('index.html');
}
function logindeatils()
{
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#pass").value;
    if (email && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Login successful!');
            document.querySelector("#butt").addEventListener('click',()=>{
                window.open('question.html','_blank');
            })
        } else {
            alert('Invalid email or password.');
        }
   
    }
}

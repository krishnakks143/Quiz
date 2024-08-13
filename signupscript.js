function valueaccept()
{
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    localStorage.setItem(email,pass);
    console.log(email);
    console.log(pass);
    window.alert("Successful Register");
}
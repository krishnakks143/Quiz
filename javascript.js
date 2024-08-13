function logindeatils()
{
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    let chek=localStorage.getItem(email);
    if(pass!=chek) window.alert("User Not Found")
}

let username=document.getElementById('username');
let password=document.getElementById('password');

function validateCred()
{
    if(username.value=="admin" && password.value=="1234"){
        //console.log("Valid Credential");
        alert('Login Successful! Redirecting..');
        return true;
        // setTimeout(function(){
        //     window.location.href="https://www.google.com";
        // },2000);
    
    }
    else{
         alert('Invalid Credentials! Please try again!')
        //console.log("Incorrect");
        username.value="";
        password.value="";
        return false;
    }
}

// document.getElementById("login-form").addEventListener("submit",validateCred);



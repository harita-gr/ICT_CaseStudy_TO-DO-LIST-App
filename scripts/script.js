

function login(callback){

    let username=document.getElementById('username');
    let password=document.getElementById('password');

    var result=callback(username,password);    
    return result;
}

function validateCred(u,p)
    {
        if(u.value=="admin" && p.value=="12345"){
            //console.log("Valid Credential");
            alert('Login Successful! Redirecting..');
            return true;
        }
        else{
            alert('Invalid Credentials! Please try again!')
           //console.log("Incorrect");
           username.value="";
           password.value="";
           return false;
    }
}
var accountRepo = require('../../../repos/accountRepo');

function reg_Validation()
{
    var username = document.registration.username;
    var username_err = document.getElementById('username_error');
    var password = document.registration.password;
    var password_err = document.getElementById('password_error');
    var email = document.registration.email;
    var email_err = document.getElementById('email_error');
    var name = document.registration.name;
    var name_err = document.getElementById('name_error');

    if(username_validation(username,5,30))
    {   username_error.textContent ="";
        if(password_validation(password,8,30))
        {
            password_error.textContent ="";
            if(email_validation(email))
            {
                email_error.textContent ="";
                if(name_validation(name))
                { 
                    name_error.textContent ="";
                    return true;
                    
                   
                }
            }
        }
    }
    return false;
}

function username_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        username_error.textContent ="Username should not be empty / length be between "+mx+" to "+my;
        uid.focus();
        return false;
    }
    var letters = /^[A-Za-z0-9]+$/;
    
    if(uid.value.match(letters))
    {
        return true;
    }
    else
    {
        username_error.textContent = "Username must have alphabet characters only";
        uid.focus();
        return false;
    }
    accountRepo.exist("ochimot2").then(value => {
        console.log( value[0].f_ID);
     });
    accountRepo.exist(uid.value).then(value => {
        console.log(uid.value);
        console.log("hi");
    });
}
function password_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        password_error.textContent ="Password should not be empty / length be between "+mx+" to "+my;
        passid.focus();
        return false;
    }
    
    return true;
}
function email_validation(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        email_error.textContent ="You have entered an invalid email address!";
        return false;
    }
 }
 function name_validation(name)
{
    
    var letters = /^[A-Za-z]+$/;
    
    if(name.value.match(letters))
    {
        return true;
    }
    else
    {
        name_error.textContent = "First must have alphabet characters only";
        uid.focus();
        return false;
    }
    
    
}

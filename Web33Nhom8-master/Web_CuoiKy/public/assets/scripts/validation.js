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
function log_Validation()
{
    var username = document.login.username;
    var log_username_err = document.getElementById('log_username_error');
    var password = document.login.password;
    var log_password_err = document.getElementById('log_password_error');
    if(log_username_validation(username,5,30))
    {
        log_username_error.textContent ="";
        if(log_password_validation(password,8,30))
        {
            log_password_error.textContent ="";
        }
    }
    return false;
}
function log_username_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        log_username_error.textContent ="Username should not be empty / length be between "+mx+" to "+my;
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
        log_username_error.textContent = "Username must have alphabet characters only";
        uid.focus();
        return false;
    }
    
}
function log_password_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        log_password_error.textContent ="Password should not be empty / length be between "+mx+" to "+my;
        passid.focus();
        return false;
    }
    
    return true;
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
    
    var letters = /^[A-Za-z0-9]+$/;
    
    if(name.value.match(letters))
    {
        return true;
    }
    else
    {
        name_error.textContent = "Username must have alphabet characters only";
        uid.focus();
        return false;
    }
    
    
} 
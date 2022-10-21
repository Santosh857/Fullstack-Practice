function validate(){
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    if (user ==""){
        document.getElementById('user_message').innerHTML = "Please Enter Username"
    }
    if (password == ""){
        document.getElementById('password_message').innerHTML = "Please Enter Vallid Password"
    }

    return false

    butref = document.getElementById('xyz').value;
    butref = false  
}

function buttonEnable(){
 if (user !="" && password !=""){
    document.getElementById("abc").innerHTML= `${<input type="submit"  id="xyz" value="Login" onclick="return validate()"/>}`
 }
 else if (user =="" && password ==""){
    document.getElementById("abc").innerHTML= `${<input type="submit" disabled id="xyz" value="Login" onclick="return validate()"/>}`
 }
 
}   



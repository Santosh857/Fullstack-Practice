let userId = document.getElementById("userid")
    let password = document.getElementById("password")
    let button = document.getElementById("button")
    
    function myFunction() {
        if (userId == "" && password == "") {
            button.disabled = true;

        }
        else if (userId != "" && password == "") {
            document.getElementById("button").disabled = true;

        }
        else if (userId != "" && password != "") {
            document.getElementById("button").disabled = false;
        }
    }
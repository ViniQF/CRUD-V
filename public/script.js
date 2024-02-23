function Login(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if(email == "vini@2101" && senha == "1234"){
        window.location.href = "update.html";
    }else{
        window.location.href = "login.html";
    }
}
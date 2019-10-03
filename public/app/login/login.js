function login() {
    var loginData = {
        "userId": document.getElementById("usr").value,
        "password": document.getElementById("pwd").value
    }
    axios.post(services.loginService, loginData).then((response) => {  
        console.log(response)
        localStorage.setItem('userId', document.getElementById("usr").value)
        window.location=envhost+"/app/home.html";
    }, (error) => {
        document.getElementById("popup").innerHTML=popUp("UnAuthorized","Invalid username or password");
        $('#myModal').modal('show');
       console.log(error);
    });
}
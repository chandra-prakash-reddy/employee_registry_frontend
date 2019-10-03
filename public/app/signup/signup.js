function login(){
    window.location = envhost+"/app/login.html"
}

function signUp(){
    var signUpData={
        "userId":document.getElementById("usrId").value,
        "userName":document.getElementById("usr").value,
        "email":document.getElementById("email").value,
        "password":document.getElementById("pass").value
    }
    axios.post(services.signUpService, signUpData).then((response) => {  
        document.getElementById("popup").innerHTML=popUp("SUCCESS","user signed up : "+signUpData.userName+" please login!");
        $('#myModal').modal('show');
        document.getElementById("usrId").value="";
        document.getElementById("usr").value="";
        document.getElementById("email").value="";
        document.getElementById("pass").value="";     
    },(error) => {
        document.getElementById("popup").innerHTML=popUp("ERROR","Unable to SignUp user ["+document.getElementById("usrId").value+"] user might already exists");
        $('#myModal').modal('show');
       console.log(error);
    });
}
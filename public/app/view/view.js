var employeeId=""

function loadEmployeee(){
    loadUserProfile()
    const urlParams = new URLSearchParams(window.location.search);
    employeeId = urlParams.get('id');
    axios.get(services.viewService + employeeId).then((response) => {
        employee = response.data;
        document.getElementById("userProfile").src=employee.employeeProfileUrl
        document.getElementById("id").innerHTML=employee.employeeId
        document.getElementById("name").innerHTML=employee.firstName +" "+employee.lastName
        document.getElementById("phone").innerHTML=employee.phone
        document.getElementById("email").innerHTML=employee.email
    }, (error) => {
        window.location = envhost+"/app/home.html"
    });
}

function editEmployee(){
    window.location=envhost+"/app/edit.html?id="+employeeId
}
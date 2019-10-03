function loadEmployeeeForEdit(){
        loadUserProfile()
        const urlParams = new URLSearchParams(window.location.search);
        var employeeId = urlParams.get('id');
        axios.get(services.viewService + employeeId).then((response) => {
            var employee=response.data;
            document.getElementById("userProfile").src=employee.employeeProfileUrl;
            document.getElementById("id").value=employee.employeeId;
            document.getElementById("firstname").value=employee.firstName;
            document.getElementById("lastname").value=employee.lastName;
            document.getElementById("phone").value=employee.phone;
            document.getElementById("email").value=employee.email;
            document.getElementById("profileUrl").value=employee.employeeProfileUrl
        }, (error) => {
            window.location = "http//localhost:8000/app/home.html"
        });
}



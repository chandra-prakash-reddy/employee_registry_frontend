const services_host='http://localhost:7878';const ui_host='http://localhost:8000';


const host = services_host+"/"
const envhost= ui_host
var userdetails = {}
const services = {
  "loginService": host + "login",
  "signUpService": host + "signup",
  "createService": host + "create",
  "viewService": host + "employee/",
  "searchService": host + "search",
  "editService": host + "update",
  "getEmployeeService": host + "employees",
  "userService": host + "user/"
}

function getEnvHost(page){
  window.location=envhost+"/app/"+page+".html";
}


function submitProfile(isUpdate) {
  var employee = {
    "employeeId": document.getElementById("id").value,
    "firstName": document.getElementById("firstname").value,
    "lastName": document.getElementById("lastname").value,
    "employeeProfileUrl": document.getElementById("profileUrl").value,
    "email": document.getElementById("email").value,
    "phone": document.getElementById("phone").value,
    "createdBy": localStorage.getItem('userId'),
    "modifiedBy": localStorage.getItem('userId')
  }

  if (isUpdate) {
    axios.post(services.editService, employee).then((response) => {
      document.getElementById("popup").innerHTML = popUp("SUCCESS", "updated employee : " + document.getElementById("id").value + "");
      $('#myModal').modal('show');
    }, (error) => {
      document.getElementById("popup").innerHTML = popUp("ERROR", "Unable to update employee [" + document.getElementById("id").value + "]");
      $('#myModal').modal('show');
      console.log(error);
    });
  } else {
    axios.post(services.createService, employee).then((response) => {
      document.getElementById("popup").innerHTML = popUp("SUCCESS", "created employee : " + document.getElementById("id").value + "");
      $('#myModal').modal('show');
      document.getElementById("id").value = ''
      document.getElementById("firstname").value = ''
      document.getElementById("lastname").value = ''
      document.getElementById("profileUrl").value = ''
      document.getElementById("email").value = ''
      document.getElementById("phone").value = ''
    }, (error) => {
      document.getElementById("popup").innerHTML = popUp("ERROR", "Unable to create employee [" + document.getElementById("id").value + "] user might already exists");
      $('#myModal').modal('show');
      console.log(error);
    });
  }
  console.log(employee)
}


function popUp(title, msg) {
  return `<div class="modal fade"  id="myModal"  tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">`+ title + `</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>`+ msg + `</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`

}

function profileDetails(name) {
  return `<img class="nav-item" onclick="logoutDropDown()" height=25px width=25px src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw9eMKEJEgCDsqWoWTwDC6pcqzADuwsr7Z8ySLOqgmyS4sC5Qp"/>
  <span class="nav-item" onclick="logoutDropDown()">&nbsp` + name + `</span> <div id="profiledropdown"></div>`;
}

function logoutDropDown() {
  document.getElementById("profiledropdown").innerHTML = `<span style="margin-left: 11px;" class="dropdown-item">` + userdetails.email + `</span>
  <span class="dropdown-item" style="margin-left: 11px;" onclick="logout()">logout</span>
  <span style="margin-left: 34px;" onclick="hidedropdown()">close</span>
  `
}

function logout() {
  localStorage.setItem('userId', '')
  window.location = envhost+"/app/login.html"
}

function hidedropdown() {
  document.getElementById("profiledropdown").innerHTML = `<span></span>`
}


function loadUserProfile() {
  var id = localStorage.getItem('userId')
  axios.get(services.userService + id).then((response) => {
    userdetails = response.data;
    console.log(userdetails)
    document.getElementById("profilepic").innerHTML = profileDetails(userdetails.name)
  }, (error) => {
    localStorage.setItem('userId', '')
    window.location = envhost+"/app/login.html"
  });
}
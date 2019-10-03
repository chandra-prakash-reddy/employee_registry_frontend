var config={
    headers:{
        "content-type":"text/plain"
    }
}

function employeeSearch() {
    var searchValue = document.getElementById("employee_search").value
    console.log(searchValue)
    if (parseInt(searchValue.length) > 2) {
        axios.post(services.searchService, searchValue,config).then((response) => {
            employeeList=response.data
            var searchDetailsHtml = '<div  id="searchdetails" class="card"> <div class="card-body">'
            for (var profileIndex = 0; profileIndex < employeeList.length; profileIndex++) {
                var name = employeeList[profileIndex].firstName +" "+employeeList[profileIndex].lastName 
                searchDetailsHtml = searchDetailsHtml + createView(employeeList[profileIndex].employeeProfileUrl,name, employeeList[profileIndex].employeeId)
            }
            searchDetailsHtml = searchDetailsHtml + '</div></div>'
            document.getElementById("showEmployees").innerHTML = searchDetailsHtml
        }, (error) => {
            console.log(error);
        });
    } else {
        var empty = "<span></span>"
        document.getElementById("showEmployees").innerHTML = empty
    }
}

function createView(profile, name, id) {
    return '<div id="employeeprofile"> <img src="' + profile + '" alt="Profile" height="20" width="20"><a href="'+envhost+'/app/view.html?id=' + id + '"> <span class="name" id="' + id + '">' + name + ' (' + id + ')</span></a></div><hr>'
}

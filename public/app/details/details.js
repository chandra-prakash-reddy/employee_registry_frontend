
var page = 1;
var size = 10;
var start;
var config={
    "headers":{
        "accept": "application/json",
        "content-type": "application/json"
    }
}

function loadDetails(){
    loadUserProfile()
    var pageData={
        "page":page-1,
        "size":size
     }
    const urlParams = new URLSearchParams(window.location.search);    
    if(urlParams.get('page')!=undefined & urlParams.get('size')!=undefined){
    page =urlParams.get('page') ;
    size = urlParams.get('size');
    pageData={
        "page":page-1,
        "size":size
     }
   }
   console.log(pageData)
   console.log(services.getEmployeeService)
  axios.post(services.getEmployeeService,pageData,config).then((response) => {   
        console.log(response)
        loadTable(response.data.content,response.data.totalPages)
  },(error) => {
     console.log(error);
  });
}


function loadTable(tableData,totalPages){    
    var table="<table class='table'> <thead> <tr>"
    var columns=Object.keys(tableData[0])
    
    for(var columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        table=table + "<th scope='col'>"+columns[columnIndex]+"</th>"
    }
    
    table=table+"</tr> </thead> <tbody id='mytablecontent'>"

    for(var tableIndex=0;tableIndex<tableData.length;tableIndex++){
        columnData=tableData[tableIndex]
        console.log(columnData)
        table=table+"<tr>"
        for(var columnIndex=0;columnIndex < columns.length;columnIndex++){
            table=table+"<td>"+columnData[columns[columnIndex]]+"</td>"
        }
        table=table+"</tr>"
    }
    
    table=table+"</tbody> </table>"
    document.getElementById("details").innerHTML=table
    document.getElementById("pagination").innerHTML=pagination(totalPages)
}



function pagination(totalPages){
   console.log("my page no :"+page)
   console.log("toatal pages : "+totalPages)
   if(page>3){
       start=page-2
       if(start<=0){
        start=1
    }
   }
   else {
       start=1
   }
    console.log("my start :"+start)
    var previous=start
    if(start-1!=0){
        previous=start-1
    }
    var pagination=`<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href=`+envhost+`"/app/details.html?page=`+previous+`&size=`+size+`"">Previous</a></li>`    
      var checkExit=1;
      var pageNo=start
      var end=start
      for(pageNo=start;pageNo<=totalPages;pageNo++){
          if(checkExit%4===0){
              break;
              }
          console.log(pageNo+" my page")
          pagination=pagination+`<li class="page-item"><a class="page-link" href=`+envhost+`"/app/details.html?page=`+pageNo+`&size=`+size+`">`+pageNo+`</a></li>`
          checkExit++;
          end=pageNo;
      }
      console.log("my end :"+end)
      if(end>=totalPages || end+1 ===totalPages){
        end=totalPages;
      }else{
          end=end+1
      }
      console.log("after end :"+end)
      pagination=pagination+`<li class="page-item"><a class="page-link" href=`+envhost+`"/app/details.html?page=`+end+`&size=`+size+`">Next</a></li></ul></nav>`
    return pagination;
}
# employee_registry_frontend [![Build Status](https://dev.azure.com/chandra-prakash-reddy/EmployeeRegistry/_apis/build/status/chandra-prakash-reddy.employee_registry_frontend?branchName=master)](https://dev.azure.com/chandra-prakash-reddy/EmployeeRegistry/_build/latest?definitionId=2&branchName=master)
UserInterface for Accessing  Employees Data with CRUD operations enabled on data

# prerequisites # 
   * Install NodeJS
      * installation  : https://nodejs.org/en/download/
      * documentation : https://nodejs.org/en/docs
       
   * clone and run employee_registry_backed
       * url          : https://github.com/chandra-prakash-reddy/employee_registry_backend.git
 



# Windows Run #
   * move to project root directory
   * run ***npm install***
   * run start.bat <employee_registry_backed_host:port> <current_host> <port>
      * ***example:*** start.bat localhost:7878 localhost 8000


# Linux Run #
   * move to project root directory
   * run ***npm install***
   * run ./start.sh <employee_registry_backed_host:port> <current_host> <port>
      * ***example:*** ./start.sh localhost:7878 localhost 8000
  
  
 # Docker Run #
   * ***docker run command :***
       docker run -e SERVICE_HOST_PORT=\<service_host_port> -e HOST=\<host> -e PORT=\<port> -p \<port>:\<port> --name <container_name> chandraprakashreddy/applications:employee-registry-ui-v1.01 
  
   * ***environment variables :***
      * SERVICE_HOST_PORT : hostname and port number of backend services
        * example:- SERVICE_HOST_PORT=localhost:8080
      * HOST : hostname to ui hosted on 
        * example :- HOST=localhost
      * PORT :  portnumber for ui to run process
        * example :- PORT=8001 
   * ***run arguments :***
      * \<port> : specify the port number on which process should run
      * <container_name>: provide the container name 
      
   * ***note*** : port mapping should be same -p \<port>:\<port>  example :- -p 8001:8001 

 # License #
   This project is licensed under the MIT License - see the [License](https://opensource.org/licenses/MIT "License")  for details

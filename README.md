# Installation instructions
The installation requires node.js and some node modules Installed.

* First, download and install [Node.js](https://nodejs.org/en/).
* From your terminal cd to the project directory
* Install node modules: `npm install`
* run: `npm install`

# Running the API
* From your terminal cd to the project directory
* run: `npm start`

# Using the API
server: http://localhost:3000, HTTP method {post}

* Create a user: 
   * Path: /user/create
   * Form data: {username: string, first_name: string, last_name: string, email:string, is_admin: boolean | is_manager : boolean}
   * Success Response : {succeed : true, user : user}
   * Failed Response : {succeed : false, err : err}
 
* Update a user: 
   * Path: /user/update
   * Form data: {_id: string, password: string, (other fields to update)}
   * Success Response : {succeed : true}
   * Failed Response : {succeed : false, err : err}
   
* login: 
   * Path: /user/login
   * Form data: {email: string, password: string}
   * Success Response : {succeed : true, user : user}
   * Failed Response : {succeed : false, err : err}





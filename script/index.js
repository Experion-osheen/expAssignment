 document.getElementById("username").defaultValue = "demo@experionglobal.com";
 document.getElementById("password").defaultValue = "exp@123";
 var response;
 function login(){
	 var xhttp = new XMLHttpRequest();
	 xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     	response = JSON.parse(this.responseText);
	     	 if(response.status==200){
			  	console.log("hai")
				window.location="dashBoard.html";

			}
			 else if(response.status==403 && response.message=="Username and password not correct"){
				window.alert("Invalid credentials");
				return;
			}
	    }
	  };

	  var username=document.getElementById("username").value;
	  var password=document.getElementById("password").value;
	  var sendtext="userName="+username+"&password="+password;
	  xhttp.open("POST", "https://exptest.herokuapp.com/api/login", true);
	  xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xhttp.send(sendtext);
	  var matching=username.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
	    if(matching==null)
	    {
	      window.alert("invalid mail format");
	    }

    
	

	}





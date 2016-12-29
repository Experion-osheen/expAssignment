	console.log("fas");
	var response;
	 var xhttp = new XMLHttpRequest();
	 xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     response = JSON.parse(this.responseText);
		    for(i=0;i<14;i++){
			 	var src = response.data[i].imageUrl;
			 	var caption=response.data[i].caption;
				var div1 = document.createElement('div');
				div1.setAttribute("id","i"+i);
			 	var imageelement = document.createElement("IMG");
			 	imageelement.setAttribute("id","img"+i);
		    	imageelement.setAttribute("src", src);
		    	var captionp = document.createElement('P');
		    	var text = document.createTextNode(caption);  
		    	captionp.appendChild(text); 
		    	captionp.setAttribute("id","cap"+i); 
		    	document.getElementById("container").appendChild(div1);
		    	document.getElementById("i"+i).appendChild(imageelement);
		    	document.getElementById("i"+i).appendChild(captionp);
			 	}
	     	
	    }
	  };
	  xhttp.open("GET", "https://exptest.herokuapp.com/api/imageGallery", true);
	 xhttp.send();

function logout(){
	var check = confirm("Do you want to logout?");
	if (check == true) {
		window.location="index.html";
		console.log("hai");
	}

}
	 
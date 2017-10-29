/* Password area code*/
function check(form) {
    
    if (form.userid.value === "Jakelamers931" && form.pswrd.value === "Bigred77") {
      window.open('http://www.mcpasd.k12.wi.us/');
	} else {
      alert("username and password not found");
	}
}


//change background

var body = document.getElementById('backgroundArea');

var myTimer = setInterval(changeBackground, 10000);

function changeBackground() {
    var classArray = ["image", "image2", "image3", "image4"];
    
    var imageNumber = classArray[Math.floor(Math.random() * classArray.length)];
    
    document.body.setAttribute("class", "" + imageNumber ); 
} 





 

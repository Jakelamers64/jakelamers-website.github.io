/* Password area code*/
function check(form) {
    
    if (form.userid.value === "Jakelamers931" && form.pswrd.value === "Bigred77") {
      window.open('https://jakelamers64.github.io/HomePageJL/');
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





 

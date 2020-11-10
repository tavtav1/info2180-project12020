/* Add your JavaScript to this file */

//"use strict";


function message() {
    "use strict";
    var newbutton, pattern, email;
    newbutton = document.getElementsByTagName("button")[0];
    
    pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    newbutton.addEventListener("click", function (f) {
        email = document.getElementById("email").value;
        f.preventDefault();
        
        if (email.match(pattern)) {
            document.getElementsByClassName("message")[0].innerHTML = `Thank you! Your email address ${email} has been added to our mailing list`;
                                } //end of if statement   
        
        else{
            document.getElementsByClassName("message")[0].innerHTML = "Please Input Valid Email Address";
            } //end of else statement
  
                                                }
                         ); //end of click function
                } //end of function message
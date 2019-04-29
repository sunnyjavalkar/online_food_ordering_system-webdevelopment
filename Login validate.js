function validate()
{ 
   if( document.Login.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.Login.textnames.focus() ;
     return false;
   }
 

 if( document.Login.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }
   
   if( document.Login.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.Login.City.focus() ;
     return false;
   }   
 
   if( document.Login.pincode.value == "" ||
           isNaN( document.Login.pincode.value) ||
           document.Login.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.Login.pincode.focus() ;
     return false;
   }
 var email = document.Login.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.Login.emailid.focus() ;
     return false;
 }
 
  if( document.Login.mobileno.value == "" ||
           isNaN( document.Login.mobileno.value) ||
           document.Login.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.Login.mobileno.focus() ;
     return false;
   }
   return( true );
}
function validate()
{ 
   
   if( document.PizzaDetails.City.value == "-1" )
   {
     alert( "Please provide details" );
     document.PizzaDetails.City.focus() ;
     return false;
   }   
   if( document.PizzaDetails.Course.value == "-1" )
   {
     alert( "Please provide details" );
    
     return false;
   }   
   if( document.PizzaDetails.District.value == "-1" )
   {
     alert( "Please provide details" );
    
     return false;
   }   
   if( document.PizzaDetails.State.value == "-1" )
   {
     alert( "Please provide details" );
     
     return false;
   }
  else
  {
	  window.location.href="payment.html";
  }
   return( true );
}
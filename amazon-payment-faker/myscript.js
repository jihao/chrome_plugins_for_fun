$(document).ready(function() {
  console.log($(".rightbutton"));
   
   $(".rightbutton, #continue").live('click',function(event){
      event.preventDefault();
      event.stopPropagation();
      window.location.href="http://localhost:8080/amazon-mobile-payment";
   });
   ("p .continue").live('click',function(event){
      event.preventDefault();
      event.stopPropagation();
      window.location.href="http://localhost:8080/amazon-mobile-payment";
   });
});
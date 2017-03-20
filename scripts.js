$(document).ready(function(){
   $(function() {
            $("li").click(function() {
              $.ajax('/li');
              if($(li).hasClass('active'))
                $(li).removeClass('active'); //change with .activatebutton
              else      
               $(li).addClass('active');
             });

            //etc
     });
  

});
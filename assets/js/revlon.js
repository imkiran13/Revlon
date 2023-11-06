$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
    $('[data-toggle="tooltip"]').tooltip(); 
    $("#myBtn").click(function(){
        $('.toast').toast('show');
      });
      $( '#topheader .navbar-nav a' ).on( 'click', function () {
        $( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
    });
  });





 
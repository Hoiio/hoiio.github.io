$(document).ready(function() {
    
    /*--------------------
        Component
    ----------------------*/   
    
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  
     
    
    // Dropdown
    $('.ui.dropdown').dropdown();
    
    $('.ui.menu')
      .popup()
    ;
    
    $('.tabular.menu .item').tab();
    
    // Message
    $('.message .remove')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
    ;
    
    $('table').tablesort();
    
    //Standard Modal
    $('#demo-modal')
        .modal('attach events', '#demo')
    ;
    
    $('#demo-image-modal')
        .modal('attach events', '#demo-image')
    ;
    
    //Basic Modal
    $('.basic.modal')
        .modal('attach events', '#basic-button')
    ;
    
    //Fullscreen Modal
    $('.fullscreen.modal')
        .modal('attach events', '#fullscreen-button')
    ;
    
    //Small Modal
    $('#small-modal')
        .modal('attach events', '#small-button')
    ;
    
    //Large Modal
    $('.large.modal')
        .modal('attach events', '#large-button')
    ;
    

    //Autofocus Modal
    $('#autofocus-false-modal')
        .modal('setting', 'autofocus', false)
        .modal('attach events', '#autofocus-false')
    ;
 
    $('#autofocus-true-modal')
        .modal('attach events', '#autofocus-true')
    ;
    
    //Couple Modal
    $('.coupled.modal')
      .modal('setting', ' allowMultiple', false)
    ;
    // Click the button to show first modal.
    $('.first.modal')
      .modal('attach events', '.coupled.button')
    ;
    // Click action button in first modal to show second modal.
    $('.second.modal')
      .modal('attach events', '.first.modal .button')
    ;
    
    //Closable Modal
    $('#closable-false-modal')
        .modal('setting', 'closable', false)
        .modal('attach events', '#closable-false')
    ;
    
    //Duration
    $('.duration.modal')
        .modal('setting', 'duration', 100)
        .modal('attach events', '.duration.button')
    ;
    
    //Transition
    $('.selection.dropdown')
      .dropdown({
        onChange: function(value) {
          $('.demo.modal')
            .modal('setting', 'transition', value)
            .modal('show')
          ;
        }
      })
    ;
    
    
    //Event Modal
   
    
    $('#event-modal')
      .modal({
        onVisible    : function(){
          window.alert('Show');
        }, 
        onDeny    : function(){
          window.alert('Wait not yet!');
          return false;
        },
        onApprove : function() {
          window.alert('Approved!');
        }
      })
      .modal('attach events', '#event-button', 'show')
    ;
    
    $('.ui.accordion')
    .accordion()
    ;

    
    /*--------------------
        Navigation
    ----------------------*/
    // Active
    $('.present .menu .item')
      .tab({
        context: '.present'
      })
    ;
    /*
    if(window.location.hash) {
          var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
         var par = $( "#" + hash).parent().parent();
          $(".segment").removeClass("active");
          par.addClass("active");
          var tab = par.data("tab");
       
          $('.menu > a').removeClass("active");
          $('a[data-tab='+tab+']').addClass("active");
    } else{
      $('a[data-tab="first"]').addClass("active");
      $('div[data-tab="first"]').addClass("active"); 
    } 
    
    */
   
    
    // Set Active
    function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    
    var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    if(x){
        $('#left-content-sidebar a[href$='+x+']').addClass("active");
    }
    else{
        $('a[href$=introduction').addClass("active");
    }
    
    $("#sticky").on("click", "a", function (event) { 
        $("#sticky .active").removeClass("active"); 
        $(this).addClass("active"); 
    }); 
    
   

    
   
});



function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}


/*--------------------
    Loading
----------------------*/    

$(window).load(function() {
    // Animate loader off screen
    $(".hoiio.loading").fadeOut("slow");

});


/*--------------------
    Component
----------------------*/    

$(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
});


$('[data-toggle="switch"]').bootstrapSwitch();
$('.onoffswitch .icons').remove();
    

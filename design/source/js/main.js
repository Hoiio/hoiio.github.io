$(document).ready(function() {
    
    /*--------------------
        Component
    ----------------------*/    
    // Dropdown
    $('.ui.dropdown').dropdown();
    
    // Message
    $('.message .remove')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
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
   
    /*--------------------
        Sidebar
    ----------------------*/
    
    // Generate
    var hoiio="";
    hoiio += "<div>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">How to use<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/usage\/introduction\">Introduction<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/usage\/prototype\">Prototype<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/usage\/layout\">Layout<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/usage\/Custom\">Custom<\/a><\/li>";
    hoiio += "<\/ul>";
    hoiio += "<div>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Framework<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/framework\/principle\">Design Principles<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/framework\/core\">Core Framework<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/framework\/motion\">Motion<\/a><\/li>";
    hoiio += "<\/ul>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">System<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/container\">Container<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/grid\">Grid<\/a><\/li>"; 
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/color\">Color<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/typography\">Typography<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/icon\">Icon<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/image\">Image<\/a><\/li>";
    hoiio += "<\/ul>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Components<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/button\">Button<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/input\">Input<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/dropdown\">Dropdown<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/selection\">Selection<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/label\">Label<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/navigation\">Navigation<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/tab\">Tab<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/breadcrumb\">Breadcrumb<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/table\">Table<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/dialog\">Dialog<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/checkbox\">Checkbox & Radio<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/switch\">Switch<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/progress\">Progress<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/tooltip\">Tooltip<\/a><\/li>";
    
    hoiio += "<\/ul>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Patterns<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/pattern\/data\">Data Entry<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/pattern\/empty\">Empty State<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/pattern\/notification\">Notification<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/pattern\/bulk\">Bulk Action<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/pattern\/search\">Search<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/pattern\/setting\">Settings<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/pattern\/date\">Date Picker<\/a><\/li>";
    hoiio += "<\/ul>";
    hoiio += "<\/div>";

    $("#sidebar nav").append(hoiio);
    
    
    // Set Active
    function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    if(x){
        $('a[href$='+x+']').addClass("active");
    }
    
    /*--------------------
        Footer
    ----------------------*/
    $("footer").text("© Copyright 2016. Hoiio Pte Ltd.");
    
   
});

/*--------------------
    Loading
----------------------*/    

$(window).load(function() {
    // Animate loader off screen
    $(".hoiio.loading").fadeOut("slow");;
});

/*--------------------
    Component
----------------------*/    
 $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
});

$(':checkbox').radiocheck();
$(':radio').radiocheck();
$('[data-toggle="switch"]').bootstrapSwitch();
$('.onoffswitch .icons').remove();






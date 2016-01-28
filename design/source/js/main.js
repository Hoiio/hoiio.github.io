$(document).ready(function() {
    $('.ui.dropdown').dropdown();
    
    $('.message .remove')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
    ;
    
    $('.paths .menu .item')
      .tab({
        context: '.paths'
      })
    ;
    
    if(window.location.hash) {
          var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
          var par = $( "#" + hash).parent().parent().parent();
          $(".segment").removeClass("active");
          par.addClass("active");
          var tab = par.data("tab");
          $('.menu > a').removeClass("active");
          $('a[data-tab='+tab+']').addClass("active");
    } else{
      $('a[data-tab="first"]').addClass("active");
      $('div[data-tab="first"]').addClass("active"); 
    } 
   
    //Add Header
    var header="";
    header += "<div class=\"container\">";
    header += " <nav>";
    header += "     <a href=\"\/design\/\" class='logo'>";
    header += "        <i class=\"icon compass\"><\/i>";
    header += "     <\/a>";
    header += "     <ul>";
    header += "         <li>";
    header += "             <div class=\"heading\">Design Standards<\/div>";
    header += "         </li>";
    header += "         <li>";
    header += "    <span class=\"pull-right poweredby\">Powered by<a href=\"http:\/\/hoiio.com\"><img src=\"..\/source\/img\/hoiio-logo.png\"\/><\/a><\/span>";
    header += "         </li>";
    header += "     </ul>";
	header += " </nav>";
    header += "<\/div>";
    /*
    var header="";
    header += "<div class=\"logo\">";
    header += "    <a href=\"\/design\/\">";
    header += "        <i class=\"icon compass\"><\/i>";
    header += "        <h2 class=\"heading\">Design Standards<\/h2>";
    header += "    <\/a>";
    header += "    <span class=\"pull-right poweredby\">Powered by<a href=\"http:\/\/hoiio.com\"><img src=\"..\/source\/img\/hoiio-logo.png\"\/><\/a><\/span>";
    header += "<\/div>";*/
    
    $("#detail header.header").append(header);
    
    //Add Sidebar
    var hoiio="";
    hoiio += "<div>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">How to use<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/usage\/principle\">Setup<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/usage\/core\">Layout<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/usage\/motion\">Custom<\/a><\/li>";
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

    $("#page .sidebar").append(hoiio);
    
    //Add Footer
    $("footer").text("© Copyright 2016. Hoiio Pte Ltd.");
    
    //Change height between sidebar and content
    
    /*var height_sidebar = Math.max($("#left-side").height(), $("#right-side").height());*/
    var height_sidebar = $("#right-side").height();
    var height_content = $("#left-side").height();
    if (height_content < height_sidebar) { 
        $("#left-side").height(height_sidebar);
        $(".body-content").height(height_sidebar);
                                          
    }
    
    
    function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    if(x){
        $('a[href$='+x+']').addClass("active");
        $("title").text(capitalise(x) + " - Hoiio Design Standards"); 
    }
    
    
    
    
   
    
});

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

 $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
});

$(':checkbox').radiocheck();
$(':radio').radiocheck();
$('[data-toggle="switch"]').bootstrapSwitch();
$('.onoffswitch .icons').remove();


function show_code(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}





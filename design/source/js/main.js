$(document).ready(function() {
    
    //Add Header
    var header="";
    header += "<div class=\"logo\">";
    header += "    <a href=\"\/design\/\">";
    header += "        <div class=\"h-icon h-icon-compass\"><\/div>";
    header += "        <h2 class=\"heading\">Design component<\/h2>";
    header += "    <\/a>";
    header += "    <span class=\"pull-right poweredby\">Powered by<a href=\"http:\/\/hoiio.com\"><img src=\"..\/source\/img\/hoiio-logo.png\"\/><\/a><\/span>";
    header += "<\/div>";
    
    $("#page .header").append(header);
    
    //Add Sidebar
    var hoiio="";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Framework<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/framework\/principle\">Design Principles<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/framework\/core\">Core Framework<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/framework\/motion\">Motion<\/a><\/li>";
    hoiio += "<\/ul>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">System<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/grid\">Grid<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/layout\">Layout<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/color\">Color<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/typography\">Typography<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/icon\">Icon<\/a><\/li>";
   // hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/image\">Image<\/a><\/li>";
    hoiio += "<\/ul>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Components<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/button\">Button<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/input\">Input<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/dropdown\">Dropdown<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/select\">Select<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/label\">Label<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/navigation\">Navigation<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/table\">Table<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/dialog\">Dialog<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/checkboxes\">Checkboxes<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/switches\">Switches<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/progress\">Progress<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/tooltip\">Tooltip<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/tab\">Tab<\/a><\/li>";
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

    $("#page #sidebar").append(hoiio);
    
    //Add Footer
    $("footer").text("© Copyright 2016. Hoiio Pte Ltd.");
    
    //Change height between sidebar and content
    var height = Math.max($("#sidebar").height(), $("#content").height());
    $("#sidebar").height(height);
    $("#content").height(height);
    
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

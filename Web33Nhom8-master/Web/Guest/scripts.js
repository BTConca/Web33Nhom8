


function Sort()
{
    var innerArray = [];
    var myArray = $(".products2");
    var d;
  
    myArray.sort(function(a,b)  
    {
        var vala = parseInt($(a).data("value"));
        var valb = parseInt($(b).data("value"));
        return (valb - vala);
    });
    
    for(var i=0; i < 4; i++)
        {
            var Val      = "valsel" + i;
            var ImgS     = "#imgsel" + i;
            var Costs    = "costsel" + i;
            var Coms     = "comsel" +i;
            var Names    = "namesel" + i;
            document.getElementById(Val).innerHTML  = myArray.eq(i).data("value");    
            document.getElementById(Costs).innerHTML = myArray.eq(i).data("cost");
            document.getElementById(Names).innerHTML = myArray.eq(i).data("name");
            document.getElementById(Coms).innerHTML  = myArray.eq(i).data("com");
            var path = myArray.eq(i).data("src");
            d= new Date();
            $(ImgS).attr("src",path);
        }
}

// _______________________________________________
// Minh Phung
//Hàm sidemenu
( function( $ ) {
$( document ).ready(function() {
$('#cssmenu li.has-sub>a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
});
} )( jQuery );
//

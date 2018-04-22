


function Sort()
{
    var innerArray = [];
    var myArray = $(".products");
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


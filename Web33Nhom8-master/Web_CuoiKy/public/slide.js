//HÀM JQUERY

jQuery.noConflict(),jQuery(document).ready(function()
{

if(jQuery(window).width()>767)
{
jQuery(".nav li.dropdown").hover(function()
{
jQuery(this).addClass("dropdown-hover");var e=150*jQuery(this).find(".dropdown-menu:first ul").size()+"px";jQuery(".dropdown-menu").css("width",e)
}
,function()
{
jQuery(this).removeClass("dropdown-hover")
})}


if(
jQuery("#newest").carouFredSel(
{
auto:!1,prev:"#prev_newest",next:"#next_newest",mousewheel:!1,swipe:
{
onMouse:!0,onTouch:!0}
,responsive:!0,width:"variable",height:"variable",scroll:1,items:
{
width:270,height:"variable",visible:
{
min:1,max:1}
}}),

jQuery("#hot").carouFredSel(
{

auto:!1,prev:"#prev_hot",next:"#next_hot",mousewheel:!1,swipe:
{
onMouse:!0,onTouch:!0}

,responsive:!0,width:"100%",height:"variable",scroll:1,items:
{
width:270,height:"variable",visible:
{min:1,max:1}
}


})
,jQuery("#most-view").carouFredSel(
{
auto:!1,prev:"#prev_most-view",next:"#next_most-view",mousewheel:!1,swipe:
{
onMouse:!0,onTouch:!0}

,responsive:!0,width:"100%",height:"variable",scroll:1,items:
{
width:270,height:"variable",visible:
{min:1,max:1}
}
})

){}
}
)




jQuery(window).load(function()
{



jQuery("#sequence").sequence(
{}

).data("sequence"),jQuery(".flexslider").flexslider(
{

}

),jQuery("#bannerslide").flexslider(
{



animation:"slide",directionNav:!1,controlNav:!1,start:function()
{



jQuery(".banner").removeClass("loading")
}


}

)
}
)
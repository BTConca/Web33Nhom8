
//Van khai
// Collapse question
$("#coll-2").click(function() {
    document.getElementById("coll-2").style.display = "none";
    document.getElementById("coll-1").style.display = "block";
    }
);
$("#coll-1").click(function() {
    document.getElementById("coll-1").style.display = "none";  
    document.getElementById("coll-2").style.display = "block";
    }
);
var data = {},
    data2 = {};

$("#userlogout").click(function() {
    data.check = 1;
    document.getElementById("um-1").classList.remove("hidden");  
    document.getElementById("um-2").classList.add("hidden");
    document.getElementById("um-3").classList.add("hidden");
    document.location.href = "..\\Guest\\index.html";
    }
);

$("#user-login").click(function()
{
   
   var b = document.location.href;
    var path = "../Login/index.html?path=" +  encodeURIComponent(b);
    document.location.href = path;                     
});

/*$("li").click(function{
                       alert("x");
    var data = {},
    data2 = {};
    var url = document.location.href,
    params = url.split('?')[1].split('&'), tmp,
    params2 = url.split('?')[2].split('&');
    
    alert(params[0]);
    alert(params2[0]);
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

    for (var i = 0, l = params2.length; i < l; i++) {
         tmp = params2[i].split('=');
         data2[tmp[0]] = tmp[1];
    }
});*/

window.onload = function () {

    if(data.check != 1)
    {
        var url = document.location.href,
            params = url.split('?')[1].split('&'), tmp,
            params2 = url.split('?')[2].split('&');

        for (var i = 0, l = params.length; i < l; i++) {
             tmp = params[i].split('=');
             data[tmp[0]] = tmp[1];
        }


        for (var i = 0, l = params2.length; i < l; i++) {
             tmp = params2[i].split('=');
             data2[tmp[0]] = tmp[1];
        }
    
    }
    if(data.check == 2)
    {
	   document.getElementById("um-1").classList.add("hidden");
        document.getElementById("um-2").classList.remove("hidden");
        document.getElementById("username").innerHTML = data2.name;
        document.getElementById("um-3").classList.remove("hidden");
    }
    
}
//--------------văn khải-----
// _______________________________________________
// MINH PHỤNG
//________________________________________________




// HÀM CHECK BOX CHO CATEGORY
function checkCateAll()
{
  var list = document.getElementById("category-check-all");
  var cate = document.getElementsByClassName("category-check");
  if(list.checked == true)
  { 
    for(var i = 0; i<cate.length;i++)
    {
       cate[i].checked = true;
    }
  }
  else
  {
      for(var i = 0; i<cate.length;i++)
    {
      cate[i].checked = false;
    }
  }
}
function checkCate()
{
  var list = document.getElementById("category-check-all");
  var cate = document.getElementsByClassName("category-check");
  for(var i = 0; i<cate.length;i++)
   {
      if( cate[i].checked == false)
       {list.checked=false; return;}
  }

    list.checked = true;
}












// HÀM CHECK BOX CHO BRANCH

function checkBranchAll()
{
  var list = document.getElementById("branch-check-all");
  var cate = document.getElementsByClassName("branch-check");
  if(list.checked == true)
  { 
    for(var i = 0; i<cate.length;i++)
    {
       cate[i].checked = true;
    }
  }
  else
  {
      for(var i = 0; i<cate.length;i++)
    {
      cate[i].checked = false;
    }
  }
}
function checkBranch()
{
  var list = document.getElementById("branch-check-all");
  var cate = document.getElementsByClassName("branch-check");
  for(var i = 0; i<cate.length;i++)
   {
      if( cate[i].checked == false)
       {list.checked=false; return;}
  }

    list.checked = true;
}



































// XEM THEO DẠNG LIST CHO PAGE PRODUCTS

function viewList()
{
	var list = document.getElementsByClassName("list");
	list[0].classList.add("active");
	list[1].classList.add("active");
	var grid = document.getElementsByClassName("grid");
	grid[0].classList.remove("active");
	grid[1].classList.remove("active");

var product = document.getElementById('products-view');
product.innerHTML = `

<div class="products-list">
                <ul class="products-listItem">
                  <li class="products">
                    <div class="offer">
                      New
                    </div>
                    <div class="thumbnail">
                    <div>
                      <img class="img2" src="../media/images/Wine/3.png" alt="Product Name">
                    </div></div>
                    <div class="product-list-description">
                      <div class="productname">
                        Chivas 18
                      </div>
                      <p>
                       Rượu Chivas 18 là sự lựa chọn và pha trộn một cách tỷ mỷ các loại Rượu Whisky của Chuyên gia pha chế rượu lừng danh Colin Scott . Nó là sản phẩm chứa nhiều lớp Whisky Lúa mạch và Whisky Mạch nha khác nhau , được chưng cất từ nhiều vùng khắp đất nước Scotland . Một sản phẩm sang trọng đang chờ được khám phá...
                      </p>
                      <div class="list_bottom">
                        <div class="price">
                          <span class="new_price">
                            450.00
                            <sup>
                              $
                            </sup>
                          </span>
                          <span class="old_price">
                            500.00
                            <sup>
                              $
                            </sup>
                          </span>
                        </div>
                        <div class="button_group">
                          <button class="button">
                            Thêm Vào Giỏ Hàng
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                          <li class="products">
                    <div class="offer">
                      New
                    </div>
                    <div class="thumbnail">
                    <div>
                      <img src="../media/images/Wine/2.png" alt="Product Name">
                      </div>
                    </div>
                    <div class="product-list-description">
                      <div class="productname">
                        Chivas 18
                      </div>
                      <p>
                       Rượu Chivas 18 là sự lựa chọn và pha trộn một cách tỷ mỷ các loại Rượu Whisky của Chuyên gia pha chế rượu lừng danh Colin Scott . Nó là sản phẩm chứa nhiều lớp Whisky Lúa mạch và Whisky Mạch nha khác nhau , được chưng cất từ nhiều vùng khắp đất nước Scotland . Một sản phẩm sang trọng đang chờ được khám phá...
                      </p>
                      <div class="list_bottom">
                        <div class="price">
                          <span class="new_price">
                            450.00
                            <sup>
                              $
                            </sup>
                          </span>
                          <span class="old_price">
                            500.00
                            <sup>
                              $
                            </sup>
                          </span>
                        </div>
                        <div class="button_group">
                          <button class="button">
                            Thêm Vào Giỏ Hàng
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                          <li class="products">
                    <div class="offer">
                      New
                    </div>
                    <div class="thumbnail">
                    <div>
                      <img src="../media/images/Wine/3.png" alt="Product Name">
                    </div></div>
                    <div class="product-list-description">
                      <div class="productname">
                        Chivas 18
                      </div>
                      <p>
                       Rượu Chivas 18 là sự lựa chọn và pha trộn một cách tỷ mỷ các loại Rượu Whisky của Chuyên gia pha chế rượu lừng danh Colin Scott . Nó là sản phẩm chứa nhiều lớp Whisky Lúa mạch và Whisky Mạch nha khác nhau , được chưng cất từ nhiều vùng khắp đất nước Scotland . Một sản phẩm sang trọng đang chờ được khám phá...
                      </p>
                      <div class="list_bottom">
                        <div class="price">
                          <span class="new_price">
                            450.00
                            <sup>
                              $
                            </sup>
                          </span>
                          <span class="old_price">
                            500.00
                            <sup>
                              $
                            </sup>
                          </span>
                        </div>
                        <div class="button_group">
                          <button class="button">
                            Thêm Vào Giỏ Hàng
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                          <li class="products">
                    <div class="offer">
                      New
                    </div>
                    <div class="thumbnail">
                    <div>
                      <img src="../media/images/Wine/1.png" alt="Product Name">
                   </div> </div>
                    <div class="product-list-description">
                      <div class="productname">
                        Chivas 18
                      </div>
                      <p>
                       Rượu Chivas 18 là sự lựa chọn và pha trộn một cách tỷ mỷ các loại Rượu Whisky của Chuyên gia pha chế rượu lừng danh Colin Scott . Nó là sản phẩm chứa nhiều lớp Whisky Lúa mạch và Whisky Mạch nha khác nhau , được chưng cất từ nhiều vùng khắp đất nước Scotland . Một sản phẩm sang trọng đang chờ được khám phá...
                      </p>
                      <div class="list_bottom">
                        <div class="price">
                          <span class="new_price">
                            450.00
                            <sup>
                              $
                            </sup>
                          </span>
                          <span class="old_price">
                            500.00
                            <sup>
                              $
                            </sup>
                          </span>
                        </div>
                        <div class="button_group">
                          <button class="button">
                            Thêm Vào Giỏ Hàng
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                        
                  
                </ul>
              </div>`
              ;

}





















// XEM THEO DẠNG GRID PAGE PRODUCTS
function viewGrid()
{
	var list = document.getElementsByClassName("list");
	list[0].classList.remove("active");
	list[1].classList.remove("active");
	var grid = document.getElementsByClassName("grid");
	grid[0].classList.add("active");
	grid[1].classList.add("active");


var product = document.getElementById('products-view');
product.innerHTML = `








                <div class="row">
                  <div class="col-md-3 col-sm-4">
                    <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/1.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-3 col-sm-4">
                   <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/2.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-3 col-sm-4">
                    <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/0.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-3 col-sm-4">
                    <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/4.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-3 col-sm-4">
               <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/3.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-3 col-sm-4">
                  <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/2.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-3 col-sm-4">
                <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/1.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-3 col-sm-4">
                  <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/3.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-3 col-sm-4">
               <div class="products">
                      <div class="thumbnail">
                        <a href="detail.html">
                          <img src="../media/images/Wine/4.png" alt="Product Name">
                        </a>
                      </div>
                      <div class="productname">
                        Chivas
                      </div>
                      <h4 class="price">
                        $451.00
                      </h4>
                      <div class="button_group">
                        <button class="button add-cart" type="button">
                          Thêm Vào Giỏ Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>`;
            
     }



















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

// _______________________________________________
// MINH PHỤNG CLOSE
//________________________________________________

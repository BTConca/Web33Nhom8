
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





















// _______________________________________________
// MINH PHỤNG CLOSE
//________________________________________________

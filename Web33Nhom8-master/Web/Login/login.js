$(function (){
    $('.button-checkbox').each(function(){
		var $widget = $(this),
			$button = $widget.find('button'),
			$checkbox = $widget.find('input:checkbox'),
			color = $button.data('color'),
			settings = {
					on: {
						icon: 'glyphicon glyphicon-check'
					},
					off: {
						icon: 'glyphicon glyphicon-unchecked'
					}
			};

		$button.on('click', function () {
			$checkbox.prop('checked', !$checkbox.is(':checked'));
			$checkbox.triggerHandler('change');
			updateDisplay();
		});

		$checkbox.on('change', function () {
			updateDisplay();
		});

		function updateDisplay() {
			var isChecked = $checkbox.is(':checked');
			// Set the button's state
			$button.data('state', (isChecked) ? "on" : "off");

			// Set the button's icon
			$button.find('.state-icon')
				.removeClass()
				.addClass('state-icon ' + settings[$button.data('state')].icon);

			// Update the button's color
			if (isChecked) {
				$button
					.removeClass('btn-default')
					.addClass('btn-' + color + ' active');
			}
			else
			{
				$button
					.removeClass('btn-' + color + ' active')
					.addClass('btn-default');
			}
		}
		function init() {
			updateDisplay();
			// Inject the icon if applicable
			if ($button.find('.state-icon').length == 0) {
				$button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
			}
		}
		init();
	});
});


function showLogin()
{
	document.getElementById("register-box").classList.add("hidden");
	document.getElementById("login-box").classList.remove("hidden");
}

function showRegister()
{
	document.getElementById("register-box").classList.remove("hidden");
	document.getElementById("login-box").classList.add("hidden");
}
function Register()
{
	alert("Đăng ký thành công!!");
}
<!-- Van khai-->

function Login()
{ 	
    alert("Đăng nhập thành công!!");
   var b = document.getElementById("em-1").value;
    var check = 2;
     var desurl = document.location.href,
        params = desurl.split('?')[1].split('&'),
        data = {}, tmp;
    
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    var path = decodeURIComponent(data.path);
    path = path + '?check=' + encodeURIComponent(check) +'?name=' + encodeURIComponent(b);
    
        document.location.href = path;
    
}

<!-- Van khai-->
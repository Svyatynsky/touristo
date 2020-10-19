function fontsStyle(params) {

  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    });
  }
}
function cb() { }



function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}


testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
});

// mask for tel

// window.addEventListener("DOMContentLoaded", function() {
// 	[].forEach.call( document.querySelectorAll('.tel'), function(input) {
// 		var keyCode;
// 		function mask(event) {
// 			event.keyCode && (keyCode = event.keyCode);
// 			var pos = this.selectionStart;
// 			if (pos < 3) event.preventDefault();
// 			var matrix = "+7 (___) ___ ____",
// 			i = 0,
// 			def = matrix.replace(/\D/g, ""),
// 			val = this.value.replace(/\D/g, ""),
// 			new_value = matrix.replace(/[_\d]/g, function(a) {
// 				return i < val.length ? val.charAt(i++) || def.charAt(i) : a
// 			});
// 			i = new_value.indexOf("_");
// 			if (i != -1) {
// 				i < 5 && (i = 3);
// 				new_value = new_value.slice(0, i)
// 			}
// 			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
// 				function(a) {
// 					return "\\d{1," + a.length + "}"
// 				}).replace(/[+()]/g, "\\$&");
// 			reg = new RegExp("^" + reg + "$");
// 			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
// 			if (event.type == "blur" && this.value.length < 5)  this.value = ""
// 		}

// 	input.addEventListener("input", mask, false);
// 	input.addEventListener("focus", mask, false);
// 	input.addEventListener("blur", mask, false);
// 	input.addEventListener("keydown", mask, false)

// });
// });


$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('_lock');
	});
});

function ibg(){

	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();


$(function(){
  $('.slider-review__row').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint:960,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  });
});


// Filters

$(function  () {
  let filter = $("[data-filter]");

  filter.on("click", function(event) {
    event.preventDefault();

    let cat = $(this).data('filter');

    if(cat == 'all') {
      $("[data-cat]").removeClass('hide');
    } else {
      $("[data-cat]").each(function() {

        let ticketCat = $(this).data('cat');

        console.log(ticketCat);

        if(ticketCat != cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }

  });

});


// select option.

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
        	if (s.options[i].innerHTML == this.innerHTML) {
        		s.selectedIndex = i;
        		h.innerHTML = this.innerHTML;
        		y = this.parentNode.getElementsByClassName("same-as-selected");
        		for (k = 0; k < y.length; k++) {
        			y[k].removeAttribute("class");
        		}
        		this.setAttribute("class", "same-as-selected");
        		break;
        	}
        }
        h.click();
      });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
  	if (elmnt == y[i]) {
  		arrNo.push(i)
  	} else {
  		y[i].classList.remove("select-arrow-active");
  	}
  }
  for (i = 0; i < x.length; i++) {
  	if (arrNo.indexOf(i)) {
  		x[i].classList.add("select-hide");
  	}
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


// input +-

function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.input-group').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
  decrementValue(e);
});


// accordeon


$(document).ready(function() {
  $('.accordion__title').click(function(event) {
    if($('.accordion').hasClass('accordion_one')) {
      $('.accordion__title').not($(this)).removeClass('active');
      $('.accordion__content').not($(this).next()).slideUp(500);
    }
    $(this).toggleClass('accordion_active').next().slideToggle(500);
  });
});
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
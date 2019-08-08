// var intest = null;

// $('.box-shadow-block5').on('click', function(){
//     appendValue = '<div class="nav-icon-shadow "><div class=" box-shadow-block5 mx-auto"><img src="img/block5_1.png" class="picture-block5" alt="block5_1"></div></div>';
//     self= this; // box-shadow-block5
//     inHtml =  $(self).children().eq(0).html();
//     intest = inHtml;
//     $(self).children().eq(0).empty().append(appendValue);
    
// });

// $('.box-shadow-block5').on('click', function(){
//     appendValue = intest;
//     self = this;
//     $(self).children().eq(0).empty().append(appendValue);
// });


// $('.box-shadow-block5').animate({ 
//     boxShadow: "0px 0px 5px 3px hsla(100, 70%, 60%, 0.8)"
//   }); 

$('.box-shadow-block5').on('mouseenter', function(){
$('.box-shadow-block5').stop().animate({boxShadow: '0 0 30px #9ca6ae'});

});
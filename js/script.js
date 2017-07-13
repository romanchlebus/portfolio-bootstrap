'use strict'

$(document).ready(function(){
    
    skrol();
    smooth();
});

$(window).scroll(function(){
     skrol();
});

var navHeight = $('.container-fluid').height();
var currentPosition = $(window).scrollTop();
function skrol(){                  

    if($(window).scrollTop() > navHeight){
        $('.container-fluid').addClass('JqClass');
    }else {
        $('.container-fluid').removeClass('JqClass');
    }
    
};         


function smooth(){
    
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
        
	    $('html, body').stop().animate({
	        'scrollTop': $(target).offset().top 
	    }, 900, 'swing');
	});  
};    

function navRespons(){
  $()  
    
};

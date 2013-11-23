/**
 * Javascript for automatically adjusting for differnet screen sizes and resolutions
 * 
 * @author Hanut Singh, <hanut@koresoft.in>
 */

/**
 * Screen Width of device used for designing
 */
var dWidth = 1349;
/**
 * Screen Height of device used for designing
 */
var dHeight = 621;

$(function(){
    resize();
});

$(window).resize(function(){
   resize(); 
});

function resize(){
    var sHeight = window.screen.availHeight;
    var sWidth = window.screen.availWidth;
    var mult = 1;
        if(sWidth > sHeight){
            if(sWidth > dWidth)
                var mult = sWidth/dWidth;
            else
                var mult = dWidth/sWidth;
        }
        else{
            if(sHeight > dHeight)
                mult = sHeight/dHeight;
            else
                mult = dHeight/sHeight;
        }
    $('body').css('zoom',mult);
    $('body').css('-moz-transform','scale('+mult+')');
}

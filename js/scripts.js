


// like button on navbar : if it is clicked, one like + 

$(function (){

    var valueElement = $('#liked');
    function incrementValue(e){
        valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
        return false;
    }

    $('.pulsebutton').one('mouseenter', {increment: 1}, incrementValue);

});


// text switch on front page

$('.name4').css('display',"none");
$('.name5').css('display',"none");
$('.name6').css('display',"none");

$('.name1').hover(function() {
    $(this).css('display','none');
    $('.name4').css('display','inline-block');
}, function() {
    $(this).css('display','inline-block');
    $('.name4').css('display','none');
})

$('.name2').hover(function() {
    $(this).css('display','none');
    $('.name5').css('display','inline-block');
}, function() {
    $(this).css('display','inline-block');
    $('.name5').css('display','none');
})

$('.name3').hover(function() {
    $(this).css('display','none');
    $('.name6').css('display','inline-block');
}, function() {
    $(this).css('display','inline-block');
    $('.name6').css('display','none');
})


// $('.name1').hover(function() {
//     $(this).addClass('d-none');
//     $('.name2').removeClass('d-none');
// }), function() {
//     $(this).removeClass('d-none');
//     $('.name4').addClass('d-none');
// }

//tooltip function
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})


// circular text effect 
const circleType = new CircleType(document.getElementById('circleText'));
circleType.radius(90);


// like button on navbar : if it is clicked, one like + 

$(function (){

    var valueElement = $('#liked');
    function incrementValue(e){
        valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
        return false;
    }

    $('.pulsebutton').one('mouseenter', {increment: 1}, incrementValue);

});




let hello = document.querySelector('.name1');
let iam = document.querySelector('.name2');
let sohye = document.querySelector('.name3');
let about = document.querySelector('.name4');
let project = document.querySelector('.name5');
let contact = document.querySelector('.name6'); 

about.style.display="none";
project.style.display="none";
contact.style.display="none";

$(hello).hover(function() {
    $(this).css('display','none');
    $(about).css('display','inline-block');
}, function() {
    $(this).css('display','inline-block');
    $(about).css('display','none');
})

$(iam).hover(function() {
    $(this).css('display','none');
    $(project).css('display','inline-block');
}, function() {
    $(this).css('display','inline-block');
    $(project).css('display','none');
})

$(sohye).hover(function() {
    $(this).css('display','none');
    $(contact).css('display','inline-block');
}, function() {
    $(this).css('display','inline-block');
    $(contact).css('display','none');
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



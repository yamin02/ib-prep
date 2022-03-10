
$("#next").click(function (e) { 
    window.open('quiz.html#25');
});

var quesNum = location.hash.split('#')[1] ;
$.get(`./txt/ib${quesNum}.txt` , function(data) {
    document.querySelector('.question').innerHTML = data.split('$$$$')[0] ;
    document.querySelector('.question2').innerHTML = data.split('$$$$')[1] ;
 }, 'text');


 $('#showBtn').click(function (e) { 
     $('.question2').css('filter', 'blur(0)');
     $('#showBtn').hide() ;
 });
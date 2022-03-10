$(".btn-dark").click(function (e) { 
    $('.dialogueBox').show();
    $("main").css('filter', 'blur(9px)');
});


$("#closeDialogue").click(function (e) { 
    $('.dialogueBox').hide();
    $("main").css('filter', 'blur(0px)');
});
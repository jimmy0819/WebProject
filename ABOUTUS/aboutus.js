$(".cir").hover(function(){
    $(".ho").text("邂逅");
    $(".ho").css("font-size","150px")
    $(".ho").css("writing-mode","vertical-lr")
},function(){
    $(".ho").text("逅")
    $(".ho").css("font-size","200px")
});

$(".cir").hover(function(){
    $(".tha").text("綻放");
    $(".tha").css("font-size","150px")
    $(".tha").css("writing-mode","vertical-lr")
},function(){
    $(".tha").text("綻")
    $(".tha").css("font-size","200px")
});

$(".ig").hover(function(){
    $(".ig").css("border","5px solid #c05753")
    $(".iginner").css("border","5px solid #c05753")
    $(".dot").css("background-color","#c05753")
},function(){
    $(".ig").css("border","5px solid #5f4e47")
    $(".iginner").css("border","5px solid #5f4e47")
    $(".dot").css("background-color","#5f4e47")
});

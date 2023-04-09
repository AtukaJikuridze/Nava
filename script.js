$(".open").click(function(e){
    if($(this).hasClass("open")){
        $(this).addClass("fa-xmark")
        $(this).removeClass("fa-bars")
        $(this).removeClass("open")
        $("ul").slideDown()
    }

    else{
        $(this).addClass("fa-bars")
        $(this).removeClass("fa-xmark")
        $(this).addClass("open")
        $("ul").slideUp()


    }


})



let section1 = document.querySelector(".section1")
let sec1Box3 = document.querySelector(".section1 .sec1_box3")
let sec3 = document.querySelector(".section3")

$(window).scroll(function () { 
if(section1.getBoundingClientRect().top < window.innerHeight - 170){
$(".sec1_box1").removeClass("sec1_box1_animation")
$(".sec1_box2").removeClass("sec1_box2_animation")

}

if(sec1Box3.getBoundingClientRect().top < window.innerHeight - 100){
    $(".sec1_box3").removeClass("sec1_box3_animation")

   setTimeout(() => {
    $(".reaming_boats").removeClass("reaming_boats_animation")
    $(".box_text").removeClass("box_text_animation")
   }, 400);
    

    }

    if(sec3.getBoundingClientRect().top < window.innerHeight - 500){
        $(".sec1_box3").removeClass("sec1_box3_animation")
    
       setTimeout(() => {
        $(".reaming_boats").removeClass("sec2_animation")
        $(".box_text").removeClass("sec2_animation")
       }, 400);
        
    
        }

});

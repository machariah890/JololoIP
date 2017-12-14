
// A $( document ).ready() block.
$( document ).ready(function() {


  $(".box1").animate({
    marginLeft: "+=4000" ,
  }, 0)
  $(".bigbox").animate({
    marginLeft: "-=4000" ,
  }, 0)
  $(".bigbox2").animate({
    marginLeft: "+=4000" ,
  }, 0)
  $(".bigbox3").animate({
    marginLeft: "-=4000" ,
  }, 0)
  $(".bigbox4").animate({
    marginLeft: "+=4000" ,
  }, 0)



  $(".box1").animate({
    marginLeft: "-=4000" ,
  }, 1000)

  $(".bigbox").delay(1000).animate({
    marginLeft: "+=4000" ,
  }, 1000)


$(".bigbox2").delay(2200).animate({
  marginLeft: "-=4000" ,
}, 1000)

$(".bigbox3").delay(3300).animate({
  marginLeft: "+=4000" ,
}, 1000)



$(".bigbox4").delay(4700).animate({
  marginLeft: "-=4000" ,
}, 1000)







});

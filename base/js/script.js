$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
 
  // $(".red-box").fadeTo(2000, 0.2);
  // $(".green-box").fadeTo(1000, 0.5);
  // $(".blue-box").fadeTo(2000, 0.8);

  // $(".green-box").fadeToggle();
  // $(".green-box").fadeToggle();
  // $(".green-box").fadeToggle();

  //$(".green-box").fadeTo(1000, 0); //if you want to fade the box without loosing its place.

 
  // $(".blue-box").hide(1000);
  // $(".blue-box").show(1000);

  //$(".blue-box").toggle();

  // $(".blue-box").slideUp(2000); //disappear
  // $(".blue-box").slideDown(2000); //appear

  // $(".blue-box").slideToggle(2000); //appear

  // $("p").hide(); 
  // $("p").slideDown(1000); 

  $(".blue-box").animate({
    "margin-left":"+=200px"
  }, 2000, "linear"); 

  $(".blue-box").animate({
    "margin-left":"-=200px"
  }, 2000, "linear");



 
});
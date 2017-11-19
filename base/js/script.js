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

  // $(".blue-box").animate({
  //   "margin-left":"+=200px"
  // }, 2000, "linear"); 

  // $(".blue-box").animate({
  //   "margin-left":"-=200px"
  // }, 2000, "linear");

//   $(".blue-box").animate({
//     "margin-left":"200px",
//     "opacity":"0",
//     "height":"50px",
//     "width":"50px",
//     "margin-top": "25px"
//   }, 1000);

// $("p").animate({
//     "font-size":"20px"
//   }, 1000);

//delay so the animation starts once the previous one finish
// $(".red-box").fadeTo(1000, 0.2);
// $(".green-box").delay(1000).fadeTo(1000, 0.5);
// $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

////////////////////////////TIMING ANIMATIONS USING CALLBACK FUNCTIONS//////////////////////////////////////

  // $(".red-box").fadeTo(1000, 0, function() {
  //   alert("This is a callback: Animation finished.");
  // });

  // $(".red-box").animate({
  //   "margin-left":"200px"
  //   }, 1000, 0, function() {
  //   $(".green-box").fadeTo(1000, 0, function() {
  //     $(".blue-box").slideUp(1000);
  //   });
  // });

////////////////////////////CODING ACTIVITY : CREATING A SIGN UP LIGHTBOX//////////////////////////////////////

  // $(".lightbox").delay(500).fadeIn(1000);

////////////////////////////Using CSS Selectors in jQuery//////////////////////////////////////

  // $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
 // $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
 // $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)"); //to select more than 1
 //$("p:first").css("background-color", "rgba(180, 180, 30, 0.8)"); //to select the first paragraph
 //$("li:last").css("background-color", "rgba(180, 180, 30, 0.8)"); //to select the last li
 //$("li:even").css("background-color", "rgba(180, 180, 30, 0.8)"); //to select the last li
 //$("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)"); //to select the last li

 $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)"); 


});
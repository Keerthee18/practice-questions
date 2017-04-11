// # Signin Screen
//
// ## Complete these steps to create a signin prototype:
//
var modalDisplay = $('.modal');
// 1. When the user clicks the `.signin` button, `display`
//(or fade in) the `.modal` window
$('.signin').click(function() {
  modalDisplay.css('display', 'block');
});
//var modalnone=$('modal').css('display','none');

// 2. When the user clicks the `.close` button, `display`
// (or fade out) out the `.modal` window
$('.modal .close').click(function() {
  $('.modal').css('display','none');
});


// 3. When the user clicks the `.submit` button, add an `.error`
//class to both `<input>` elements
$(".submit").click(function() {
  $('input').addClass('error');
});
// 4. When the user puts their cursor in one of the input fields,
//remove the `.error` class from both input elements
$('input').focus(function() {
  $('input').removeClass('error');

});

// 5. Now only remove the `.error` class from an individual `<input>` when the cursor enters it
// 6. (Advanced) Allow the user to click the `.modal` to close itself
//   - Consider what happens when two elements that are overlapping are both waiting for a click: Click events will "bubble" (propagate) up the DOM tree. How could we stop an event from triggering on it's parents?
// 7. (Advanced) When the user clicks `.submit`, only add the `.error` class to the elements that have a `val()` of "" (blank, meaning any text will prevent an error)
// 8. What happens if the user just adding spaces to the field? Find a function that will trim off the white spaces in a field to validate it.
// 9. (Advanced) Try validating a field by adding/removing `.error` immediately after the cursor leaves one of the individual `<input>` (rather than on submit)
// $(".signin").click(
//   funtion()
// {
// $('.modal').css('display','block')
// }
// );

// When the page loads, have a button on the DOM that says 'generate'.
// Upon clicking on that button, append a new container onto the DOM.
// That container should have two buttons, one that reads 'delete', the other
// that reads 'change'. Additionally, there should be text that provides a number.
//  The number should be the number of times the 'generate row' button has been clicked.
//
// The delete button should delete JUST the container that the button is in. The
// change button should change the background-color of the container to red. The default
// or 'normal' state of the background-color should be yellow. Clicking the button a second
// time should change it back to yellow, 3rd time red, 4th time yellow, etc.
//
//
$(document).ready(function() {
//declare row numerator as a global variable
var n = 1;
//create button on load

var generateRowButton = document.createElement('button');
generateRowButton.id = 'generateRowBtn';
$('body').append( generateRowButton );
$('#generateRowBtn').text('Generate Row');

//assign function to generate button

$('#generateRowBtn').on('click', function(){

//create new container and number it based on how many times button was pressed.
var newDiv = document.createElement('div');
newDiv.className='container';
newDiv.id ='row' + n;
$('body').append(newDiv);

//create and append buttons to the div
var newButton = document.createElement('button');
$( '.container' ).last().append( newButton );
newButton.textContent = 'Change';
newButton.id = 'change'+n;
$('#change' + n).on('click', function(){ $(this).parent().toggleClass("red"); });

var newButton2 = document.createElement('button');
$( '.container' ).last().append( newButton2 );
newButton2.textContent = 'Delete';
newButton2.id ='delete' + n;
$('#delete' + n).on('click', function(){ $(this).parent().remove(); });
$( '.container' ).last().append( n );
n++;
});
});

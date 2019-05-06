/*
var sidebarToggle = document.querySelector('.sidebar__toggle--opened');
var sidebar = document.querySelector('.sidebar');

function toggler() {
  sidebar.style.left = 0;
};

if(togler < 0) {
sidebarToggle.onclick = toggler;
}
*/

$(window).on('load', function(){
    var toggle = false;

    $('.sidebar__toggle--opened').click(function() {
        toggle = !toggle;
        if(toggle){
          $('.sidebar').animate({left: 0}, 200);
        }
        else{
          $('.sidebar').animate({left: -300}, 100);
        }
    });
});;
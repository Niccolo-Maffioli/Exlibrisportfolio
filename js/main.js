// kursor
/* new kursor({
    type: 1,
    removeDefaultCursor: true,
    color: '#C06F33',
}) */

// toggle menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".burgermenu-container");
const body = document.querySelector("body");
const cont = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", () => {
    burger.classList.toggle("clicked")
    nav.classList.toggle("show")
    nav.classList.toggle("zindex")
    body.classList.toggle("overflow")
    cont.classList.toggle("-zindex")
  })
})

/* var bar = document.getElementById("e-icon");
var xicon = document.getElementById("x-icon");

function toggle() {

}

addEventListener("click" function(){
  
} */




// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("actives");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// contact form
$(document).ready(function(){
  
  //Hiding Labels Initially
  $('form li').each(function(){
    $(this).addClass('js-hide-label');
  });
  
  //Now adding and removing classes on Events - keyup,blur,focus
  $('form li').find('input,textarea').on('keyup blur focus',function(e) {
    
      var $this = $(this),
          $parent = $this.parent();
      
      if(e.type=='keyup') {
          if($this.val()==''){
            $parent.addClass('js-hide-label');
          }
          else{
            $parent.removeClass('js-hide-label') ;
          }
      }
    else if(e.type=='blur'){
      if($this.val()==''){
        $parent.addClass('js-hide-label');
      }
      else{
        $parent.removeClass('js-hide-label , js-highlight-label').addClass('js-unhighlight-label');
      }
    }
    
      else if(e.type=='focus'){
        
        if($this.val()==''){
          $parent.addClass('js-hide-label');
        }
        else{
        $parent.addClass('js-highlight-label');
        }
        
      }
    
  });
  
});


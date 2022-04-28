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
const none = document.querySelector("#none");
const cube = document.querySelector("#bodycube");

document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", () => {
    burger.classList.toggle("clicked")
    nav.classList.toggle("show")
    nav.classList.toggle("zindex")
    body.classList.toggle("overflow")
    none.classList.toggle("dnone")
    cube.classList.toggle("dnonecube")
    cont.classList.toggle("-zindex")
  })
})

// contact form

var target_popup = function(form) {
  window.open('',//URL should be blank so that it will take form attributes.
              'UniqueWindowName', //window name
              'width=400,height=400,resizeable,scrollbars');
  form.target = 'UniqueWindowName';
}

function myFunction( win ) {
  // do stuff with "win", a newly-opened window
	alert('Sent Successfully ✅');
	console.log(win);
	document.getElementById("form").submit();
}

// white&dark

/* function myFunction() {
  var element = document.body;
  element.classList.toggle("white-mode");
} */

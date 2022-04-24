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

// secret
var easter = document.getElementById("easter"),
    egg;

egg = easter.dataset.egg; 

easter_egg = new Easter(
    egg,
    function(){
        document.getElementById("output").innerHTML = "<a href='http://127.0.0.1:5500/jump.html'>click!</a>";
    },
    true);

document.addEventListener("keypress", function(e){
  easter_egg.update(e.keyCode);
});

function Easter(keyCombination, onComplete , debug)
{

    var keys = keyCombination.split(' '),  // All the keys before completed.
        _cur = 0,                          // The current position in array.
        _deb = debug || false,             // Wether debug mode is on / off.
        onComplete = onComplete;           // What to do when completed.
    
    if ( _deb ) console.log(keys + " | " + _cur + " | " + keys[ _cur ]);

    this.update = function (key)
    {
        if( _deb ) console.log( key + "?=" + keys[ _cur ] );
        if ( key == keys[ _cur ].charCodeAt( 0 ) )
        {
            _cur ++;
            
            if ( keys[ _cur ] == undefined )
            {
                onComplete();
                _cur = 0;
            }
            
        } else {
            if( _deb ) console.log("Nope, reset!");
            _cur = 0;
        }
    }
}

// loader

window.onload = loader;
  function loader() {
    let loaderPage = document.querySelector('.loader-page');
    let counter = document.querySelector('.loader-counter');
    let fill = document.querySelector('.loader-fill');
    let amount = 10;
    let interval = setInterval(loop, 50);
    function loop() {
      if (amount >= 100) {
        clearInterval(interval);
        loaderPage.style.visibility = 'hidden';
        loaderPage.style.opacity = '0'
      } else {
        amount++;
        fill.style.width = amount + '%';
    }
  }
}
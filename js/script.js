
	// Script para abrir / cerrar sidebar
	function w3_open() {
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	}
	 
	function w3_close() {
		document.getElementById("mySidebar").style.display = "none";
		document.getElementById("myOverlay").style.display = "none";
	}
	// Script para cerrar por overlay de bienvenida
	function cerrar_principal() {
		document.getElementById("first-page").style.display = "none";
		document.getElementById("overlay_bienvenida").className = "";
	}
	// Script cambia style de navbar on scroll
	window.onscroll = function() {myFunction()};
	function myFunction() {
		var navbar = document.getElementById("myNavbar");
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			navbar.className = " w3-top" + " w3-card" + " transition" + " w3-black";
			navbar
		} else {
			navbar.className = " w3-top";
		}
	}

	  //Script Toggle sección CV en Sidebar.
  function togglecv() {
  	var cvs = document.getElementById("contentcv");
  	if (cvs.className == "w3-hide") {
  		cvs.className = "w3-show";
  	} else {cvs.className = "w3-hide";}
  };

  function toggleHeightRow(wichQuarter, clicked, height) {
    var toggle = document.getElementsByClassName("skillRows");
    var i = clicked.firstChild.nextElementSibling;
    
    console.log(toggle[wichQuarter]);
    console.log(toggle[wichQuarter].style);
       
    if (toggle[wichQuarter].classList == 'skillRows row-closed') {
      console.log("if true");
      toggle[wichQuarter].style.maxHeight = "800px";
      //toggle[wichQuarter].style.height = "";
      toggle[wichQuarter].classList.remove("row-closed"); 
      
      clicked.innerHTML = '<i class="fa fa-angle-up w3-large"></i> Leer menos';

      clicked.classList.remove("ampliarTexto");
      /*i.classList.remove("fa-angle-down");
      i.classList.add("fa-angle-up");*/
      
    } else {
      console.log("if else");
      //toggle[wichQuarter].style.height = "134px";
      toggle[wichQuarter].style.maxHeight = "134px";
      toggle[wichQuarter].classList.add("row-closed");

      clicked.innerHTML = '<i class="fa fa-angle-down w3-large"></i> Seguir Leyendo';

      clicked.classList.add("ampliarTexto");
      /*i.classList.remove("fa-angle-up");
      i.classList.add("fa-angle-down");*/


    }
    
    /* Agregar cambio de sentido de la flecha de seguir leyendo y texto por " Contraer " */
  };

$(document).ready(function(){
  // Add smooth scrolling a todos los links navbar + footer link (por implementar)
  $(".secciones-bar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //Script carga mapa google - posicion Paraná
  /*
  function mimapa() {
  	var prop = {
  		center:new google.maps.LatLng(51.508742,-0.120850),
  		zoom:5,
  	};
  	var map = new google.maps.Map(document.getElementById("googlemap"),prop);
  } */// fin map
  
});


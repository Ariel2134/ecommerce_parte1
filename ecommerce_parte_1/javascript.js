// Bien, el CSS está completo. Ahora necesitamos ocultar la entrada y hacer que aparezca al hacer clic en el icono.
// Ahora, tenemos un pequeño problema. Al hacer clic en el botón de búsqueda, no se realiza ninguna búsqueda y el elemento de entrada se oculta. Para hacer que el botón de búsqueda funcione, usaremos la bandera

// ¡Perfecto! ¡Esta cosa es compatible con varios navegadores y funciona incluso en IE8! Puede usar la misma técnica para crear otros efectos geniales como en http://www.apple.com/ y http://developer.android.com/index.html


$(".icon").click(function() {
	var icon = $(this),
			input = icon.parent().find("#search"),
			submit = icon.parent().find(".submit"),
			is_submit_clicked = false;
	
	// Animar el campo de entrada
	input.animate({
		"width": "165px",
		"padding": "10px",
		"opacity": 1
	}, 300, function() {
		input.focus();
	});
	
	submit.mousedown(function() {
		is_submit_clicked = true;
	});
	
	// Ahora, también tenemos que ocultar el icono.
	icon.fadeOut(300);
	
	// Se ve muy bien, pero ¿qué hay de ocultar la entrada cuando pierde el foco y no contiene ningún valor? Hagamos eso también
	input.blur(function() {
		if(!input.val() && !is_submit_clicked) {
			input.animate({
				"width": "0",
				"padding": "0",
				"opacity": 0
			}, 200);
			
			// Recuperar el icono
			icon.fadeIn(200);
		};
	});
});










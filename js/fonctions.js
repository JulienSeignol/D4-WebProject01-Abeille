$(document).ready(function(){
    // au clic sur un lien
    $('a.scroll').on('click', function(evt){
      // bloquer le comportement par défaut: on ne rechargera pas la page
       evt.preventDefault();
       // enregistre la valeur de l'attribut  href dans la variable target
	var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome
       et safari (webkit) */
	$('html, body')
       // on arrête toutes les animations en cours
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollBottom) vers
        notre ancre target */
       .animate({scrollTop: $(target).offset().bottom}, 1000 );
    });
});

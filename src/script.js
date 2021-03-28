$(function () {
  // On recupere la position du bloc par rapport au haut du site
  var position_top_raccourci = $(".navbar").offset().top;

  //Au scroll dans la fenetre on déclenche la fonction
  $(window).scroll(function () {
    //si on a defile de plus de 150px du haut vers le bas
    if ($(this).scrollTop() > position_top_raccourci) {
      //on ajoute la classe "fixNavigation"
      $(".navbar").addClass("fixNavigation");
      $(".header").addClass("margin-down");
    } else {
      //sinon on retire la classe "fixNavigation"
      $(".navbar").removeClass("fixNavigation");
      $(".header").removeClass("margin-down");
    }
  });
});

//underline

document.querySelectorAll(".underline").forEach((underline) => {
  underline.addEventListener("mouseover", () => {
    underline.classList.add("underline--activated");
  });
  underline.addEventListener("mouseout", () => {
    underline.classList.remove("underline--activated");
  });
});

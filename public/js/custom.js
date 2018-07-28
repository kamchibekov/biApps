$(".navbar-dark .navbar-nav .nav-link").click(function () {
    var id = $(this).attr('href');
    if (id.length > 1)
        $('html, body').animate({
            scrollTop: $(id).offset().top - 10
        }, 1000);
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".top-container");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    })
    $("#navegar").mouseover(function () {
        $("#dropdown-icon", this).css('rotate', '180deg')
        $("#dropdown-icon", this).css('transition-duration', '0.5s');
    });
    $("#navegar").mouseout(function () {
        $("#dropdown-icon", this).css('rotate', '0deg')
        $("#dropdown-icon", this).css('transition-duration', '0.5s');
    });
})



$(document).ready(function () {
    var btn = $('[data-show]');
    btn.click(function () {
        $(this).toggleClass('open');

        var id = $(this).attr('data-show');
        $('#' + id).slideToggle(300);
    })
})
$(document).ready(function () {
    if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){
        $("html").addClass("ie");
    }

    var listItemActive = 'list-item__active';
    var $listItem = $('.list-item');

    function resetMenu() {
        $listItem.removeClass(listItemActive);
    }

    $listItem.on('click', function (e) {
        var $link = $(this);

        e.preventDefault();
        resetMenu();

        $link.addClass(listItemActive);
    });
});

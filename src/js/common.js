$(document).ready(function () {
    /* Определяет браузер IE */
    if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){
        $("html").addClass("ie");
    }


    /* Собитие для списка */
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
